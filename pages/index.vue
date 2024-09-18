<script setup lang="ts">

const article = { limit: 4, sort: [{ date: -1 }] }

useSeoMeta({
    title: "Home",
    description: "Welcome to Daniel Hill's digital space.",
})
</script>

<template>

    <p class="pb-20">
        Welcome to Daniel Hill's digital space, where he shares insights into his work and passions. Based in Thuringia,
        Germany, Daniel is a multimedia designer, software developer, and tech enthusiast. Since 1999, he has honed his
        skills in non-print design and web development, working with brands to build websites independently. Besides his
        professional work, he enjoys photography, gaming, and mountain biking.
    </p>

    <div>
        <h1>Overview of My Latest Articles
        </h1>
        <ContentList :query="article" path="/articles">
            <template #default="{ list }">
                <div v-for="article in list" :key="article._path">
                    <h2>{{ article.title }}</h2>
                    <p>{{ article.description }}</p>
                    <p><strong>{{ article.date }}</strong></p>
                    <ContentNavigation>
                        <div :key="article._path">
                            <NuxtLink :to="article._path" alt="" title="">Continue
                                reading</NuxtLink>
                        </div>
                    </ContentNavigation>
                    <hr>
                </div>
            </template>
            <template #not-found>
                <p>Articles cannot be displayed. Please check your browser settings.</p>
            </template>


        </ContentList>
    </div>

</template>
