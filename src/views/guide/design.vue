<template>
    <i-article>
        <article>
            <h1>设计原则</h1>
            <blockquote>
                以下是对基本设计原则的概述，每一个优秀的设计中都应用了这些设计原则，它们相互关联，只应用某一个原则的情况很少。（出自《写给大家看的设计书》）
            </blockquote>
            <Anchor title="对比（Contrast）" h2></Anchor>
            <p>对比的基本思想是，要避免页面上的元素太过<strong>相似</strong>。如果元素（字体、颜色、大小、线宽、形状、空间等）<strong>不相同</strong>，那就干脆让它们<strong>截然不同</strong>。要让页面引人注意，对比通常是最重要的一个因素，正是它能使读者首先看这个页面。</p>
            <Anchor title="重复（Repetition）" h2></Anchor>
            <p>让设计中的视觉要素在整个作品中重复出现。可以重复颜色、形状、材质、空间关系、线宽、字体、大小和图片，等等。这样一来，既能增加条理性，还可以加强统一性。</p>
            <Anchor title="对齐（Alignment）" h2></Anchor>
            <p>任何东西都不能在页面上随意安放。每个元素都应当与页面上的另一个元素有某种视觉联系。这样能建立一种清晰、精巧而且清爽的外观。</p>
            <Anchor title="亲密性（Proximity）" h2></Anchor>
            <p>彼此相关的项应当靠近，归组在一起。如果多个项相互之间存在很近的亲密性，它们就会成为一个视觉单元，而不是多个孤立的元素。这有助于组织信息，减少混乱，为读者提供清晰的结构。</p>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor
        },
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>