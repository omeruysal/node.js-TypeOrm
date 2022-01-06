import { getRepository } from 'typeorm';
import { Tweet } from '../entity/Tweet';

export const findAll = async () => {
  const tweetRepo = getRepository(Tweet);
  try {
    const tweets = await tweetRepo.find();
    if (tweets) {
      return tweets;
    }
  } catch (error) {
    console.error(error);
  }
};

export const findByTitle = async (title) => {
  const tweetRepo = getRepository(Tweet);
  try {
    const tweet = await tweetRepo.findOne({ where: { title } });
    if (tweet) {
      return tweet;
    }
  } catch (error) {
    console.error(error);
  }
};
