<style scoped lang="less">
    .demo-color-name{
        color: #fff;
        font-size: 16px;
        &.dark{
            color: #657180;
        }
    }
    .demo-color-desc{
        color: #fff;
        opacity: .7;
        &.dark{
            color: #657180;
        }
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Color</h1>
            <Anchor title="Overview" h2></Anchor>
            <p>iView recommends to use the colors of the palette below as the rule for design and development for ensuring the visual consistence among the pages and components.</p>
            <Anchor title="Primary Colors" h3></Anchor>
            <p>iView use the safe blue colors as the primary colors, among which the <strong>Light Primary</strong> is usually used for <i>hover</i> state while the <strong>Dark Primary</strong> for <i>active</i>.</p>
            <Row :gutter="16">
                <i-col span="8">
                    <Card :bordered="false" style="background:#2d8cf0">
                        <div class="demo-color-name">Primary</div>
                        <div class="demo-color-desc">#2d8cf0</div>
                    </Card>
                </i-col>
                <i-col span="8">
                    <Card :bordered="false" style="background:#5cadff">
                        <div class="demo-color-name">Light Primary</div>
                        <div class="demo-color-desc">#5cadff</div>
                    </Card>
                </i-col>
                <i-col span="8">
                    <Card :bordered="false" style="background:#2b85e4">
                        <div class="demo-color-name">Dark Primary</div>
                        <div class="demo-color-desc">#2b85e4</div>
                    </Card>
                </i-col>
            </Row>
            <br>
            <Anchor title="Secondary Colors" h3></Anchor>
            <p>The secondary colors are typical ones, which usually used for messages, e.g., success, warning and fail.</p>
            <Row :gutter="16">
                <i-col span="6">
                    <Card :bordered="false" style="background:#2d8cf0">
                        <div class="demo-color-name">Info</div>
                        <div class="demo-color-desc">#2d8cf0</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#19be6b">
                        <div class="demo-color-name">Success</div>
                        <div class="demo-color-desc">#19be6b</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#ff9900">
                        <div class="demo-color-name">Warning</div>
                        <div class="demo-color-desc">#ff9900</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#ed3f14">
                        <div class="demo-color-name">Error</div>
                        <div class="demo-color-desc">#ed3f14</div>
                    </Card>
                </i-col>
            </Row>
            <br>
            <Anchor title="Neutral Colors" h3></Anchor>
            <p>Neutral colors are usually used for text, background, border, shadow, etc, showing the hierachical structure of the page.</p>
            <Row :gutter="16">
                <i-col span="6">
                    <Card :bordered="false" style="background:#1c2438">
                        <div class="demo-color-name">Title</div>
                        <div class="demo-color-desc">#1c2438</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#495060">
                        <div class="demo-color-name">Content</div>
                        <div class="demo-color-desc">#495060</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#80848f">
                        <div class="demo-color-name">Sub Color</div>
                        <div class="demo-color-desc">#80848f</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#bbbec4">
                        <div class="demo-color-name">Disabled</div>
                        <div class="demo-color-desc">#bbbec4</div>
                    </Card>
                </i-col>
            </Row>
            <br>
            <Row :gutter="16">
                <i-col span="6">
                    <Card :bordered="false" style="background:#dddee1">
                        <div class="demo-color-name dark">Border</div>
                        <div class="demo-color-desc dark">#dddee1</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#e9eaec">
                        <div class="demo-color-name dark">Divider</div>
                        <div class="demo-color-desc dark">#e9eaec</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#f8f8f9">
                        <div class="demo-color-name dark">Background</div>
                        <div class="demo-color-desc dark">#f8f8f9</div>
                    </Card>
                </i-col>
            </Row>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            return {

            }
        }
    }
</script>