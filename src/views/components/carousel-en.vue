<style>
    .demo-carousel{
        height: 200px;
        line-height: 200px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        background: #506b9e;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Carousel</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Usually used on a set of pictures or cards. Use Carousel to take in the content when lack of space.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Carousel v-model="value1" loop>
                        <CarouselItem>
                            <div class="demo-carousel">1</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">2</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">3</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">4</div>
                        </CarouselItem>
                    </Carousel>
                </div>
                <div slot="desc">
                    <p>The simplest usage.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Auto Play">
                <div slot="demo">
                    <Carousel autoplay v-model="value2" loop>
                        <CarouselItem>
                            <div class="demo-carousel">1</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">2</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">3</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">4</div>
                        </CarouselItem>
                    </Carousel>
                </div>
                <div slot="desc">
                    <p>Enable auto play by setting <code>autoplay</code> prop. You can also set <code>autoplay-speed</code> to change the play speed.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.autoplay }}</i-code>
            </Demo>
            <Demo title="Integrated Properties">
                <div slot="demo">
                    <Form :model="setting" :label-width="100">
                        <FormItem label="Automatic switching">
                            <Switch v-model="setting.autoplay">
                                <span slot="open">On</span>
                                <span slot="close">Off</span>
                            </Switch>
                        </FormItem>
                        <FormItem label="Circular indicator">
                            <Switch v-model="setting.radiusDot">
                                <span slot="open">On</span>
                                <span slot="close">Off</span>
                            </Switch>
                        </FormItem>
                        <FormItem label="Automatic switching speed">
                            <Slider v-model="setting.autoplaySpeed" :min="300" :max="10000" :step="100"></Slider>
                        </FormItem>
                        <FormItem label="Indicator position">
                            <RadioGroup v-model="setting.dots" type="button">
                                <Radio label="inside">interior</Radio>
                                <Radio label="outside">exterior</Radio>
                                <Radio label="none">Don't show</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="Switch the arrow">
                            <RadioGroup v-model="setting.arrow" type="button">
                                <Radio label="hover">Hover displayed when</Radio>
                                <Radio label="always">Always show</Radio>
                                <Radio label="never">Don't show</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="Indicator trigger mode">
                            <RadioGroup v-model="setting.trigger" type="button">
                                <Radio label="click">Click</Radio>
                                <Radio label="hover">Hover</Radio>
                            </RadioGroup>
                        </FormItem>
                    </Form>
                    <Carousel
                        v-model="value3"
                        :autoplay="setting.autoplay"
                        :autoplay-speed="setting.autoplaySpeed"
                        :dots="setting.dots"
                        :radius-dot="setting.radiusDot"
                        :trigger="setting.trigger"
                        :arrow="setting.arrow">
                        <CarouselItem>
                            <div class="demo-carousel">1</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">2</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">3</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">4</div>
                        </CarouselItem>
                    </Carousel>
                </div>
                <div slot="desc">
                    <p>Adjust properties dynamically.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.setting }}</i-code>
            </Demo>

            <ad></ad>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Carousel props" h3></Anchor>
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
                            <td>Index of the slider, starts from 0. Use v-model to enable a two-way binding on data.</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>height</td>
                            <td>The height of the carousel, 'auto' or specific height value. Unit: px</td>
                            <td>String | Number</td>
                            <td>auto</td>
                        </tr>
                        <tr>
                            <td>loop</td>
                            <td>Enable loop.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>autoplay</td>
                            <td>Enable auto play.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>autoplay-speed</td>
                            <td>Time interval of the auto play. Unit: ms</td>
                            <td>Number</td>
                            <td>2000</td>
                        </tr>
                        <tr>
                            <td>dots</td>
                            <td>Position of the in indicator. Optional value: inside, outside, none.</td>
                            <td>String</td>
                            <td>inside</td>
                        </tr>
                        <tr>
                            <td>radius-dot</td>
                            <td>Enable radius dot type.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>trigger</td>
                            <td>The way to activate the indicator. Optional value: click, hover.</td>
                            <td>String</td>
                            <td>click</td>
                        </tr>
                        <tr>
                            <td>arrow</td>
                            <td>When to show switch arrow button. Optional value: hover, always, never.</td>
                            <td>String</td>
                            <td>hover</td>
                        </tr>
                        <tr>
                            <td>easing</td>
                            <td>Animation Effects</td>
                            <td>String</td>
                            <td>ease</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Carousel events" h3></Anchor>
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
                            <td>Emit when slide is changed. Transmit two arguments: Current activated slider index, previous slider index.</td>
                            <td>oldValue, value</td>
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
    import Code from '../../code/carousel';
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
                value1: 0,
                value2: 0,
                value3: 0,
                setting: {
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    radiusDot: false,
                    trigger: 'click',
                    arrow: 'hover'
                }
            }
        },
        methods: {

        }
    };
</script>