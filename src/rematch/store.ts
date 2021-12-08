import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import loading, { ExtraModelsFromLoading } from '@rematch/loading';
import updated, { ExtraModelsFromUpdated } from '@rematch/updated';
import { models, RootModel } from './models';

type FullModel = ExtraModelsFromLoading<RootModel> &
  ExtraModelsFromUpdated<RootModel>;
export const store = init<RootModel, FullModel>({
  models,
  plugins: [
    loading(),  // must above the updated() plugin, or the state will undefined
    updated(),
  ],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;