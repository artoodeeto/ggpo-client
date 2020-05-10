import { User } from './user';
import { Session } from './session';

export interface State {
  session: Session;
  user: User;
}
