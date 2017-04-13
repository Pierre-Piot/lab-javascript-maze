var Maze = function(map, exit) {
  this._miner = {
    row: 0,
    col: 0,
    dir: 0 // 0:up, 1:right, 2: down, 3:left
  };
  this._maze = map;
  this._exit = {
    row: exit.row,
    col: exit.col
  }
}

// 0:up, 1:right, 2: down, 3:left
Maze.prototype.turnLeft = function(){
  switch (this.miner.dir) {
    case 0:
    this.miner.dir = 3;
      break;

    case 1:
    this.miner.dir = 0;
      break;

    case 2:
    this.miner.dir = 1;
      break;

    case 3:
    this.miner.dir = 2;
      break;
  }
}
// 0:up, 1:right, 2: down, 3:left
Maze.prototype.turnRight = function(){
  switch (this.miner.dir) {
    case 0:
    this.miner.dir = 1;
      break;

    case 1:
    this.miner.dir = 2;
      break;

    case 2:
    this.miner.dir = 3;
      break;

    case 3:
    this.miner.dir = 0;
      break;
  }
}

Maze.prototype.turnRight = function(){
  switch (this.miner.dir) {
    case 0:
    this.miner.dir = 1;
      break;

    case 1:
    this.miner.dir = 2;
      break;

    case 2:
    this.miner.dir = 3;
      break;

    case 3:
    this.miner.dir = 0;
      break;
  }
}

Maze.prototype.isPathForward = function(){
if (this.miner.dir === 0){
  if (this.miner.col = 0){
    return false;
  } else if(this._maze[this.miner.col][this.miner.row - 1]==F){
      return false;
    } else
        return true;

} if (this.miner.dir === 1) {
  if (this.miner.col = 5){
    return false;
  } else if(this._maze[this.miner.col + 1][this.miner.row]==F){
      return false;
    } else
        return true;
}

  if (this.miner.dir === 2) {
    if (this.miner.col = 5){
    return false;
  } else if(this._maze[this.miner.col][this.miner.row - 1]==F){
      return false;
    } else
        return true;
  }

  if (this.miner.dir === 3) {
    if (this.miner.col = 0){
      return false;
} else if(this._maze[this.miner.col - 1][this.miner.row]==F){
    return false;
} else
    return true;
}

Maze.prototype.isPathLeft    = function(){

 }

// Maze.prototype.isPathRight   = function(){
// }
//
//
// Maze.prototype.moveForward = function(){
// }
//
// Maze.prototype.moveForward   = function(){
// }
//
// Maze.prototype.notDone       = function(){
// }

module.exports = Maze;
