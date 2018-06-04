let code = {};

code.base = `
<template>
    <Page :total="100"></Page>
</template>
<script>
    export default {
        
    }
</script>
`;

code.sizer = `
<template>
    <Page :total="100" show-sizer></Page>
</template>
<script>
    export default {
        
    }
</script>
`;

code.elevator = `
<template>
    <Page :total="100" show-elevator></Page>
</template>
<script>
    export default {
        
    }
</script>
`;

code.total = `
<template>
    <Page :total="100" show-total></Page>
</template>
<script>
    export default {
        
    }
</script>
`;

code.mini = `
<template>
    <Page :total="40" size="small"></Page>
    <Page :total="40" size="small" show-elevator show-sizer></Page>
    <Page :total="40" size="small" show-total></Page>
</template>
<script>
    export default {
        
    }
</script>
`;

code.simple = `
<template>
    <Page :current="2" :total="50" simple></Page>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;