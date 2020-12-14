import getAutoCompleteKeyword from '@/gql/autoCompleteKeyword.gql';
import { useQuery, useResult } from '@vue/apollo-composable';
import { computed, reactive, toRefs } from '@vue/composition-api';

export const useAutoComplete = () => {
  const state = reactive({
    keyword: '',
    autoCompleteKeywords: [],
    isSearch: false,
    isEmpty: computed(() => !state.autoCompleteKeywords?.length),
  });
  const setAutoComplete = params => Object.entries(params).forEach(([key, value]) => (state[key] = value));

  const { result } = useQuery(getAutoCompleteKeyword, { keyword: toRefs(state).keyword });
  state.autoCompleteKeywords = useResult(result);

  return { ...toRefs(state), setAutoComplete };
};
