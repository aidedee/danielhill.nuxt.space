<template>
    <h1>This is a entire collection of all articles on this website.</h1>
    <div>
        <ContentList :query="article" path="/articles" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">

                <h3>{{ article.title }}</h3>


                <ContentNavigation>
                    <div :key="article._path">
                        {{ article.date }}<br>
                        <NuxtLink :to="article._path">Continue reading</NuxtLink>

                    </div>
                </ContentNavigation>
                <hr>
            </div>
        </ContentList>
    </div>
</template>

<script setup lang="ts">

const article = { sort: [{ date: -1 }] }


useSeoMeta({
    title: 'Articles',
    description: 'Complete article list.',
})
</script>