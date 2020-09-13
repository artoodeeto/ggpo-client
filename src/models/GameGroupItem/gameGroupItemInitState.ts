import { IStateGameGroupItem } from 'interfaces/gameGroupItem';
/**
 * @description
 * When adding a initial state, User interface should also
 * be updated.
 * {@link src/interfaces/gameGroup.ts}
 */
export const gameGroupItemInitSate: IStateGameGroupItem = {
  fetchingGameGroupItem: false,
  isFetchingGameGroupItemSuccess: false,
  isFetchingGameGroupItemFailed: false,
  isCurrentlyFollowing: false,
  isGameGroupItemFollowSuccess: false,
  isGameGroupItemFollowFailed: false,
  isCurrentlyUnfollowing: false,
  isGameGroupItemUnfollowSuccess: false,
  isGameGroupItemUnfollowFailed: false,
  gameGroupItem: {
    isFollower: false
  }
};
