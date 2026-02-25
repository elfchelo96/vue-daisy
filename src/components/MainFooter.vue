<template>
  <footer class="footer footer-center p-4 bg-base-100 border-t border-base-200">
    <aside>
      <p>© {{ year }} - Admin Panel</p>
    </aside>
  </footer>
</template>
<script setup>
const year = new Date().getFullYear()
</script>
