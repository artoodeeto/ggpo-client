import { IUsersGameGroup } from './usersGameGroup';

export interface IStateGetSomeGameGroup {
  isFetchingSomeGameGroup: boolean;
  isFetchingSomeGameGroupSuccess: boolean;
  fetchingSomeGameGroupFailed: boolean;
  gameGroups: IGameGroup[];
}

export interface IGameGroup {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  usersGameGroups?: IUsersGameGroup[];
}

export interface IGameGroupItem {
  isFollower: boolean;
  gameGroup?: IGameGroup;
}
