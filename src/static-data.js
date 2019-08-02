const loginDetails = {
  user001: {
      username: "guest1",
      password: "s3cRet1",
      user_id: "user001"
    },
  user002: {
    username: "guest2",
    password: "secR3t2",
    user_id: "user002"
  }
}

// const allTasks = {
//   user001: {
//     0: {
//       taskText: "first task update",
//       taskCategory: "work1",
//       timestamp: 'demo',
//       user_id: "user001",
//       key: "demo001_0"
//     },
//     1: {
//       taskText: "second task update",
//       taskCategory: "work3",
//       timestamp: 'demo2',
//       user_id: "user001",
//       key: "demo001_1"
//     }
//   },
//   user002: {
//     0: {
//       taskText: "my first update",
//       taskCategory: "work 1",
//       timestamp: 'demo3',
//       user_id: "user002",
//       key: "demo002_0"
//     }
//   } 
// }

const allTasks = {
  1: {
      taskText: "first task update",
      taskCategory: "work1",
      timestamp: 'demo',
      user_id: "user001",
      key: "demo001_0"
  },
  2: {
      taskText: "second task update",
      taskCategory: "work3",
      timestamp: 'demo2',
      user_id: "user001",
      key: "demo001_1"
  },
  3: {
      taskText: "my first update",
      taskCategory: "work 1",
      timestamp: 'demo3',
      user_id: "user002",
      key: "demo002_0"
  } 
}

export { loginDetails, allTasks }