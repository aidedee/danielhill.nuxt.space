<template>
    <div>
        <ContentList path="/article" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <h3>{{ article.date }}</h3>
                <p>{{ article.title }}</p>
                <ContentNavigation>
                    <div :key="article._path">
                        <NuxtLink :to="article._path">Continue reading</NuxtLink>
                    </div>
                </ContentNavigation>

            </div>
        </ContentList>
    </div>
</template>