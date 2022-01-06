import { getRepository } from 'typeorm';
import { Tweet } from './entity/Tweet';
import { User } from './entity/User';
import { deleteById, findAll } from './service/UserService';

export const Bootstrap = async () => {
  const userRepo = getRepository(User);
  const tweetRepo = getRepository(Tweet);

  const user1 = userRepo.create({
    firstName: 'Omer',
    lastName: 'Uysal',
    age: 25,
  });
  const user2 = userRepo.create({
    firstName: 'Ali',
    lastName: 'Kara',
    age: 32,
  });
  try {
    await userRepo.save([user1, user2]);
  } catch (error) {
    console.error(error);
  }
  const tweet = new Tweet();
  tweet.title = 'My first tweet';
  tweet.content = 'There is the content of my first tweet';
  tweet.user = Promise.resolve(user1);

  try {
    await tweetRepo.save(tweet);
  } catch (error) {
    console.error(error);
  }
  const users = await findAll();
  console.log(users[1]);

  await deleteById(users[1].id);
};
