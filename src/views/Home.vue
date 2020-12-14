<template>
  <q-page-container>
    <q-page padding>
      <auto-complete />
    </q-page>
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="dark" />
    </q-page-scroller>
  </q-page-container>
</template>

<script>
import AutoComplete from '@/components/AutoComplete.vue';

export default {
  components: { AutoComplete },
  name: 'Home',
};
</script>
