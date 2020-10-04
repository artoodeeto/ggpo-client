import { IPost } from 'interfaces/post';

export interface ICreatePostResponse {
  meta: {};
  payload: {
    post: IPost;
  };
}

export interface IReadPostResponse {
  meta: {};
  payload: {
    post: IPost;
  };
}

export interface IUpdatePostResponse {
  meta: {};
  payload: {
    post: IPost;
  };
}

export interface IGetSomePostResponse {
  meta: {
    count: number;
  };
  payload: {
    posts: IPost[];
  };
}
