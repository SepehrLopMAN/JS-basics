// Roles

class Task {
  constructor(taskName) {
    this.name = taskName;
  }
}

class Guest {
  constructor(tasks) {
    // ???? "Task" type checking
    this.tasks = tasks;
  }
  getTask(id) {
    return this.tasks[id];
  }
}

class User extends Guest {
  constructor(tasks) {
    super(tasks);
  }

  createTask(task) {
    this.tasks.push(task);
  }
}

class Admin {
  constructor(usersAndGuests) {
    // ???? "Users & Guests" type checking
    this._usersAndGuests = usersAndGuests;
  }
  getArray() {
    let result = [];
    for (const obj of this._usersAndGuests) {
      result.push(obj instanceof User ? "User" : "Guest");
    }
    return result;
  }
  changeType(index) {
    this._usersAndGuests[index] =
      this._usersAndGuests[index] instanceof User
        ? new Guest(this._usersAndGuests[index].tasks)
        : new User(this._usersAndGuests[index].tasks);
    return this.getArray();
  }
}

const guest = new Guest([
  new Task("task name 1"),
  new Task("task name 2"),
  new Task("task name 3"),
]);

console.log(guest.getTask(0)); // { name: 'task name 1' }
console.log(guest.getTask(2)); // { name: 'task name 3' }
// guest.createTask(new Task("task name 4")); // taskName is not defined, should not work

const user = new User([
  new Task("task name 1"),
  new Task("task name 2"),
  new Task("task name 3"),
]);

console.log(user.getTask(0)); // { name: 'task name 1' }
console.log(user.getTask(2)); // { name: 'task name 3' }
user.createTask(new Task("task name 4")); // undefined
console.log(user.getTask(3)); // {name: 'task name 4'}

const admin = new Admin([
  new Guest([]),
  new Guest([new Task("task name 1")]),
  new User([]),
  new User([new Task("task name 2")]),
]);

console.log(admin.getArray()); // [Guest, Guest, User, User]
console.log(admin.changeType(1)); // ?
console.log(admin.getArray()); // [Guest, User, User, User]
