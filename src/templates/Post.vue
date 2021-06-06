<template>
    <Layout>
      <section class="mt-32 mx-4 sm:mx-20 md:mx-32 py-4">
        <g-link to="/blog" class="link">  &larr; Go Back</g-link>
        <div class="post-title">
            <h1 class="serif-font-face display-3">{{$page.post.title}}</h1>
            <p class="post-date text-secondary"> {{ $page.post.date}} | {{$page.post.timeToRead}} min read
            </p>
        </div>
        <div class="post-content">
            <p v-html="$page.post.content" />
        </div>
      </section>
    </Layout>
</template>
<page-query>
    query Post ($path: String!) {
        post: post (path: $path) {
            id
            title
            content
            date (format: "D MMMM YYYY")
            timeToRead
        }
    }
</page-query>
<script>
    export default {
        name: "Post"
    }
</script>

<style scoped>
h1 {
    font-size: 24px;
}
.post-date {
  margin: .5em 0;
  font-weight: 800;
}
</style>