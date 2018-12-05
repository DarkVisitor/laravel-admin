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
                        <MenuItem v-for="(item, index) in topMenuList" :key="index" :name="item.vue_name">
                            <Icon :type="item.icon"></Icon>
                            {{ item.title }}
                        </MenuItem>
                    </div>
                    <div class="layout-work-bench">
                        <div class="personal-center">
                            <Dropdown trigger="click" @on-click="handleDropdownClick">
                                <a href="javascript:void(0)">
                                    <Avatar icon="ios-person" size="default" :src="userAvatar" />{{userName}}
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
            <Layout v-show="topMenuList.length">
                <Sider hide-trigger>
                    <Menu ref="siderMenu" :active-name="siderActiveName" theme="light" width="auto" :open-names="[siderOpenNames]" @on-open-change="handleSiderOpenChange">
                        <Submenu v-for="(item, index) in siderMenuList" :key="index" :name="item.vue_name">
                            <template slot="title">
                                <Icon :type="item.icon"></Icon>
                                {{item.title}}
                            </template>
                            <MenuItem v-for="(menu, menuIndex) in item.children" :key="menuIndex" :name="menu.vue_name" :to="menu.vue_router">{{menu.title}}</MenuItem>
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
            <Layout v-show="!topMenuList.length">
                <router-view></router-view>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import router from '@js/router';
import routers from '@js/router/routers.js';
import TagsNav from '@js/components/tags-nav';
import {removeToken,getMenuTree,removeMenuTree} from '@js/libs/util.js';
export default {
    name: 'Main',
    components: {
        TagsNav
    },
    data () {
        return {
            userAvatar: '',
            userName: 'admin',
            topMenuList: [],
            siderMenuList: [],
            siderOpenNames: '',
            topActiveName: '',
            siderActiveName: ''
        }
    },
    computed: {
        admins () {
            return this.$store.getters.getAdminInfo;
        }
    },
    methods: {
        /**
         * 顶部导航菜单选择触发事件
         */
        handleChangeTopMenu (name) {
            this.topActiveName = name;
            this.topMenuList.forEach(item => {
                if (item.vue_name === name){
                    this.siderMenuList = item.children;
                }
            });

            //手动切换顶部菜单选中项
            this.$nextTick(() => {
                this.$refs.topMenu.updateActiveName();
            })

            //1、根据当前选中路由开启/关闭左侧子菜单
            this.setCurrentActiveNameAndOpenNames();

        },
        /**
         * 监听Sider菜单展开或关闭
         */
        handleSiderOpenChange (open) {
            /* console.log(open) */
        },
        /**
         * 根据TagsNav切换顶部菜单当前选中状态
         */
        toggleTopActiveName (route) {
            if (route.matched.length > 1){
                const name = route.matched[1].name;
                this.topActiveName = name;
                //this.handleChangeTopMenu(name);
            }else {
                this.topActiveName = '';
            }
        },
        /**
         * 根据TagsNav切换左侧菜单选中
         */
        toggleSiderOpenNames (route) {
            this.setCurrentActiveNameAndOpenNames();
        },
        /**
         * 设置顶部菜单数据
         */
        setTopMenuList () {
            const menuTree = getMenuTree();
            const topMenu = [];
            menuTree.forEach((item, index) => {
                if(!item.parent_id) topMenu.push(item);
            });

            this.topMenuList = topMenu;

            //首次加载Sider菜单显示顶部第一个菜单的子项
            if (menuTree.length && this.siderMenuList.length <= 0){
                if (menuTree[0].children.length){
                    this.siderMenuList = menuTree[0].children;
                }            
            }
        },
        /**
         * 根据当前路由设置侧边菜单选中项和父菜单展开项
         */
        setCurrentActiveNameAndOpenNames () {
            const matcheds = this.$route.matched;
            if(matcheds.length > 1){
                this.siderOpenNames = matcheds[matcheds.length - 1].parent.name;
                this.siderActiveName = this.$route.name;
                this.$nextTick(() => {
                    this.$refs.siderMenu.updateOpened();
                    this.$refs.siderMenu.updateActiveName();
                });
            }
            
        },
        /**刷新页面标签菜单选中项不是Home时，根据当前路由选中顶部菜单和切换侧边父菜单展开项 */
        initActiveMenu () {

        },
        /**下拉菜单选中点击事件 */
        handleDropdownClick (name) {
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
       '$route' (to) {
            this.toggleTopActiveName(to);

            //
            this.toggleSiderOpenNames(to);
            this.siderActiveName = to.name;

            this.$nextTick(() => {
                this.$refs.siderMenu.updateOpened();
                this.$refs.siderMenu.updateActiveName();
            });
       },
       admins (curVal) {
            this.userName = curVal.name;
            this.userAvatar = curVal.avatar;
            
            //set top menu
            this.setTopMenuList();
       }
    },
    created () {
        this.$store.dispatch('loadAdminInfo');
        
        //set top menu
        this.setTopMenuList();
    
        //Switch the top and side menu selections according to the current route.
        this.toggleTopActiveName(this.$route);
        this.toggleSiderOpenNames(this.$route);
    },
    mounted () {
        router.addRoutes([
            {
                path: '/admin/429',
                name: '429',
                component: (resolve) => require(['@js/views/admin/login/login.vue'], resolve)
            }
        ]);
        console.log(router);
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