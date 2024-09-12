<template>
  <div>

    <div class="container px-6 sm:mx-auto lg:ml-80 prose prose-xl">
      <NuxtRouteAnnouncer />

      <header class="sticky top-0 z-10">
        <div class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-lg pt-14 pb-36">
          <nav class="w-full sm:flex sm:items-center sm:justify-between backdrop-blur-sm bg-white/50 p-3">
            <div class="flex items-center justify-between">
              <NuxtLink class="flex-none" to="/" alt="" title="">
                Home
              </NuxtLink>
              <div class="sm:hidden">
                <button type="button"
                  class="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 border-2 border-current text-gray-800"
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
                    <NuxtLink :to="link._path" alt="" title="">{{ link.title }}</NuxtLink>
                  </div>
                </ContentNavigation>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <div>

          <NuxtPage />
          <p>--</p>
        </div>
      </main>

      <footer>

        <div class="pb-36 pt-14">

          <p>
            <NuxtLink to="https://github.com/dhillweb" alt="" title="" target="_blank">GitHub</NuxtLink>
          </p>



          <p>
            Last modified:<br>September 1, 2024
          </p>
          <strong>©</strong>

        </div>

      </footer>

    </div>
  </div>

</template>
<style>
body {
  font-family: Lexend;
  background-color: navajowhite
}
</style>
