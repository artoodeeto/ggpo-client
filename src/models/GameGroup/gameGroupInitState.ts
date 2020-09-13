import { IStateGetSomeGameGroup } from 'interfaces/gameGroup';
/**
 * @description
 * When adding a initial state, User interface should also
 * be updated.
 * {@link src/interfaces/gameGroup.ts}
 */
export const gameGroupInitSate: IStateGetSomeGameGroup = {
  isFetchingSomeGameGroup: false,
  isFetchingSomeGameGroupSuccess: false,
  fetchingSomeGameGroupFailed: false,
  gameGroups: []
};
