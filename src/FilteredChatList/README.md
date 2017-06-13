# FilteredChatList

A container that holds:
* A list of `<ChatListItem/>`

Holds the state of the current chat list: a map of phone number to username


### List users
firebase.database().ref('/users').on('value', (snapshop) => {
  // snapshop.val() will contain the users
});
