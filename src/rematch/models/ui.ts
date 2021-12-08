import { createModel } from '@rematch/core';
import { RootModel } from '.';

type UiState = {
  darkMode: boolean;
};

export const ui = createModel<RootModel>()({
  state: {
    darkMode: false
  } as UiState,

  reducers: {
    setDarkMode(state: UiState, value: boolean) {
      return { ...state, darkMode: value };
    }
  },

  effects: (dispatch) => ({
    //
  }),
});