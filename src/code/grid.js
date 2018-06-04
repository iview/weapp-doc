let code = {};

code.base = `
<template>
    <Row>
        <Col span="12">col-12</Col>
        <Col span="12">col-12</Col>
    </Row>
    <br>
    <Row>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
    </Row>
    <br>
    <Row>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.gutter = `
<template>
    <Row :gutter="16">
        <Col span="6">
            <div>col-6</div>
        </Col>
        <Col span="6">
            <div>col-6</div>
        </Col>
        <Col span="6">
            <div>col-6</div>
        </Col>
        <Col span="6">
            <div>col-6</div>
        </Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.order = `
<template>
    <Row type="flex">
        <Col span="6" order="4">1 | order-4</Col>
        <Col span="6" order="3">2 | order-3</Col>
        <Col span="6" order="2">3 | order-2</Col>
        <Col span="6" order="1">4 | order-1</Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.push = `
<template>
    <Row>
        <Col span="18" push="6">col-18 | push-6</Col>
        <Col span="6" pull="18">col-6 | pull-18</Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.offset = `
<template>
    <Row>
        <Col span="8">col-8</Col>
        <Col span="8" offset="8">col-8 | offset-8</Col>
    </Row>
    <br>
    <Row>
        <Col span="6" offset="8">col-6 | offset-8</Col>
        <Col span="6" offset="4">col-6 | offset-4</Col>
    </Row>
    <br>
    <Row>
        <Col span="12" offset="8">col-12 | offset-8</Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.justify = `
<template>
    <p>子元素向左排列</p>
    <Row type="flex" justify="start" class="code-row-bg">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <p>子元素向右排列</p>
    <Row type="flex" justify="end" class="code-row-bg">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <p>子元素居中排列</p>
    <Row type="flex" justify="center" class="code-row-bg">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <p>子元素等宽排列</p>
    <Row type="flex" justify="space-between" class="code-row-bg">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <p>子元素分散排列</p>
    <Row type="flex" justify="space-around" class="code-row-bg">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.align = `
<template>
    <p>顶部对齐</p>
    <Row type="flex" justify="center" align="top" class="code-row-bg">
        <Col span="4"><p style="height: 80px">col-4</p></Col>
        <Col span="4"><p style="height: 30px">col-4</p></Col>
        <Col span="4"><p style="height: 100px">col-4</p></Col>
        <Col span="4"><p style="height: 60px">col-4</p></Col>
    </Row>
    <p>底部对齐</p>
    <Row type="flex" justify="center" align="bottom" class="code-row-bg">
        <Col span="4"><p style="height: 80px">col-4</p></Col>
        <Col span="4"><p style="height: 30px">col-4</p></Col>
        <Col span="4"><p style="height: 100px">col-4</p></Col>
        <Col span="4"><p style="height: 60px">col-4</p></Col>
    </Row>
    <p>居中对齐</p>
    <Row type="flex" justify="center" align="middle" class="code-row-bg">
        <Col span="4"><p style="height: 80px">col-4</p></Col>
        <Col span="4"><p style="height: 30px">col-4</p></Col>
        <Col span="4"><p style="height: 100px">col-4</p></Col>
        <Col span="4"><p style="height: 60px">col-4</p></Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.reponsive = `
<template>
    <Row>
        <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
        <Col :xs="20" :sm="16" :md="12" :lg="8">Col</Col>
        <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.reponsive2 = `
<template>
    <Row>
        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
        <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;