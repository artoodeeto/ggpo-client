import { IGameGroupItem } from './gameGroup';

export interface IStateGameGroupItem {
  fetchingGameGroupItem: boolean;
  isFetchingGameGroupItemSuccess: boolean;
  isFetchingGameGroupItemFailed: boolean;
  isCurrentlyFollowing: boolean;
  isGameGroupItemFollowSuccess: boolean;
  isGameGroupItemFollowFailed: boolean;
  isCurrentlyUnfollowing: boolean;
  isGameGroupItemUnfollowSuccess: boolean;
  isGameGroupItemUnfollowFailed: boolean;
  gameGroupItem: IGameGroupItem;
}
