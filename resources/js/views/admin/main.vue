<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu class="ivu-admin" ref="topMenu" mode="horizontal" theme="primary" :active-name="topActiveName" @on-select="handleChangeTopMenu">
                    <div class="layout-logo">
                        <img src="/img/logo.png">
                        <span class="admin-website-name">
                            Laravel<br>
                            Admin
                        </span>
                    </div>
                    <div class="layout-nav admin-top-nav">
                        <MenuItem v-for="(item, index) in topNavMenuList" :key="index" :name="item.vue_router_name">
                            <Icon :type="item.icon"></Icon>
                            {{ item.title }}
                        </MenuItem>
                    </div>
                    <div class="layout-work-bench">
                        <div class="personal-center">
                            <Dropdown trigger="click" @on-click="handleDropdownClick">
                                <a href="javascript:void(0)">
                                    <Avatar icon="ios-person" size="default" :src="admins.avatar" />{{admins.name}}
                                    <Icon type="arrow-down-b"></Icon>
                                </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem name="personalCenter">个人中心</DropdownItem>
                                    <DropdownItem disabled>新功能</DropdownItem>
                                    <DropdownItem name="signOut" divided>退出登录</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <div class="message-notify">
                            <span class="msg">
                                <Icon type="md-notifications-outline" :size="24"></Icon>
                                <sup class="ivu-badge-dot"></sup>
                            </span>
                        </div>                        
                    </div>
                </Menu>
            </Header>
            <Layout v-if="topNavMenuList.length">
                <Sider hide-trigger>
                    <Menu ref="siderMenu" :active-name="siderActiveName" theme="light" width="auto" :open-names="[siderOpenNames]" @on-select="handleSelectMenu">
                        <Submenu v-for="(item, index) in siderNavMenuList" :key="index" :name="item.vue_router_name">
                            <template slot="title">
                                <Icon :type="item.icon"></Icon>
                                {{item.title}}
                            </template>
                            <MenuItem v-for="(menu, menuIndex) in item.children" :key="menuIndex" :name="menu.vue_router_name">{{menu.title}}</MenuItem>
                        </Submenu>
                        
                    </Menu>
                </Sider>
                <Layout style="overflow-y: hidden;">
                    <div class="tag-nav-wrapper" style="background: #f0f0f0;height: 40px;padding: 0;">
                        <tags-nav :value="$route"></tags-nav>
                    </div>
                    <Content style="margin-top: 15px;overflow-y: auto;">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import routers from '@js/router/routers.js';
import TagsNav from '@js/components/tags-nav';
import {removeToken,getMenuTree,removeMenuTree,transferByRouteArray} from '@js/libs/util.js';
export default {
    name: 'Main',
    components: {
        TagsNav
    },
    data() {
        return {
            topNavMenuList: [],
            siderNavMenuList: [],
            siderOpenNames: '',
            topActiveName: '',
            siderActiveName: ''
        }
    },
    computed: {
        admins() {
            return this.$store.getters.getAdminInfo;
        },
        menuTrees() {
            return this.$store.getters.getPermission;
        }
    },
    methods: {
        /**
         * 选择菜单（MenuItem）时触发事件
         */
        handleSelectMenu(name) {
            this.$router.push({name: name, params: { id: 134}});    //路由跳转
        },
        /**
         * 设置顶部导航菜单
         */
        setTopNavMenu() {
            const topNavMenu = [];
            this.menuTrees.forEach((item, index) => {
                if(!item.parent_id && item.is_menu) topNavMenu.push(item);  //将符合条件的数据放入顶部导航菜单数组中
            });

            this.topNavMenuList = topNavMenu;  //更新顶部导航菜单列表

            if (!this.siderNavMenuList.length){
                //设置初始化侧边菜单
                this.siderNavMenuList = this.menuTrees[0].children;
            }
        },
        /**
         * 根据当前路由设置侧边导航菜单
         */
        setSiderNavMenu() {
            const matcheds = this.$route.matched;
            let topSelectName = matcheds[1].name;
            this.topNavMenuList.forEach(item => {
                if (item.vue_router_name === topSelectName){
                    this.siderNavMenuList = item.children;  // 重新赋值侧边导航菜单数据
                }
            });
        },
        /**
         * 根据顶部导航菜单切换侧边导航菜单
         */
        handleChangeTopMenu(name) {
            this.topActiveName = name;
            this.topNavMenuList.forEach(item => {
                if (item.vue_router_name === name){
                    this.siderNavMenuList = item.children;  // 重新赋值侧边导航菜单数据
                }
            });

            // 手动切换顶部菜单选中项
            this.$nextTick(() => {
                this.$refs.topMenu.updateActiveName();
            })

            const matcheds = this.$route.matched;
            if (matcheds[1].name === name){
                this.setNavMenuSelectStatus();      // 切换导航菜单选中状态
            }else{
                this.siderOpenNames = '';
                this.siderActiveName = '';
                this.$nextTick(() => {
                    this.$refs.siderMenu.updateOpened();
                    this.$refs.siderMenu.updateActiveName();
                });  
            }            
        },
        /**
         * 根据当前路由设置导航菜单选中状态
         */
        setNavMenuSelectStatus() {
            const matcheds = this.$route.matched;
            if(matcheds.length > 2){
                this.topActiveName = matcheds[1].name;      // 获取顶部导航菜单 name 属性
                this.siderOpenNames = matcheds[2].name;     // 获取侧边一级导航菜单 name 属性
                this.siderActiveName = matcheds[3].name;    // 获取侧边二级导航菜单 name 属性
            }else{
                this.topActiveName = '';
                this.siderOpenNames = '';
                this.siderActiveName = '';
            }
            this.$nextTick(() => {
                this.$refs.topMenu.updateActiveName();
                this.$refs.siderMenu.updateOpened();
                this.$refs.siderMenu.updateActiveName();
            });       
        },
        /**下拉菜单选中点击事件 */
        handleDropdownClick(name) {
            switch(name){
                case 'personalCenter':
                    this.$router.push({path: '/admin/personalCenter'});
                    break;
                case 'signOut':
                    //delete token
                    removeToken();
                    //delete menu tree
                    removeMenuTree();
                    //清除所有本地存储信息
                    localStorage.clear();
                    //redirect to login page.
                    this.$router.push({name: 'login'});
                    break;
            }
        }
    },
    watch: {
       '$route'(to) {
            this.setSiderNavMenu();
            this.setNavMenuSelectStatus();
       },
       admins(curVal) {
            this.userName = curVal.name;
            this.userAvatar = curVal.avatar;
            
            // set top menu
            this.setTopNavMenu();   // 设置顶部导航菜单
       }
    },
    created() {
        
    },
    mounted() {
        this.setTopNavMenu();       // 设置顶部导航菜单
        this.setSiderNavMenu();
        this.setNavMenuSelectStatus();
    }
}
</script>
<style>
.ivu-layout-sider::after {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background: #dcdee2;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
}
</style>