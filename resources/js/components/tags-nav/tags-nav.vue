<template>
  <div class="tags-nav">
    <div class="close-con">	    
      <Dropdown @on-click="handleTagsOption" style="margin-top:7px;">	      
        <Button size="small" type="text">
          <Icon :size="18" type="ios-close-circle-outline" />	
        </Button>	
        <DropdownMenu slot="list">	
          <DropdownItem name="all" @on-click="handleTagsOption">关闭所有</DropdownItem>	
          <DropdownItem name="others" @on-click="handleTagsOption">关闭其他</DropdownItem>	
        </DropdownMenu>	
      </Dropdown>	
    </div>
    <div class="btn-con left-btn">
      <Button type="text" @click="handleScroll(240)">
        <Icon :size="18" type="ios-arrow-back" />
      </Button>
    </div>
    <div class="btn-con right-btn">
      <Button type="text" @click="handleScroll(-240)">
        <Icon :size="18" type="ios-arrow-forward" />
      </Button>
    </div>
    <div class="scroll-outer" ref="scrollOuter" @DOMMouseScroll="handlescroll" @mousewheel="handlescroll">
      <div ref="scrollBody" class="scroll-body" :style="{left: tagBodyLeft + 'px'}">
        <transition-group name="taglist-moving-animation">
          <Tag
            type="dot"
            v-for="(item, index) in list"
            ref="tagsPageOpened"
            :key="`tag-nav-${index}`"
            :name="item.name"
            @on-close="handleClose(item)"
            @click.native="handleClick(item)"
            :closable="item.name !== 'home'"
            :color="isCurrentTag(item) ? 'primary' : 'default'"
            @contextmenu.prevent.native="contextMenu(item, $event)"
          >{{ showTitleInside(item) }}</Tag>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import { showTitle, routeEqual } from '@js/libs/util';
