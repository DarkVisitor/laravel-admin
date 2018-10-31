<template>
    <div class="ivu-layout-pages">
        <Sider hide-trigger>
            <Menu :active-name="$route.name" theme="light" width="auto" :open-names="[]">
                <Submenu name="users">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </template>
                    <MenuItem name="user" to="/admin/system/users/user">成员信息</MenuItem>
                </Submenu>
                <Submenu name="basic">
                    <template slot="title">
                        <Icon type="ios-settings"></Icon>
                        基础设置
                    </template>
                    <MenuItem name="role" to="/admin/system/basic/role">角色配置</MenuItem>
                    <MenuItem name="module" to="/admin/system/basic/module">模块配置</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout class="layout-page-content">
            <Breadcrumb :style="{margin: '24px 0'}">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Components</BreadcrumbItem>
                <BreadcrumbItem>Layout</BreadcrumbItem>
            </Breadcrumb>
            <Content>
                <router-view></router-view>
            </Content>
        </Layout>
    </div>
</template>
<script>
    export default {
        
    }
</script>

