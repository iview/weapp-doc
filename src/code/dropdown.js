let code = {};

code.base = `
<template>
    <Dropdown>
        <a href="javascript:void(0)">
            下拉菜单
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 20px">
        <Button type="primary">
            下拉菜单
            <Icon type="arrow-down-b"></Icon>
        </Button>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>
<script>
    export default {
        
    }
</script>
`;

code.trigger = `
<template>
    <Dropdown>
        <a href="javascript:void(0)">
            hover 触发
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown trigger="click" style="margin-left: 20px">
        <a href="javascript:void(0)">
            click 触发
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
        <a href="javascript:void(0)" @click="handleOpen">
            custom 触发
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <p>常用于各种自定义下拉内容的场景。</p>
            <div style="text-align: right;margin:10px;">
                <Button type="primary" @click="handleClose">关闭</Button>
            </div>
        </DropdownMenu>
    </Dropdown>
</template>
<script>
    export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            handleOpen () {
                this.visible = true;
            },
            handleClose () {
                this.visible = false;
            }
        }
    }
</script>
`;

code.placement = `
<template>
    <Dropdown placement="bottom-start">
        <a href="javascript:void(0)">
            菜单(左)
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 20px">
        <a href="javascript:void(0)">
            菜单(居中)
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 20px" placement="bottom-end">
        <a href="javascript:void(0)">
            菜单(右)
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>
<script>
    export default {
        
    }
</script>
`;

code.nest = `
<template>
    <Dropdown>
        <a href="javascript:void(0)">
            北京小吃
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <Dropdown placement="right-start">
                <DropdownItem>
                    北京烤鸭
                    <Icon type="ios-arrow-right"></Icon>
                </DropdownItem>
                <DropdownMenu slot="list">
                    <DropdownItem>挂炉烤鸭</DropdownItem>
                    <DropdownItem>焖炉烤鸭</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <DropdownItem>冰糖葫芦</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;