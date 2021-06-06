
<template>
    <div class="shadow p-5 my-3">
        <p class="text-muted" v-html="post.date"/>
        <g-link :to="post.path" class="read">
            <h1 class="text-2xl font-semibold" v-html="post.title"/>
        </g-link>
        <p class="description" v-html="post.description"/>
        <span>{{post.timeToRead}} min read</span> -
        <g-link :to="post.path" class="font-semibold text-secondary">Read More</g-link>
    </div>
</template>

<script>
    export default {
        name: "Post",
        props: {
            post: Object,
        },
    }
</script>

<style scoped>
</style>