export default {
  name: 'TagsNav',
  props: {
    value: Object
  },
  data () {
    return {
      tagBodyLeft: 0,
      rightOffset: 40,
      outerPadding: 4,
      contextMenuLeft: 0,
      contextMenuTop: 0,
      visible: false,
      list: [
          {
              name: 'home',
              meta: {
                  title: 'Home',
                  requiresLogin: true
              },
              params: {},
              query: {}
          }
      ]
    }
  },
  computed: {
    currentRouteObj () {
      const { name, params, query } = this.value
      return { name, params, query }
    }
  },
  methods: {
    handlescroll (e) {
      var type = e.type
      let delta = 0
      if (type === 'DOMMouseScroll' || type === 'mousewheel') {
        delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
      }
      this.handleScroll(delta)
    },
    handleScroll (offset) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth
      const bodyWidth = this.$refs.scrollBody.offsetWidth
      if (offset > 0) {
        this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
      } else {
        if (outerWidth < bodyWidth) {
          if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
            this.tagBodyLeft = this.tagBodyLeft
          } else {
            this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
          }
        } else {
          this.tagBodyLeft = 0
        }
      }
    },
    handleTagsOption (type) {
      if (type === 'all') {
        // 关闭所有，除了home
        let res = this.list.filter(item => item.name === 'home')
        
        this.turnToPage('home');
        this.list = res;
      } else if (type === 'others') {
        // 关闭除当前页和home页的其他页
        let res = this.list.filter(item => this.routeEqual(this.currentRouteObj, item) || item.name === 'home')
        this.list = res;
        setTimeout(() => {
          this.getTagElementByName(this.currentRouteObj.name)
        }, 100)
      }

      this.updateStorageTagsNav(this.list);
    },
    handleClose (current) {
      let res = this.list.filter(item => !this.routeEqual(current, item));
      const nextRoute = this.getNextRoute(this.list, current);
      this.$router.push({path:nextRoute.path});
      this.list = res;
    },
    handleClick (item) {
      this.turnToPage(item);
    },
    showTitleInside (item) {
      return false ? this.$t(item.name) : ((item.meta && item.meta.title) || item.name)
    },
    isCurrentTag (item) {
      return this.routeEqual(this.currentRouteObj, item)
    },
    moveToView (tag) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth
      const bodyWidth = this.$refs.scrollBody.offsetWidth
      if (bodyWidth < outerWidth) {
        this.tagBodyLeft = 0
      } else if (tag.offsetLeft < -this.tagBodyLeft) {
        // 标签在可视区域左侧
        this.tagBodyLeft = -tag.offsetLeft + this.outerPadding
      } else if (tag.offsetLeft > -this.tagBodyLeft && tag.offsetLeft + tag.offsetWidth < -this.tagBodyLeft + outerWidth) {
        // 标签在可视区域
        this.tagBodyLeft = Math.min(0, outerWidth - tag.offsetWidth - tag.offsetLeft - this.outerPadding)
      } else {
        // 标签在可视区域右侧
        this.tagBodyLeft = -(tag.offsetLeft - (outerWidth - this.outerPadding - tag.offsetWidth))
      }
    },
    getTagElementByName (name) {
      this.$nextTick(() => {
        this.refsTag = this.$refs.tagsPageOpened
        this.refsTag.forEach((item, index) => {
          if (name === item.name) {
            let tag = this.refsTag[index].$el
            this.moveToView(tag)
          }
        })
      })
    },
    contextMenu (item, e) {
      if (item.name === 'home') {
        return
      }
      this.visible = true
      const offsetLeft = this.$el.getBoundingClientRect().left
      this.contextMenuLeft = e.clientX - offsetLeft + 10
      this.contextMenuTop = e.clientY - 64
    },
    closeMenu () {
      this.visible = false
    },
    /**
     * @description 根据name/params/query判断两个路由对象是否相等
     * @param {*} route1 路由对象
     * @param {*} route2 路由对象
    */
    routeEqual (route1, route2) {
      const params1 = route1.params || {}
      const params2 = route2.params || {}
      const query1 = route1.query || {}
      const query2 = route2.query || {}

      //对比路由参数
      return (route1.name === route2.name)// && this.objEqual(params1, params2) && this.objEqual(query1, query2)
    },
    /**
     * @param {*} obj1 对象
     * @param {*} obj2 对象
     * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
     */
    objEqual (obj1, obj2) {
      const keysArr1 = Object.keys(obj1)
      const keysArr2 = Object.keys(obj2)
      if (keysArr1.length !== keysArr2.length) return false
      else if (keysArr1.length === 0 && keysArr2.length === 0) return true
      /* eslint-disable-next-line */
      else return !keysArr1.some(key => obj1[key] != obj2[key])
    },
    /**
     * @param {Array} list 标签列表
     * @param {String} name 当前关闭的标签的name
     */
    getNextRoute (list, route) {
      let res = {}
      if (list.length === 2) {
        res = this.getHomeRoute(list)
      } else {
        const index = list.findIndex(item => this.routeEqual(item, route))
        if (index === list.length - 1) res = list[list.length - 2]
        else res = list[index + 1]
      }
      return res
    },
    /**
     * @param {Array} routers 路由列表数组
     * @description 用于找到路由列表中name为home的对象
     */
    getHomeRoute (routers) {
      let i = -1
      let len = routers.length
      let homeRoute = {}
      while (++i < len) {
        let item = routers[i]
        if (item.children && item.children.length) {
          let res = this.getHomeRoute(item.children)
          if (res.name) return res
        } else {
          if (item.name === 'home') homeRoute = item
        }
      }
      return homeRoute
    },
    turnToPage (route) {
        let { name, params, query } = {}
        if (typeof route === 'string') name = route
        else {
            name = route.name
            params = route.params
            query = route.query
        }
        if (name.indexOf('isTurnByHref_') > -1) {
            window.open(name.split('_')[1])
            return
        }
        this.$router.push({
            name,
            params,
            query
        });
    },
    /**
     * update tags nav data
     */
    updateStorageTagsNav (list) {
        localStorage.setItem('tags_nav', JSON.stringify(list));
    },
    /**
     * 判断打开的标签列表里是否已存在这个新添加的路由对象
     */
    routeHasExist () {
      let routeItem = this.resetRoute(this.$route);
      let isCheck = false;
      this.list.forEach((item, index) => {
          if(this.routeEqual(item, routeItem)){
              isCheck = true;
          }
      });
      
      if (!isCheck) this.list.push(routeItem);
      this.updateStorageTagsNav(this.list);
    },
    /**
     * 重构路由
     */
    resetRoute (route) {
      return {
        meta: route.meta,
        name: route.name,
        params: route.params,
        query: route.query
      }
    }
  },
  watch: {
    '$route' (to) {
      this.routeHasExist();
      this.getTagElementByName(to.name);
    },
    visible (value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted () {
    const tagsNav = localStorage.getItem('tags_nav');
    if(tagsNav) this.list = JSON.parse(tagsNav);

    
    setTimeout(() => {
      this.routeHasExist();
      this.getTagElementByName(this.$route.name);
    }, 200);
  }
}
</script>

<style>
.tags-nav {
  position: relative;
  border-top: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
  height: 100%;
}

.tags-nav .close-con {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 32px;
  background: #fff;
  text-align: center;
  z-index: 10;
}

.tags-nav .btn-con {
  position: absolute;
  top: 0px;
  height: 100%;
  background: #fff;
  padding-top: 3px;
  z-index: 10;
}

.tags-nav .btn-con button {
  padding: 6px 4px;
  line-height: 14px;
  text-align: center;
  margin: 0;
}

.tags-nav .btn-con.left-btn {
  left: 0px;
}

.tags-nav .btn-con.right-btn{
  right: 32px;
  border-right: 1px solid #F0F0F0;
}

.tags-nav .scroll-outer {
  position: absolute;
  left: 28px;
  right: 61px;
  top: 0;
  bottom: 0;
  box-shadow: 0px 0 3px 2px rgba(100,100,100,.1) inset;
}


.tags-nav .scroll-outer .scroll-body {
  height: "calc(100% - 1px)";
  display: inline-block;
  padding: 1px 4px 0;
  position: absolute;
  overflow: visible;
  white-space: nowrap;
  transition: left .3s ease;
}

.tags-nav .scroll-outer .scroll-body .ivu-tag-dot-inner {
  transition: background .2s ease;
}
.tags-nav .contextmenu {
  position: absolute;
  margin: 0;
  padding: 5px 0;
  background: #fff;
  z-index: 100;
  list-style-type: none;
  border-radius: 4px;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
  
}

.tags-nav .contextmenu li {
  margin: 0;
  padding: 5px 15px;
  cursor: pointer;
}
.tags-nav .contextmenu li:hover {
  background: #eee;
}

</style>