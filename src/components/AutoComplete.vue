<template>
  <div class="q-col-gutter-md row justify-center">
    <div class="col-md-8 col-sm-10 col-xs-12">
      <q-input rounded outlined autofocus clear-icon="" @keyup.stop="onSearch" :value="keyword">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-menu v-if="!isEmpty" fit no-focus no-parent-event auto-close @input="hideAutoComplete" :value="isSearch">
        <q-list dense bordered padding class="rounded-borders">
          <q-item v-for="autoCompleteKeyword in autoCompleteKeywords" :key="autoCompleteKeyword" clickable active-class="bg-grey-3 text-black">
            <q-item-section>{{ autoCompleteKeyword }} </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </div>
  </div>
</template>

<script>
import { useAutoComplete } from '@/hooks';

export default {
  setup() {
    const { keyword, isSearch, isEmpty, setAutoComplete, autoCompleteKeywords } = useAutoComplete();
    const hideAutoComplete = () => setAutoComplete({ isSearch: false });
    const onSearch = ({ target: { value: keyword } }) => setAutoComplete({ keyword, isSearch: !!keyword });

    return {
      keyword,
      isEmpty,
      isSearch,
      onSearch,
      hideAutoComplete,
      autoCompleteKeywords,
    };
  },
};
</script>

<style></style>
