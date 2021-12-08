import { Models } from '@rematch/core';
import { ui } from './ui';
import { auth } from './auth';

export interface RootModel extends Models<RootModel> {
  ui: typeof ui;
  auth: typeof auth;
}

export const models: RootModel = { ui, auth };