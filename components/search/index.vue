<template>
     <div class="min-h-full">
          <nav class="bg-gray-800">
               <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="flex h-16 items-center justify-between">
                         <div class="flex items-center">
                              <div class="flex-shrink-0">
                                   <img class="h-8 w-8"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company">
                              </div>
                              <div class="hidden md:block">
                                   <div class="ml-10 flex items-baseline space-x-4">
                                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                        <a href="#"
                                             class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                                             aria-current="page">Dashboard</a>
                                        <a href="#"
                                             class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                                        <a href="#"
                                             class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                                        <a href="#"
                                             class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
                                        <a href="#"
                                             class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Reports</a>
                                   </div>
                              </div>
                         </div>
                         <div class="hidden md:block">
                              <div class="ml-4 flex items-center md:ml-6">
                                   <button type="button" @click="showMenu3"
                                        class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span class="absolute -inset-1.5"></span>
                                        <span class="sr-only">View notifications</span>
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                             stroke="currentColor" aria-hidden="true">
                                             <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                        </svg>
                                   </button>

                                   <!-- Profile dropdown -->
                                   <div class="relative ml-3">
                                        <div>
                                             <button type="button"
                                                  class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                  id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                                  <span class="absolute -inset-1.5"></span>
                                                  <span class="sr-only">Open user menu</span>
                                                  <img class="h-8 w-8 rounded-full"
                                                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                       alt="">
                                             </button>
                                        </div>

                                        <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
                                        <div :class="activeTab3 ? 'block' : 'hidden'"
                                             class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                             role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"
                                             tabindex="-1">
                                             <!-- Active: "bg-gray-100", Not Active: "" -->
                                             <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                                  tabindex="-1" id="user-menu-item-0">Your Profile</a>
                                             <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                                  tabindex="-1" id="user-menu-item-1">Settings</a>
                                             <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                                  tabindex="-1" id="user-menu-item-2">Sign out</a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="-mr-2 flex md:hidden">
                              <!-- Mobile menu button -->
                              <button type="button"
                                   class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                   @click="showMenu2">
                                   <span class="absolute -inset-0.5"></span>
                                   <span class="sr-only">Open main menu</span>
                                   <!-- Menu open: "hidden", Menu closed: "block" -->
                                   <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                   </svg>
                                   <!-- Menu open: "block", Menu closed: "hidden" -->
                                   <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                   </svg>
                              </button>
                         </div>
                    </div>
               </div>

               <!-- Mobile menu, show/hide based on menu state. -->
               <div :class="activeTab2 ? 'md:hidden block' : 'hidden'" id="mobile-menu">
                    <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                         <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                         <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                              aria-current="page">Dashboard</a>
                         <a href="#"
                              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                         <a href="#"
                              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                         <a href="#"
                              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                         <a href="#"
                              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Reports</a>
                    </div>
                    <div class="border-t border-gray-700 pb-3 pt-4">
                         <div class="flex items-center px-5">
                              <div class="flex-shrink-0">
                                   <img class="h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">
                              </div>
                              <div class="ml-3">
                                   <div class="text-base font-medium leading-none text-white">Tom Cook</div>
                                   <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                              </div>
                              <button type="button" @click="showMenu3"
                                   class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                   <span class="absolute -inset-1.5"></span>
                                   <span class="sr-only">View notifications</span>
                                   <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                             d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                   </svg>
                              </button>
                         </div>
                         <div :class="activeTab3 ? 'block' : 'hidden'" class="mt-3 space-y-1 px-2">
                              <a href="#"
                                   class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your
                                   Profile</a>
                              <a href="#"
                                   class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
                              <a href="#"
                                   class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign
                                   out</a>
                         </div>
                    </div>
               </div>
          </nav>

          <header class="bg-white shadow">
               <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
               </div>
          </header>
          <main>
               <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

                    <ul role="list" class="divide-y divide-gray-100">
                         <li v-for="person in people" :key="person.email" class="flex justify-between gap-x-6 py-5">
                              <div class="flex min-w-0 gap-x-4">
                                   <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="person.imageUrl"
                                        alt="" />
                                   <div class="min-w-0 flex-auto">
                                        <p class="text-sm font-semibold leading-6 text-gray-900">{{ person.name }}</p>
                                        <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ person.email }}</p>
                                   </div>
                              </div>
                              <div class="shrink-0 flex flex-col items-end">
                                   <p class="text-sm leading-6 text-gray-900">{{ person.role }}</p>
                                   <p v-if="person.lastSeen" class="mt-1 text-xs leading-5 text-gray-500">
                                        Last seen <time :datetime="person.lastSeenDateTime">{{ person.lastSeen }}</time>
                                   </p>
                                   <div v-else class="mt-1 flex items-center gap-x-1.5">
                                        <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                                             <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                        <p class="text-xs leading-5 text-gray-500">Online</p>
                                   </div>
                              </div>
                         </li>
                    </ul>
               </div>
          </main>
     </div>
</template>
<script>
export default {
     data() {
          return {
               activeTab2: 0,
               activeTab3: 0,
               people: [
                    {
                         name: 'Leslie Alexander',
                         email: 'leslie.alexander@example.com',
                         role: 'Co-Founder / CEO',
                         imageUrl:
                              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                         lastSeen: '3h ago',
                         lastSeenDateTime: '2023-01-23T13:23Z',
                    },
                    {
                         name: 'Michael Foster',
                         email: 'michael.foster@example.com',
                         role: 'Co-Founder / CTO',
                         imageUrl:
                              'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                         lastSeen: '3h ago',
                         lastSeenDateTime: '2023-01-23T13:23Z',
                    },
                    {
                         name: 'Dries Vincent',
                         email: 'dries.vincent@example.com',
                         role: 'Business Relations',
                         imageUrl:
                              'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                         lastSeen: null,
                    },
                    {
                         name: 'Lindsay Walton',
                         email: 'lindsay.walton@example.com',
                         role: 'Front-end Developer',
                         imageUrl:
                              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                         lastSeen: '3h ago',
                         lastSeenDateTime: '2023-01-23T13:23Z',
                    },
                    {
                         name: 'Courtney Henry',
                         email: 'courtney.henry@example.com',
                         role: 'Designer',
                         imageUrl:
                              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                         lastSeen: '3h ago',
                         lastSeenDateTime: '2023-01-23T13:23Z',
                    },
                    {
                         name: 'Tom Cook',
                         email: 'tom.cook@example.com',
                         role: 'Director of Product',
                         imageUrl:
                              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                         lastSeen: null,
                    },
               ]
          };
     },
     methods: {
          showMenu2() {
               console.log(this.activeTab2);
               this.activeTab2 = !this.activeTab2;
          },
          showMenu3() {
               console.log(this.activeTab3);
               this.activeTab3 = !this.activeTab3;
          }
     }
};
</script>