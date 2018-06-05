<style lang="less">
    .apps{
        display: inline-block;
        float: left;
        margin-left: 22px;
        padding-left: 22px;
        position: relative;
        top: 5px;

        .ivu-dropdown-rel{
            height: 57px;
        }

        &::after{
            content: '';
            display: block;
            width: 1px;
            height: 24px;
            background: #ebedee;
            position: absolute;
            top: 16px;
            left: 0;
        }

        &-menu{
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
        &-arrow{
            position: relative;
            top: -4px;
            left: 2px;
            cursor: pointer;
        }
        &-img{
            width: 24px;
            height: 24px;
            vertical-align: middle;
        }
        &-name{
            display: inline-block;
            vertical-align: middle;
            margin-left: 6px;
            font-size: 14px;
        }
    }
</style>
<template>
    <div class="apps">
        <Dropdown transfer trigger="click" @on-click="handleChange">
            <img src="https://file.iviewui.com/icon/application.png" class="apps-menu">
            <Icon type="ios-arrow-down" class="apps-arrow"></Icon>
            <DropdownMenu slot="list">
                <DropdownItem name="iview">
                    <img src="https://file.iviewui.com/icon/iview.png" class="apps-img">
                    <span class="apps-name">iView</span>
                </DropdownItem>
                <DropdownItem name="iview-weapp">
                    <img src="https://file.iviewui.com/icon/iview.png" class="apps-img">
                    <span class="apps-name">iView Weapp</span>
                </DropdownItem>
                <DropdownItem name="inmap">
                    <img src="https://file.iviewui.com/icon/inmap.png" class="apps-img">
                    <span class="apps-name">inMap</span>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>
<script>
    export default {
        methods: {
            handleChange (name) {
                if (name === 'iview') {
                    window.location.href = 'https://www.iviewui.com';
                } else if (name === 'iview-weapp') {
                    window.location.href = 'https://weapp.iviewui.com';
                } else if (name === 'inmap') {
                    window.location.href = 'http://inmap.talkingdata.com';
                }
            }
        }
    };
</script>