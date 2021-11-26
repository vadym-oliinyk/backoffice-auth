import { Permission } from './permissions';

export interface User {
  id: number;
  login: string;
  permission: Permission[];
}
