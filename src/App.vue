<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-3 text-dark">
        <q-img :src="require('img/main-logo.png')" style="width: 5rem" basic />
        <q-toolbar-title>Pokedex</q-toolbar-title>
        <q-btn flat round dense icon="whatshot" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding>
        <auto-complete />
      </q-page>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="dark" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script>
import AutoComplete from './components/AutoComplete.vue';

export default {
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
  components: { AutoComplete },
};
</script>

<style></style>
