<template>
  <Layout>
    <section class="mt-32 mx-4 sm:mx-20 md:mx-32 py-4">
        <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-Petrol-klein@2x.png" class="hidden sm:block absolute left-0 ml-12 -mt-28" width="80"></g-image>
        <g-image alt="graphics anm" src="../assets/dreiecke/Dreieck-gelb-minus12Grad@2x.png" class="hidden sm:block absolute right-0 mr-20 mt-20" width="80"></g-image>
        <h2 class="text-5xl font-semibold uppercase inline-block border-b-2 pl-10 border-primary leading-tight p-2 text-primary">Blog</h2>
    <section class="my-20">
        <Post v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
    </section>
  </Layout>
</template>

<page-query>
    query {
        allPost {
            totalCount
            edges {
                node {
                    id
                    title
                    timeToRead
                    description
                    date (format: "D MMMM YYYY")
                    path
                }
            }
        }
    }
</page-query>
<script>
    import Post from "../components/Post";
    export default {
        components: {Post},
        metaInfo: {
            title: 'Blog'
        }
    }
</script>