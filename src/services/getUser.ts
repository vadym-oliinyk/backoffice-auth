import { makeRequest } from '../utils/makeRequest';
import { User } from '../types/user';

export async function getUser(login: string): Promise<void | User> {
  const { data: users }: { data: User[] } = await makeRequest(
    '/9b5321776559f7b97a60',
  );
  const currentUser = users.find(({ login: userLogin }) => userLogin === login);

  if (!currentUser) {
    throw new Error(`${login} - invalid login`);
  }

  return currentUser;
}
