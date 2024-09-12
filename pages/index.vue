<template>

    <div>
        <ContentList path="/articles" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <p><strong>{{ article.date }}</strong></p>
                <ContentNavigation>
                    <div :key="article._path">
                        <NuxtLink :to="article._path">Continue reading</NuxtLink>
                    </div>
                </ContentNavigation>
            </div>
        </ContentList>
    </div>

</template>