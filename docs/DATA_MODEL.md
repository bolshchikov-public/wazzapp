# Data Model
> This file describes the structure of data and how it's stored in DB.

```js
wazzup: {
  users: {
    1234: {
      userName: 'Sergey Bolshchikov'
      imageData: 'http://static.storage.com/1234',
      phoneNumber: 1234
      chatsWith: {
        4567: 'one'
      }
    },
    9876: {
      userName: 'Anna Fridman'
      imageData: 'http://static.storage.com/9876',
      phoneNumber: 9876
      chatsWith: {}
    },
    4567: {
      userName: 'Oren Rubon',
      imageData: 'http://static.storage.com/4567',
      phoneNumber: 4567
      chatsWith: {
        1234: 'one'
      }
    }
  }
  chats: {
    one: {
      lastMessage: 'Hello my friend',
      timestamp: 1496234742258
    }
  },
  messages: {
    one: {
      m1: {
        body: 'Hello my friend',
        timestamp: 1496234742258
      }
    }
  }
}
