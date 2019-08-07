const loginDetails = {
  user001: {
      username: "Chris",
      password: "s3cRet1",
      user_id: "user001"
    },
  user002: {
    username: "Ebony",
    password: "secR3t2",
    user_id: "user002"
  },
  admin: {
    username: "admin",
    password: "1",
    user_id: "admin"
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
  0: {
      taskText: "first task update",
      taskCategory: "work1",
      timestamp: 'demo',
      user_id: "user001",
      key: "demo001_0"
  },
  1: {
      taskText: "second task update",
      taskCategory: "work3",
      timestamp: 'demo2',
      user_id: "user001",
      key: "demo001_1"
  },
  2: {
      taskText: "my first update",
      taskCategory: "work1",
      timestamp: 'demo3',
      user_id: "user002",
      key: "demo002_0"
  } 
}

const allCats = [
  "work1", "work2", "work3"
]

export { loginDetails, allTasks, allCats }