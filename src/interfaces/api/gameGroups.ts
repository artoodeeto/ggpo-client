import { IGameGroup } from 'interfaces/gameGroup';

export interface ICreateGameGroupResponse {
  meta: {
    createdAt: string;
  };
  payload: {
    gameGroup: {
      id: number;
      title: string;
      description: string;
    };
  };
}

export interface IReadGameGroupResponse {
  meta: {};
  payload: {
    isFollower: boolean;
    gameGroup: IGameGroup;
  };
}

export interface IUpdateGameGroupResponse {
  meta: {
    createdAt: string;
    updatedAt: string;
  };
  payload: {
    gameGroup: {
      id: number;
      title: string;
      description: string;
    };
  };
}

type Gg = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
};

export interface IGetSomeGameGroupResponse {
  meta: {
    count: number;
  };
  payload: {
    gameGroups: IGameGroup[];
  };
}
