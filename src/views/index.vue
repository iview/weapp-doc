<style scoped lang="less">
    @import "../styles/index.less";
</style>
<style>
    .index-version .ivu-badge-count{
        box-shadow: none;
        right: 0;
        top: -3px;
        color: #f50;
        background: transparent;
    }
</style>
<template>
    <div>
        <div class="index">
            <div class="bg"><span></span></div>
            <Row type="flex" justify="center" align="middle" style="position: relative;z-index: 3">
                <i-col span="24">
                    <h1>
                        <img src="../images/logo.png" class="img-logo">
                        <img src="../images/name.png" class="img-name">
                    </h1>
                    <h2>{{ $t('index.title') }}</h2>
                    <div class="list">
                        <router-link :to="'/docs/guide/introduce' + suffix">{{ $t('index.guide') }}</router-link>
                        <router-link :to="'/docs/guide/install' + suffix">{{ $t('index.component') }}</router-link>
                        <router-link :to="'/docs/practice/case' + suffix">{{ $t('index.practice') }}</router-link>
                        <router-link :to="'/overview' + suffix">{{ $t('index.overview') }}</router-link>
                        <router-link :to="'/cli' + suffix">{{ $t('index.cli') }}</router-link>
                        <a href="https://github.com/iview/iview" target="_blank">
                            <Icon type="social-github"></Icon>
                            GitHub
                        </a>
                    </div>
                </i-col>
            </Row>
        </div>
        <div id="indexLizi"></div>
        <div class="index-lang">
            <span @click="handleChangeLang">
                <template v-if="lang === 'zh-CN'">EN</template>
                <template v-else>中文</template>
            </span>
        </div>
    </div>
</template>
<script>
    import THREE from '../libs/three/three';
    import bus from '../../src/components/bus';

    export default {
        data () {
            return {
                lang: this.$lang
            }
        },
        computed: {
            suffix () {
                return this.lang === 'zh-CN' ? '' : '-en';
            }
        },
        methods: {
            liziInit () {
                var SCREEN_WIDTH = window.innerWidth;
                var SCREEN_HEIGHT = window.innerHeight;

                var SEPARATION = 90;
                var AMOUNTX = 50;
                var AMOUNTY = 50;

                var container;

                var particles, particle;
                var count;

                var camera;
                var scene;
                var renderer;

                var mouseX = 0;
                var mouseY = 0;

                var windowHalfX = window.innerWidth / 2;
                var windowHalfY = window.innerHeight / 2;

                init();
                this.interval = setInterval(loop, 1000 / 60);

                function init() {

                    container = document.createElement( 'div' );
                    container.style.position = 'relative';
                    container.style.top = '200px';
                    document.getElementById('indexLizi').appendChild( container );

                    camera = new THREE.Camera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
                    camera.position.z = 1000;

                    scene = new THREE.Scene();

                    renderer = new THREE.CanvasRenderer();
                    renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

                    particles = new Array();

                    var i = 0;
                    var material = new THREE.ParticleCircleMaterial( 0x097bdb, 1 );

                    for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

                        for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

                            particle = particles[ i ++ ] = new THREE.Particle( material );
                            particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
                            particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
                            scene.add( particle );
                        }
                    }

                    count = 0;

                    container.appendChild( renderer.domElement );

                    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
//                    document.addEventListener( 'touchmove', onDocumentTouchMove, false );
                }

                function onDocumentMouseMove( event ) {

                    mouseX = event.clientX - windowHalfX;
                    mouseY = event.clientY - windowHalfY;

                }

                function onDocumentTouchMove( event ) {

                    if ( event.touches.length == 1 ) {

                        event.preventDefault();

                        mouseX = event.touches[ 0 ].pageX - windowHalfX;
                        mouseY = event.touches[ 0 ].pageY - windowHalfY;

                    }
                }

                function loop() {
                    camera.position.x += ( mouseX - camera.position.x ) * .05;
//                    camera.position.y += ( - mouseY - camera.position.y ) * .05;
                    camera.position.y = 364;

                    var i = 0;

                    for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

                        for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

                            particle = particles[ i++ ];
                            particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
                            particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 2;

                        }
                    }

                    renderer.render( scene, camera );

                    count += 0.1;
                }
            },
            handleChangeLang () {
                const lang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN';
                bus.$emit('on-change-lang', lang, '/');
            }
        },
        mounted () {
            this.lang = this.$lang;
            this.liziInit();
        },
        beforeDestroy () {
            if (this.interval) clearInterval(this.interval);
        }
    }
</script>
