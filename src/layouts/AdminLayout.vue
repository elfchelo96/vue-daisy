<template>
  <div :data-theme="theme" class="drawer lg:drawer-open">
    <!-- Toggle Drawer -->
    <input id="app-drawer" type="checkbox" class="drawer-toggle" />

    <!-- Main Content -->
    <div class="drawer-content flex flex-col min-h-screen">
      <!-- Navbar -->
      <header class="navbar bg-base-100 border-b border-base-200">
        <!-- Mobile menu -->
        <div class="flex-none lg:hidden">
          <label for="app-drawer" class="btn btn-square btn-ghost"> ☰ </label>
        </div>

        <!-- Title slot -->
        <div class="flex-1 px-2 text-xl font-semibold">
          <slot name="title">Dashboard</slot>
        </div>

        <!-- Right actions -->
        <div class="flex-none flex items-center gap-2">
          <!-- Theme toggle -->
          <button class="btn btn-ghost" @click="toggleTheme">
            {{ theme === 'light' ? '🌙' : '☀️' }}
          </button>

          <!-- User dropdown -->
          <div class="dropdown dropdown-end">
            <div tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div
                class="w-9 rounded-full bg-primary text-primary-content flex items-center justify-center"
              >
                A
              </div>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a>Perfil</a></li>
              <li><a>Configuración</a></li>
              <li><a>Cerrar sesión</a></li>
            </ul>
          </div>
        </div>
      </header>

      <!-- Page content -->
      <main class="flex-1 p-6 bg-base-200">
        <slot />
      </main>

      <!-- Footer -->
      <Footer />
    </div>

    <!-- Sidebar -->
    <Sidebar />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '../components/MainSidebar.vue'
import Footer from '@/components/MainFooter.vue'
const theme = ref('light')
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
