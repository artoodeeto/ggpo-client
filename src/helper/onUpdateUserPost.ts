import { IPost } from 'interfaces/post';

export function updateAUserPost(statePost: IPost[], payloadPost: IPost) {
  return statePost.reduce((acc: IPost[], post: IPost) => {
    if (Number(post.id) === Number(payloadPost.id)) {
      acc.push({
        id: post.id,
        title: payloadPost.title,
        body: payloadPost.body,
        createdAt: payloadPost.createdAt,
        updatedAt: payloadPost.updatedAt
      });
    } else {
      acc.push(post);
    }
    return acc;
  }, []);
}
