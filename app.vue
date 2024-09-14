<script setup lang="ts">
useHead({
  titleTemplate: '%s - Innovative Designer and Developer | Custom Solutions Crafted for You',
  bodyAttrs: {
    class: 'bg-gradient-to-r from-amber-900 to-yellow-600',
    style: 'font-family: Lexend;'
  }
})

</script>
<template>
  <div>
    <Html lang="en">

    <Head>
      <Title></Title>
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


    <div
      class="container mb-52 px-6 sm:mx-auto border-l-8 border-b-4 border-current prose dark:prose-invert lg:prose-xl">


      <header class="sticky top-10 z-30">
        <div class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full">
          <nav
            class="w-full sm:flex sm:items-center sm:justify-between backdrop-blur-sm bg-gray-300/50 dark:bg-gray-700/50 p-3">
            <div class="flex items-center justify-between">
              <NuxtLink active-class="text-yellow-900 dark:text-yellow-400" class="flex-none" to="/" alt="" title="">
                Home
              </NuxtLink>
              <div class="sm:hidden">
                <button type="button"
                  class="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 border-2 border-current text-current"
                  id="hs-navbar-with-collapse" aria-expanded="false" aria-controls="navbar-with-collapse"
                  aria-label="Toggle navigation" data-hs-collapse="#navbar-with-collapse">
                  <svg class="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg class="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                  <span class="sr-only">Toggle navigation</span>
                </button>
              </div>
            </div>
            <div id="navbar-with-collapse"
              class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
              aria-labelledby="hs-navbar-with-collapse">
              <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">

                <ContentNavigation v-slot="{ navigation }">
                  <div v-for="link of navigation" :key="link._path">
                    <NuxtLink active-class="text-yellow-900 dark:text-yellow-400" :to="link._path" alt="" title="">{{
                      link.title }}
                    </NuxtLink>
                  </div>
                </ContentNavigation>
              </div>
            </div>
          </nav>

        </div>
      </header>

      <main class="mt-24">
        <div>
          <div dir="features/meta-tags" file="pages/index.vue">
            <NuxtPage />
          </div>

        </div>
      </main>

      <footer>

        <div class="pt-14">
          <p class="text-right">-- :)</p>
          <p>
            <NuxtLink to="https://github.com/dhillweb" alt="" title="" target="_blank">GitHub</NuxtLink>
          </p>



          <p class="text-sm">
            Last modified: 2024-09-13<br>

            <span>Copyright © Daniel Hill. All rights reserved.</span>
          </p>
          <p></p>
        </div>

      </footer>

    </div>

  </div>

</template>
