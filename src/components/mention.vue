<template>
    <a :href="'https://github.com/' + id" target="_blank">@{{ id }}</a>
</template>
<script>
    export default {
        props: {
            id: {
                type: String
            }
        }
    };
</script>