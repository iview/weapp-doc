<template>
    <i-article>
        <article>
            <h1>Design Principle</h1>
            <blockquote>
                The following is the overview of the basic design principles, which exsits in every good design. They are all interrelated and rarely appear alone.<br>
                <i style="display: block; text-align: right">- The Design Book For Everyone</i>
            </blockquote>
            <Anchor title="Contrast" h2></Anchor>
            <p>The basic idea of contrast is avoiding the elements on the page to be too <strong>similar</strong>.If the elements (e.g., font, color, size, line width, shape, space and etc) are different, then just make them <strong>totally different</strong>. To make the page attractive, contrast is usually the most important factor, it's what attracts the readers' attention.</p>
            <Anchor title="Repetition" h2></Anchor>
            <p>Let the visual elements of the design appears repeatedly in the entire work. Repetition could apply to color, shape, texture, space, line width, font, size, picture, etc. It both increases the logic and strengthens the unity.</p>
            <Anchor title="Alignment" h2></Anchor>
            <p>None of the elements could be placed on the page carelessly. Every element should have some visual relationship with another one on the page. Alignment leads to a clear, pretty and fresh design.</p>
            <Anchor title="Proximity" h2></Anchor>
            <p>Elements that are related to each other should be grouped together. Multiple elements would become a visual unit when there is proximity rather than isolation among them. This helps to organize infomation, reduce confusion and provide readers a clear structrue.</p>
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