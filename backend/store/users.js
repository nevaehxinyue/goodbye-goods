require('dotenv').config();
const baseUrl = process.env.ASSETS_BASEURL;const users = [
    {
      id: 1,
      name: "Nevaeh",
      email: "nevaeh@domain.com",
      password: "12345",
      profileImage: `${baseUrl}user2.jpg`
    },
    {
      id: 2,
      name: "Shirley",
      email: "shirley@domain.com",
      password: "12345",
      profileImage: `${baseUrl}user1.jpg`
    },
    {
      id: 3,
      name: "Jane",
      email: "janey@domain.com",
      password: "12345",
      profileImage: `${baseUrl}user3.jpg`
    },
  ];
  
  const getUsers = () => users;
  
  const getUserById = (id) => users.find((user) => user.id === id);
  
  const getUserByEmail = (email) => users.find((user) => user.email === email);
  
  const addUser = (user) => {
    user.id = users.length + 1;
    users.push(user);
  };
  
  module.exports = {
    getUsers,
    getUserByEmail,
    getUserById,
    addUser,
  };
  