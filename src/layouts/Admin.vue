<template>
  <div class="relative min-h-screen md:flex bg-humbleGray-200" data-dev-hint="container">
    <nav class="h-[70px] w-full absolute bg-white border z-10 position-fixed"></nav>
    <footer class="h-[70px] w-full absolute bg-humbleGray-200 border z-10 bottom-0 position-fixed"></footer>

    <div class="w-0 md:w-56 transition-all duration-500" :class="{ 'translate-x-1 md:w-14': isOpen }">
      <!-- TODO: Dummy element to force the overall container to shrink when the sidebar collapses -->
    </div>
    <aside
      id="sidebar"
      class="-translate-x-full w-56 position-fixed bg-white shadow-xl text-gray-100 space-y-6 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition-all duration-500 md:flex md:flex-col"
      :class="{
       'translate-x-1 md:w-14': isOpen
      }"
      data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
      <button
        class="absolute z-10 -right-[60px] md:-right-[14px] top-3/4 md:top-32 bg-blue-600 rounded-full w-10 h-10 md:w-7 md:h-7"
        :class="{
          '-right-[20px] transition-all duration-500': isOpen,
          '-right-[14px] transition-all duration-500': !isOpen,
        }"
        @click="onToggleSidebar">
        o
      </button>

      <div class="p-3">
        <div class="py-24 overflow-hidden">

          <div class="text-humbleBlack-100 text-center my-5">
            <p>0xf89cE6101010</p>
            <p class="text-blue-600">HUMBL</p>
          </div>

          <ul>
            <li class="my-3" v-for="(item, index) in navigation" :key="index">
              <div class="flex gap-3 font-normal text-base whitespace-nowrap	text-humbleBlack-100">
                <component
                    class="flex-shrink-0 ml-1 h-6 w-6"
                  :is="item.icon"
                  v-if="item.icon" />
                {{item.name}}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>

    <main id="content" class="flex-1 py-24 lg:px-8">
      <div class="max-w-7xl mx-auto h-full">

        <div class="px-4 py-6 sm:px-0 h-full">
          <div class="border-4 border-dashed border-red-200 rounded-lg h-full">
            <div class="h-full flex justify-center items-center">
              <!--START CARD-->
              <div class="bg-white p-8 max-w-lg rounded-lg shadow-xl">
                <h2 class="text-center text-xl text-humbleBlack-100 font-semibold">
                  Let’s create an ad for your business. First, enter the name of your ad campaign
                </h2>
                <div class="pt-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est tempore ullam ut velit. Alias, dicta doloribus eum facilis fuga id in, minus quis quod quos velit veritatis. A, alias.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est tempore ullam ut velit. Alias, dicta doloribus eum facilis fuga id in, minus quis quod quos velit veritatis. A, alias.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est tempore ullam ut velit. Alias, dicta doloribus eum facilis fuga id in, minus quis quod quos velit veritatis. A, alias.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est tempore ullam ut velit. Alias, dicta doloribus eum facilis fuga id in, minus quis quod quos velit veritatis. A, alias.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est tempore ullam ut velit. Alias, dicta doloribus eum facilis fuga id in, minus quis quod quos velit veritatis. A, alias.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est tempore ullam ut velit. Alias, dicta doloribus eum facilis fuga id in, minus quis quod quos velit veritatis. A, alias.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est tempore ullam ut velit. Alias, dicta doloribus eum facilis fuga id in, minus quis quod quos velit veritatis. A, alias.

                </div>
              </div>
              <!--END CARD-->
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import {
  LightBulbIcon,
  HomeIcon,
  SpeakerWaveIcon,
  Cog8ToothIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowLeftOnRectangleIcon,
  ArrowLeftIcon,
  DocumentChartBarIcon
} from '@heroicons/vue/24/outline'

const isOpen = ref(false)
const navigation = ref([{
  name: 'Overview',
  icon: HomeIcon
}, {
  name: 'Insights',
  icon: LightBulbIcon
}, {
  name: 'Campaigns',
  icon: SpeakerWaveIcon
},
  {
    name: 'Payment History',
    to: 'Payment History',
    icon: DocumentChartBarIcon
  }, {
    name: 'Settings',
    to: 'Settings',
    icon: Cog8ToothIcon
  }, {
    name: 'Logout',
    to: 'Logout',
    icon: ArrowLeftOnRectangleIcon
  }])

const onToggleSidebar = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.position-fixed {
  position: fixed;
}
</style>
