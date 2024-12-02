<script setup lang="ts">
const userName = ref('sadsad')
</script>

<template>
  <LayoutDefault>
    <template #header>
      <HeaderDefault>
        <template #loginStateNavbar>
          <p class="text-gray-300">Hallo Max</p>
        </template>
        <template #loginStateDropdown>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Logout Button</a>
        </template>
      </HeaderDefault>
    </template>
    <slot></slot>
  </LayoutDefault>
</template>
