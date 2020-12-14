<template>
  <q-page-container>
    <q-page padding>
      <auto-complete />
    </q-page>
  </q-page-container>
</template>

<script>
import AutoComplete from '@/components/AutoComplete.vue';

export default {
  components: { AutoComplete },
  name: 'Home',
};
</script>
