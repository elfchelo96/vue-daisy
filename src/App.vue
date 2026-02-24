<template>
  <div data-theme="light" class="drawer lg:drawer-open">
    <!-- Toggle for mobile -->
    <input id="main-drawer" type="checkbox" class="drawer-toggle" />

    <!-- Page Content -->
    <div class="drawer-content flex flex-col min-h-screen">
      <!-- Navbar -->
      <div class="navbar bg-base-100 shadow-md">
        <div class="flex-none lg:hidden">
          <label for="main-drawer" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block w-5 h-5 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>

        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Mi App</a>
        </div>

        <div class="flex-none gap-2">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost avatar">
              <div
                class="w-8 rounded-full bg-primary text-primary-content flex items-center justify-center"
              >
                U
              </div>
            </label>
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
      </div>

      <!-- Main Content -->
      <main class="flex-1 p-6 bg-base-200">
        <router-view />
      </main>

      <!-- Footer -->
      <footer class="footer footer-center p-4 bg-base-100 text-base-content">
        <aside>
          <p>© {{ new Date().getFullYear() }} - Mi App</p>
        </aside>
      </footer>
    </div>

    <!-- Sidebar -->
    <div class="drawer-side">
      <label for="main-drawer" class="drawer-overlay"></label>
      <aside class="w-64 bg-base-100 border-r border-base-200">
        <div class="p-4 text-lg font-bold">Dashboard</div>
        <ul class="menu p-4">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/users">Usuarios</router-link></li>
          <li><router-link to="/settings">Configuración</router-link></li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script setup>
// No requiere lógica adicional
</script>
