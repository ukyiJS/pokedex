<template>
  <q-layout view="lHh Lpr lFf">
    <navigation-bar />
    <router-view />
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="dark" />
    </q-page-scroller>
  </q-layout>
</template>

<script>
import NavigationBar from './views/layout/NavigationBar.vue';

export default {
  components: { NavigationBar },
  name: 'LayoutDefault',
  meta: {
    title: 'Pokedex',
    titleTemplate: title => `${title} - ukyi`,
    meta: {
      description: { name: '포켓몬도감', content: 'Page 1' },
      keywords: { name: '포켓몬도감', content: 'Pokedex website' },
      equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
    },
  },
};
</script>

<style></style>
