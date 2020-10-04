import { IPost } from 'interfaces/post';
import { IState } from 'interfaces/stateInterface';

export const posts = (store: IState): IPost[] => store.feedPost.posts;
