import { LoginTypes } from './Types';

export const logMein = (id: number) => ({
  type: LoginTypes.LOGIN,
  payload: { id }
});
