import { IState } from 'interfaces/stateInterface';

export const userProfileSelectorPosts = (store: IState) => store.userProfilePost.posts;
