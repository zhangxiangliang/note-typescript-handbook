// let 会在每次迭代创建一个作用域
for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), i * 100);
}

// const 引用的值不可变
const numLivesForCat = 9;
const kitty = {
    name: 'Aurora',
    numLives: numLivesForCat,
};

// all "okay"
kitty.name = 'a';
kitty.numLives++;

// 最小特权原则 const > let > var

// 解构
let input = [1, 2];
let [first, second] = input;
[second, first] = [first, second];

function f([first, second]: number[]) {
    console.log(first);
    console.log(second);
}

f(input);

// ... 语法
let [one, ...rest]: Array<number> = [1, 2, 3, 4];

// 展开
let exportFirst = [1, 2];
let exportSecond = [1, 2];
let exportResult = [...exportFirst, ...exportSecond];
