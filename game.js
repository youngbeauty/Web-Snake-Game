const SNAKE_SPEED = 5;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

// 在文件开头添加初始状态常量
const INITIAL_SNAKE_BODY = [
  { x: 11, y: 11 },
  { x: 11, y: 10 },
  { x: 11, y: 9 },
];

const main = () => {
  update();
  draw();
  if(gameOver){
    clearInterval(gameloop);
    if(confirm("游戏结束！是否重新开始？")) {
      resetGame();
    }
  }
};

// TODO 4.4: Define the interval ID
// HINT: ONLY EDIT THE LINE BELOW!
let gameloop = setInterval(main, 1000 / SNAKE_SPEED);

const update = () => {
  console.log('Updating');
  updateSnake();
  updateFood();
  // TODO 4.2: Update Game State
  gameOver = checkGameOver();
};

const draw = () => {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
};

// TODO 4.1: Create a function that checks if the game is over
const checkGameOver = () =>{
  return snakeOutOfBounds() || snakeIntersectSelf();
}

// 添加重置游戏的函数
const resetGame = () => {
  gameOver = false;
  inputDirection = { x: 0, y: 1 }; // 重置蛇的移动方向
  // 重置蛇的身体
  snakeBody.length = 0;
  INITIAL_SNAKE_BODY.forEach(segment => snakeBody.push({...segment}));
  // 重置食物位置
  food = getNewFoodPosition();
  // 重新开始游戏循环
  gameloop = setInterval(main, 1000 / SNAKE_SPEED);
};