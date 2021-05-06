"use strict";

// import '@babel/polyfill'; // 加载所有，给所有都打上补丁，如果要按需的话，安装 core-js，并配置"useBuiltIns": "usage", "corejs": 3
const func = () => console.log('hello es6');

const {
  a,
  b = 1
} = {
  a: 'this is a'
};
const array = [1, 2, 3];
console.log(array.includes(2));
