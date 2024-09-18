<script setup lang="ts">

const article = { sort: [{ date: -1 }] }


useSeoMeta({
    title: 'Articles',
    description: 'Complete collection of all articles on this website.',
})
</script>

<template>
    <h1 class="pb-20">This Is an Entire Collection of All Articles on This Website</h1>
    <div>
        <ContentList :query="article" path="/articles">
            <template #default="{ list }">
                <div v-for="article in list" :key="article._path">

                    <h3>{{ article.title }}</h3>


                    <ContentNavigation>
                        <div :key="article._path">
                            {{ article.date }}<br>
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
