<template>
    <Html lang="en">

    <Head>
        <Title>Home</Title>
        <Meta name="description"
            :content="`Your ultimate destination for design, development, and consulting. I transform your visions into reality and go beyond your expectations. Reach out and let’s create something amazing together!`" />
        <Meta name="twitter:card" :content="`summary`" />
        <Meta name="twitter:title" :content="`Innovative Designer and Developer | Custom Solutions Crafted for You`" />
        <Meta name="twitter:description"
            :content="`Your ultimate destination for design, development, and consulting. I transform your visions into reality and go beyond your expectations. Reach out and let’s create something amazing together!`" />
        <Meta name="title" :content="`Innovative Designer and Developer | Custom Solutions Crafted for You`" />
        <Meta name="description"
            :content="`Your ultimate destination for design, development, and consulting. I transform your visions into reality and go beyond your expectations. Reach out and let’s create something amazing together!`" />
        <Meta name="robots" :content="`index, follow`" />
        <Meta property="og:type" :content="`website`" />
        <Meta property="og:title" :content="`Innovative Designer and Developer | Custom Solutions Crafted for You`" />
        <Meta property="og:description"
            :content="`Your ultimate destination for design, development, and consulting. I transform your visions into reality and go beyond your expectations. Reach out and let’s create something amazing together!`" />
        <Meta property="og:url" :content="`danielhill.nuxt.space`" />
        <Meta property="og:image"
            :content="`https://repository-images.githubusercontent.com/856030104/2a946d9b-8135-4327-bdbf-82b873ec10d2`" />

    </Head>

    </Html>
    <p class="pb-20">
        Welcome to Daniel Hill's digital space, where he shares insights into his work and passions. Based in Thuringia,
        Germany, Daniel is a multimedia designer, software developer, and tech enthusiast. Since 1999, he has honed his
        skills in non-print design and web development, working with brands to build websites independently. Besides his
        professional work, he enjoys photography, gaming, and mountain biking.
    </p>

    <div>
        <h1>Overview of My Latest Articles
        </h1>
        <ContentList :query="article" path="/articles" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <p><strong>{{ article.date }}</strong></p>
                <ContentNavigation>
                    <div :key="article._path">
                        <NuxtLink :to="article._path">Continue reading</NuxtLink>
                    </div>
                </ContentNavigation>
                <hr>
            </div>
        </ContentList>
    </div>

</template>

<script setup lang="ts">

const article = { limit: 4, sort: [{ date: -1 }] }

</script>