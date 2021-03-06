---
title: 设计模式/Design Pattern
tags: [设计模式]
---

- [适配器模式](/docs/design-pattern/a1)
- [状态模式](/docs/design-pattern/a2)
- [装饰者模式](/docs/design-pattern/a3)
- [中介者模式](/docs/design-pattern/a4)
- [职责链模式](/docs/design-pattern/a5)
- [享元模式](/docs/design-pattern/a6)
- [模板方法模式](/docs/design-pattern/a7)
- [命令模式](/docs/design-pattern/a8)
- [观察者模式](/docs/design-pattern/a9)
- [迭代器模式](/docs/design-pattern/a90)
- [代理模式](/docs/design-pattern/a91)
- [策略模式](/docs/design-pattern/a92)
- [单例模式](/docs/design-pattern/a93)
- [原型模式](/docs/design-pattern/a94)

## 简介

全部代码：[点击这里](https://github.com/renhongl/front-end-demo/tree/master/demo-design-pattern)。

设计模式的主题总是把不变的事物和变化的事物分离开来。

<!-- more -->

## 鸭子类型

如果它走起来像鸭子，叫起来也像鸭子，那么它就是鸭子。

## 多态

多态的思想是把“做什么”和“谁去做”分离开来。

多态最根本的作用就是通过把过程化的条件分支语句转化为对象的多态性，从而消除这些条件分支语句。

多态的最根本好处在于，你不必再像的对象询问“你是什么类型”而后根据得到的答案调用对象的某个行为，
你只管调用该行为就是了，其他的一切多态机制都会为你安排妥当。

## 封装

封装的目的是将信息影藏。

一般而言，封装是指封装数据和封装实现。

更广义的封装，还包括封装类型和封装变化。

## this

作为对象的方法调用

```js
 let obj = {
     a: 1,
     getA: function() {
         console.log(this === obj);//true
         console.log(this.a);//1
     }
 };
 obj.getA();
```

作为普通函数调用

```js
 window.name = 'global';
 let getName = function() {
     return this.name;
 }
 console.log(getName());//global

 //or

 window.name = 'global';
 let myObj = {
     name: 'renhong',
     getName: function() {
         return this.name;
     }
 }
 var getName = myObj.getName;//普通函数调用
 console.log(getName());//global

 console.log(myObj.getName());//renhong, 对象的方法调用
```

构造器调用。当用 new 运算符调用函数时，该函数总会返回一个对象，构造器里的 this 就指向这个对象。

```js
 let MyClass = function() {
     this.name = 'renhong';
 }
 let obj = new MyClass();
 console.log(obj.name);//renhong

 //如果构造器显示返回一个对象，那么new之后返回的是这个对象，而不是this。

 let MyClass = function() {
     this.name = 'renhong',
     return {
         name: 'mogu'
     }
 }
 let obj = new MyClass();
 console.log(obj.name);//mogu
```

call 和 apply 调用。用于动态的改变传入函数的 this。

```js
 let obj1 = {
     name: 'renhong',
     getName: function() {
         return this.name;
     }
 }

 let obj2 = {
     name: 'mogu'
 }

 console.log(obj1.getName());//renhong
 console.log(obj1.getName.call(obj2));//mogu
```

## call 和 apply

作用一模一样，区别只在于传入参数的形式不同。

apply 接受两个参数，第一个参数指定函数体内部的 this 指向。第二个参数是一个数组或者类数组，这些元素全部作为参数传递给被调用的函数。

```js
 let func = function(a, b, c) {
     console.log([a, b, c]);//[1, 2, 3]
 }
 func.apply(null, [1, 2, 3]);
```

call 传入的参数是不固定的，第一个参数同样是代表函数体内的 this 指向，从第二个参数开始，每个参数一次被当做被调用的函数的参数传入。

```js
 let func = function(a, b, c) {
     console.log([a, b, c]);//[1, 2, 3]
 }
 func.call(null, 1, 2, 3);
```

为什么要使用 call 和 apply？

```js
 //改变this指向
 //---------例子1
 let obj1 = {
     name: 'renhong'
 }
 let obj2 = {
     name: 'mogu'
 }
 window.name = 'window';
 let getName = function() {
     this.name;
 }
 getName();//window
 getName.call(obj1);//renhong
 getName.call(obj2);//mogu

 //---------例子2
 let func = function() {
     console.log(this.id);
 }
 document.getElementById('div1').onclick = function() {
     console.log(this.id);//div1
     func();//undefined，指向window
     func.call(this);//div1，指向这个this
 }

 //---------例子3
 class Controller{
     constructor() {
         let type = 'dialog';
         this.name = 'controller';
         renderControl();
         handleEvents.call(this);
         renderDialog.call(this, type);
     }
 }

 function renderControl() {
     console.log(this.name);//undefined，this指向window
 }

 function handleEvents() {
     console.log(this.name);//controller
 }

 function renderDialog(type) {
     console.log(type);//dialog
 }

 //借用其他对象的方法
 //类数组对象arguments，没有push的方法，不能将元素push进去。我们首先调用数组的push方法，再手动将push方法内部的this指向改为arguments，就帮助arguments实现了push功能。
 (function() {
     Array.prototype.push.call(arguments, 3);
     console.log(arguments);//[1, 2, 3]
 })(1, 2);
```

## 闭包

闭包是一个非常强大的特性，但人们对其也有诸多误解。一种耸人听闻的说法是闭包会造成内存泄漏，所以要尽量减少闭包的使用。

局部变量本来应该在函数退出的时候被解除饮用，但如果局部变量被封闭在闭包形成的环境中，那么这个局部变量就能一直生存下去。从这个意义上看，闭包的确会使一些数据无法被及时销毁。使用闭包的一部分原因是我们选择主动把一些变量封闭在闭包中，因为可能在以后还需要使用这些变量，把这些变量放在闭包中和放在全局作用域，对内存方面的影响是一致的。

跟闭包和内存泄漏有关系的地方是，使用闭包的同时，比较容易形成循环引用，如果闭包的作用域链中保存着一些 DOM 节点，这时候有可能造成内存泄漏。但这并非闭包问题，也并非 Javascript 问题。

**注：** 当代码中需要全局变量时，可以使用闭包，将这个变量封装在一个函数中，那这个函数就封装了一个独立的功能，不再依赖外部的变量。

## 函数柯里化（function currying）

currying 又称部分求值。一个 currying 的函数首先会接受一些参数，接受了这些参数之后，该函数并不会立即求值，而是继续返回另外一个函数，刚传入的参数在函数形成的闭包中被保存起来。待到函数真正需要求值的时候，之前传入的所有参数都会被一次性用于求值。

## Uncurrying

当我们调用对象的某个方法时，其实不用去关心该对象原本是否被设计为拥有这个方法，这是动态类型语言的特点，也是常说的鸭子类型思想。

同理，一个对象也未必只有使用它自身的方法。通过 call 和 apply 方法可以让对象去借用一个原本不属于它的方法。

## 节流、防抖

在一些情况下，函数的触发不是由用户直接控制的，在这些情景下，函数可能被非常频繁的调用，而造成大的性能问题。

例如在 window 的 resize 事件中，或者在 div 拖动事件中，会频繁的触发这些事件，并且 DOM 相关的操作非常消耗性能，这时浏览器可能会出现卡顿现象。

以上现象我们可以使用 setTimeout 来实现每隔固定时间来触发事件，如果过于频繁，将忽略那次的事件。

### 节流

```js
export function throttling(func, delay) {
    let timer;
    return function(...args) {
        if (timer) {
            return;
        }
        timer = setTimeout(function() {
            func.apply(this, args);
            timer = null;
        }, delay);
    }
}

window.onresize = throttling(function() {
  console.log('resized', Date.now());
}, 1000);
```

### 防抖

```js
export function debounce(func, delay) {
    let timer;
    return function(...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            func.apply(this, args);
        }, delay);
    }
}

window.onresize = debounce(function() {
  console.log('resized', Date.now());
}, 1000);
```
