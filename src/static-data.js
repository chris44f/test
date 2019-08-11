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

const allTasks = {
  0: {
      taskText: "first task update",
      taskCategory: ["work1"],
      timestamp: '12:00:00',
      datestamp: '01/02/2019',
      user_id: "user001",
      key: "demo001_0"
  },
  1: {
      taskText: "Second Task Update",
      taskCategory: ["work3"],
      timestamp: '15:30:30',
      datestamp: '05/04/2019',
      user_id: "user001",
      key: "demo001_1"
  },
  2: {
      taskText: "my first update",
      taskCategory: ["work1"],
      datestamp: '05/04/2019',
      timestamp: '07:08:19',
      user_id: "user002",
      key: "demo002_0"
  } 
}

const allCats = [
  "work1", "work2", "work3"
]

export { loginDetails, allTasks, allCats }