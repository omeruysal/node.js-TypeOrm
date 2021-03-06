import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Bootstrap } from './bootstrap';
import { User } from './entity/User';

createConnection()
  .then(async (connection) => {
    // console.log('Inserting a new user into the database...');
    // const user = new User();
    // user.firstName = 'Timber';
    // user.lastName = 'Saw';
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log('Saved a new user with id: ' + user.id);

    // console.log('Loading users from the database...');
    // const users = await connection.manager.find(User);
    // console.log('Loaded users: ', users);

    // console.log('Here you can setup and run express/koa/any other framework.');
    try {
      await Bootstrap();
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => console.log(error));
