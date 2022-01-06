import { getRepository } from 'typeorm';
import { User } from '../entity/User';

export const findAll = async () => {
  const userRepo = getRepository(User);
  try {
    const users = await userRepo.find();
    if (users) {
      return users;
    }
  } catch (error) {
    console.error(error);
  }
};

export const findByName = async (firstName) => {
  const userRepo = getRepository(User);
  try {
    const user = await userRepo.findOne({ where: { firstName } });
    if (user) {
      return user;
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteById = async (id) => {
  const userRepo = getRepository(User);
  try {
    const user = await userRepo.delete(id);
    console.log(user);

    console.log('User deleted successfully');
  } catch (error) {
    console.error(error);
  }
};
