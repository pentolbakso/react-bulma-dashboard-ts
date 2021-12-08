import { createModel } from '@rematch/core';
import { RootModel } from '.';
import * as api from '../../services/auth.service';
import { User } from '../../ts/types';

type AuthState = {
  user: User | null;
};

export const auth = createModel<RootModel>()({
  state: {
    user: null,
  } as AuthState,

  reducers: {
    setUser(state: AuthState, user: User | null) {
      return { ...state, user };
    },
  },
  effects: (dispatch) => ({
    async login(payload: { email: string, password: string; }) {
      await api.login(payload.email, payload.password);
      await dispatch.auth.setUser({ uid: '1234', displayName: 'Test User', email: 'testing@gmail.com' });
    },
    async logout(payload, rootState) {
      await api.logout();
      dispatch.auth.setUser(null);
    },
  }),
});