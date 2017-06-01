# Data Model
> This file describes the structure of data and how it's stored in DB.

```js
wazzup: {
  users: {
    1234: {
      name: 'Sergey Bolshchikov'
      img: 'http://static.storage.com/1234',
      chats: {
        one: true
      }
    },
    9876: {
      name: 'Anna Fridman'
      img: 'http://static.storage.com/9876',
      chats: {}
    },
    4567: {
      name: 'Oren Rubon',
      img: 'http://static.storage.com/4567',
      chats: {
        one: true
      }
    }
  }
  chats: {
    one: {
      lastMessage: 'Hello my friend',
      timestamp: 1496234742258,
      members: [1234, 4567]
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
