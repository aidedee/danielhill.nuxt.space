<template>
  <div>

    <div class="container px-6 mx-auto bg-gray-300 dark:bg-slate-700 prose prose-xl dark:prose-invert">
      <NuxtRouteAnnouncer />

      <header>
        <div class="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-lg py-36">
          <nav class="w-full sm:flex sm:items-center sm:justify-between">
            <div class="flex items-center justify-between">
              <NuxtLink class="flex-none" to="/" alt="" title="">
                Home
              </NuxtLink>
              <div class="sm:hidden">
                <button type="button"
                  class="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example"
                  aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
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
            <div id="hs-navbar-example"
              class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
              aria-labelledby="hs-navbar-example-collapse">
              <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">

                <ContentNavigation v-slot="{ navigation }">
                  <div v-for="link of navigation" :key="link._path">
                    <NuxtLink :to="link._path" alt="" title="">{{ link.title }}</NuxtLink>
                  </div>
                </ContentNavigation>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <div class="py-36">
          <NuxtPage />
        </div>
      </main>

      <footer>

        <div class="py-36">


          <p>
            © Last updated: September 1, 2024
          </p>

          <p>
            <NuxtLink to="https://github.com/dhillweb" alt="" title="" target="_blank">GitHub</NuxtLink>
          </p>
        </div>

      </footer>

    </div>
  </div>

</template>
<style>
body {
  font-family: Lexend;
}
</style>