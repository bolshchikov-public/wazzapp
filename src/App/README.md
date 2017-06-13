# App.js

A container that holds a 
* `<FilteredChat/>`
* `<UserMngmt/>`
* `<ChatShell/>`

Holds the state of the current chat & the oponent (other chat member)

## Get a chat
```javascript
firebase.database()
  .ref(`users/${this.context.currentUser.phoneNumber}/chatWith/${userId}`)
  .once('value', (snapshot) => {
    \\ get the chatId by snapshot.val() 
  });
```

## Create a new chat in Firebase

```javascript
_creatUserAssosiation(userId1, userId2, chatKey) {
  firebase.database()
    .ref(`users/${userId1}/chatWith/${userId2}`)
    .set(chatKey);
  firebase.database()
    .ref(`users/${userId2}/chatWith/${userId1}`)
    .set(chatKey);
}

_createNewChat(userId1, userId2) {
  firebase.database()
    .ref('chats')
    .push({ timestamp: -1 })
    .then(data => {
      this.setState({ currentChat: data.key });
      this._creatUserAssosiation(userId1, userId2, data.key);
    });
}
```

