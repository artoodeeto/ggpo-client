import { IState } from 'interfaces/stateInterface';

export const userInfo = (store: IState) => store.user;
export const userSelectorUserId = (store: IState) => store.user.id;
