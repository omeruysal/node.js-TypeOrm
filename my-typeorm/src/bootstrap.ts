import { getRepository } from 'typeorm';
import { User } from './entity/User';

export const Bootstrap = async () => {
  const userRepo = getRepository(User);
  const user = userRepo.create({
    firstName: 'Omer',
    lastName: 'Uysal',
    age: 25,
  });
  try {
    await userRepo.save(user);
    console.log('New user saved : ' + user);
  } catch (error) {
    console.error(error);
  }
};
