<template>
  <div class="drawer-side">
    <label for="app-drawer" class="drawer-overlay"></label>

    <aside class="w-72 bg-base-100 border-r border-base-200 min-h-full">
      <!-- Logo -->
      <div class="p-6 text-2xl font-bold border-b border-base-200">🚀 MyAdmin</div>

      <!-- Menu -->
      <ul class="menu p-4 gap-1">
        <li>
          <router-link to="/" class="rounded-lg"> 🏠 Inicio </router-link>
        </li>

        <li>
          <router-link to="/users" class="rounded-lg"> 👥 Usuarios </router-link>
        </li>

        <li>
          <router-link to="/analytics" class="rounded-lg"> 📊 Analytics </router-link>
        </li>

        <li>
          <router-link to="/settings" class="rounded-lg"> ⚙️ Configuración </router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>
