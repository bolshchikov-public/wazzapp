# ChatConversation.js

A container that holds:
* A list of `<MessageCloud/>`
* `<ConversationInput/>`

Should list the chat conversations & publish new messages

## Subscribe to chat messages

```javascript
_subscribe(chatId) {
  if (this.ref !== null) {
    this.ref.off();
  }
  this.ref = firebase.database()
    .ref(`messages/${chatId}`)
    .orderByChild('timestamp');

  this.ref.on('child_added', (data) => {
    // data.val() has the content
    // data.key has the messageId
  });
}
```

## Save a message

```javascript
_saveMessage(message) {
  return firebase.database()
    .ref(`messages/${this.props.chatId}`)
    .push(message)
    .then(data => data.key);
}
```
