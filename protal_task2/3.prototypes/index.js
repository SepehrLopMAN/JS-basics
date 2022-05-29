// Logger

function Logger() {
  this._logs = [];
}
Logger.prototype.log = function (log) {
  this._logs.push(log);
};
Logger.prototype.getLog = function () {
  return this._logs;
};
Logger.prototype.clearLog = function () {
  this._logs = [];
};

const logger = new Logger();
logger.log("Event 1");
logger.log("Event 2");
console.log(logger.getLog()); // ['Event 1', 'Event 2']
logger.clearLog();
console.log(logger.getLog()); // []

// Shuffle

Array.prototype.shuffle = function () {
  for (let key = 0; key < this.length; key++) {
    randKey = Math.floor(Math.random() * this.length);
    const temp = this[key];
    this[key] = this[randKey];
    this[randKey] = temp;
  }
  console.log(`some random shuffling ex: [${this}]`);
};

[1, 2, 3, 4].shuffle();
["a", "b", "c"].shuffle();
