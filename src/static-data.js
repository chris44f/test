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

const allTasks = {
  user001: {
    0: {
      taskText: "first task update",
      taskCategory: "work1",
      is_user_task: true,
      updateId: "001_0"
    },
    1: {
      taskText: "second task update",
      taskCategory: "work3",
      is_user_task: true,
      updateId: "001_1"
    }
  },
  user002: {
    0: {
      taskText: "my first update",
      taskCategory: "work 1",
      is_user_task: true,
      updateId: "002_0"
    }
  } 
}

export { loginDetails, allTasks }