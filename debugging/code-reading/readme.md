# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    f1();
8    console.log(x);
```

### Explain why line 5 and line 8 output different numbers.
there are 2 variables x
- A global one "let x = 1";
- Another function scoped "let x = 2;"
- The first log is the function scoped "x"
- The second log is the global "x".


## Question 2

Take a look at the following code:

```js
let x = 10;

function f1() {
  console.log(x);
  let y = 20;
}

console.log(f1());
console.log(y);
```

### What will be the output of this code. Explain your answer in 50 words or less.
- console.log(f1()) return 10 The variable x is global one it scoped includes the function.
- console.log(y); throws an error "ReferenceError: y is not defined". The variable y scope is the inner function f1().

## Question 3

Take a look at the following code:

```js
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

### What will be the output of this code. Explain your answer in 50 words or less.
- Whaoo ! impressive !
- console.log(x) returns 9. f1(val) input is x but the return value of f1(val) has no x reference.
- console.log(y) returns 10. f2(val) input is an object. The function modify the property of the input object whatever it will return.



