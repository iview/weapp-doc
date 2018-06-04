<template>
    <i-article>
        <article>
            <h1>Collapse</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Used to fold/spread the content area.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Collapse v-model="value1">
                        <Panel name="1">
                            史蒂夫·乔布斯
                            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                        </Panel>
                        <Panel name="2">
                            斯蒂夫·盖瑞·沃兹尼亚克
                            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                        </Panel>
                        <Panel name="3">
                            乔纳森·伊夫
                            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                        </Panel>
                    </Collapse>
                </div>
                <div slot="desc">
                    <p>You can spread multiple panels simultaneously by default. You can also set which one to be spread.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Accordion">
                <div slot="demo">
                    <Collapse accordion v-model="value2">
                        <Panel name="1">
                            史蒂夫·乔布斯
                            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                        </Panel>
                        <Panel name="2">
                            斯蒂夫·盖瑞·沃兹尼亚克
                            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                        </Panel>
                        <Panel name="3">
                            乔纳森·伊夫
                            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                        </Panel>
                    </Collapse>
                </div>
                <div slot="desc">
                    <p>Enable accordion effect by setting <code>accordion</code> prop. In this mode, you can only spread one panel each time.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.accordion }}</i-code>
            </Demo>
            <Demo title="Panel Nesting">
                <div slot="demo">
                    <Collapse accordion v-model="value3">
                        <Panel name="1">
                            史蒂夫·乔布斯
                            <div slot="content">
                                史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                                <Collapse accordion v-model="value4">
                                    <Panel name="1-1">
                                        iPhone
                                        <p slot="content">iPhone，是美国苹果公司研发的智能手机，它搭载iOS操作系统。第一代iPhone于2007年1月9日由苹果公司前首席执行官史蒂夫·乔布斯发布，并在2007年6月29日正式发售。</p>
                                    </Panel>
                                    <Panel name="1-2">
                                        iPad
                                        <p slot="content">iPad是由苹果公司于2010年开始发布的平板电脑系列，定位介于苹果的智能手机iPhone和笔记本电脑产品之间，（屏幕中有4个虚拟程序固定栏）与iPhone布局一样，提供浏览网站、收发电子邮件、观看电子书、播放音频或视频、玩游戏等功能。由英国出生的设计主管乔纳森·伊夫（Jonathan Ive）（有些翻译为 乔纳森·艾维）领导的团队设计的，这个圆滑、超薄的产品反映出了伊夫对德国天才设计师Dieter Rams的崇敬之情。</p>
                                    </Panel>
                                </Collapse>
                            </div>
                        </Panel>
                        <Panel name="2">
                            斯蒂夫·盖瑞·沃兹尼亚克
                            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                        </Panel>
                        <Panel name="3">
                            乔纳森·伊夫
                            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                        </Panel>
                    </Collapse>
                </div>
                <div slot="desc">
                    <p>Collapse can be nested.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.nest }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Collapse props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>value</td>
                            <td>The name of the activated panel. Use v-model to enable a two-way binding.</td>
                            <td>Array | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>accordion</td>
                            <td>Enable accordion effect or not. In this mode, you can only spread one panel each time.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Collapse events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Description</th>
                            <th>Return Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-change</td>
                            <td>Emit when panel is switched. Return the key of the spread panel(s) in an array. </td>
                            <td>[]</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Panel props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>name</td>
                            <td>The name of current panel, corresponds with <code>value</code> of Collapse. Index value will be used if not filled.</td>
                            <td>String</td>
                            <td>index</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Panel slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>-</td>
                            <td>Header of the panel.</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>Description content.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/collapse';
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
                code: Code,
                value1: '1',
                value2: '1',
                value3: '1',
                value4: '1-1'
            }
        }
    }
</script>