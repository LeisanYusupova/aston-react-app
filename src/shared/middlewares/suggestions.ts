import { createListenerMiddleware } from '@reduxjs/toolkit';
import { setSuggestions } from 'src/features/redux/suggestions/suggestionsSlice.ts';
import { useSearchFilmsQuery } from 'src/features/redux/searchFilmsApi/searchSlice.ts';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: setSuggestions,
  effect: async (action, listenerApi) => {
    const query = action.payload;
    const { data } = useSearchFilmsQuery(query);
    if (data) {
      listenerApi.dispatch(setSuggestions(data.map((item) => item)));
    }
  },
});
