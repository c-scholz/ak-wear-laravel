<template>
  <div>
    <main-menu />
    <slot />
  </div>
</template>

<script>
import MainMenu from '../Shared/MainMenu'

export default {
  components: { 
    MainMenu 
  }
}
</script>