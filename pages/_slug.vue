<template>
    <div> {{ page }} </div>
</template>

<script>
export default {
    name: 'Page',
    async asyncData($store, params) {
        const { slug } = params;
        try {
            await $store.posts.fetch('pages', { slug: slug});
        } catch (e) {
            console.error(e);
        }

        return {
            page: $store.posts.post,
        }
    }
}
</script>
