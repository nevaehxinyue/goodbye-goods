require('dotenv').config();
const baseUrl = process.env.ASSETS_BASEURL;

const messages = [
    {
      fromUserId: 2,
      toUserId: 1,
      listingId: 1,
      content: "Is this still available?",
      id: 1,
      dateTime: 1586044521956,
      userImage: `${baseUrl}user1.jpg`
    },
    {
      fromUserId: 2,
      toUserId: 1,
      listingId: 1,
      content: "I'm interested in this item. Do you provide free delivery?",
      id: 2,
      dateTime: 1586044521956,
      userImage: `${baseUrl}user1.jpg`
    },
    {
      fromUserId: 3,
      toUserId: 1,
      listingId: 1,
      content: "Please give me a call and we'll arrange this for you.",
      id: 3,
      dateTime: 1586044521956,
      userImage: `${baseUrl}user3.jpg`
    }
  ];
  
  const getMessagesForUser = toUserId =>
    messages.filter(message => message.toUserId === toUserId);
  
  const add = message => {
    message.id = messages.length + 1;
    message.dateTime = Date.now();
    messages.push(message);
  };

  const deleteMessage = messageId => {
    const index = messages.findIndex(m=> m.id === messageId);
    if (index !== -1){
      messages.splice(index, 1) // Remove the messages from the array
    }
  }
  
  module.exports = { add, getMessagesForUser, deleteMessage };
  