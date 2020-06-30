import { IState } from 'interfaces/stateInterface';

export const posts = (store: IState) => store.feedPost.posts;
