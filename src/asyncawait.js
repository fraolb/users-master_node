const users = require("./users");
// Define a function that returns a promise to get all users and return a promise
const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    });
  });
};
//Define a function to create a new user and return a promise
const createUser = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user == undefined) {
        reject("No user to be added");
      }
      resolve(user);
    });
  });
};
// Define a function to get a user by id and return a promise
const getAUserByID = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id == undefined) {
        reject("No user to be added");
      }
      const data = users.filter((i) => i.id == id);
      resolve(data);
    });
  });
};
// Define an async function that calls the createUser and getAllUsers function using await
// and returns all users
const displayUsers = async (user) => {
  const userAdd = await createUser;
  const allUsers = await getAllUsers;
  return allUsers;
};
//Define a async function to display a specific user by Id
// return the user
const displayAUser = async (id) => {
  const user = await getAUserByID(id);
  return user;
};

module.exports = {
  getAllUsers,
  getAUserByID,
  createUser,
  displayAUser,
  displayUsers,
};
