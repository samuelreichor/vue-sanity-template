<template>
    <div class="container">
        <h2 class="col-span-full">{{ content.entryHeadline }}</h2>
        <p class="col-span-full">{{ content.entrySummary }}</p>
        <img v-if="content.aboutImage" :src="urlFor(content.aboutImage)" class="col-span-full"/>
    </div>
</template>

<script>
    import sanity from "../../sanity.js";
    import imageUrlBuilder from "@sanity/image-url"

    const builder = imageUrlBuilder(sanity);


    const query = `*[_type == "home"]{
        _id,
        entryHeadline,
        entrySummary,
        aboutImage,
        }[0]`;


    export default {
          data() {
            return {
                loading: true,
                content: [],
            };
        },
        created() {
            this.fetchData();
        },
        methods: {
            urlFor(source) {
                return builder.image(source)
            },
            fetchData() {
                this.error = this.home = null;
                this.loading = true;
                sanity.fetch(query).then(
                    (content) => {
                        this.loading = false;
                        this.content = content;
                    },
                    (error) => {
                        this.error = error;
                    }
                );
            },
        },
    }

</script>