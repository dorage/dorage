---
uuid: b2b1a3d8-fbdf-4f6f-9fb0-6fdc9b447cc8
description: 
title: [2504] 괄호의 값
tags: [  ]
date: 2021-11-24T15:00:00.000Z
---







### 링크

[https://www.acmicpc.net/problem/2504](https://www.acmicpc.net/problem/2504)

### 📝 문제

![Untitled](https://vault-r2.dorage.io/b2b1a3d8-fbdf-4f6f-9fb0-6fdc9b447cc8/untitled.png)

*INPUT*

*OUTPUT*

```jsx
(()[[]])([])
```

```jsx
28
```

### 🚨 오류

<aside>
🕧 짝을 맞춰야 하는 문제에서는 외자의 경우를 체크하는것도 필요하다

</aside>

<aside>
🕧 값이 한정적이라면 truthy, falsy의 유연한 체크 보단 값으로 정확히 체크를 하자

</aside>

### ✔️ 풀이

```jsx
const readline = require('readline');

let input = [];

readline
    .createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    .on('line', function (line) {
        input.push(line);
    })
    .on('close', function () {
        solution(input);
        process.exit();
    });

function solution(input) {
    const expression = input.shift();
    console.log(calculateBracketExpression(expression));
}

function calculateBracketExpression(expression) {
    const stack = [];

    const ROUND = 2;
    const SQUARE = 3;

    //    [ ...n3, n2, n1, n, ....]
    for (let i = 0; i < expression.length; i++) {
        const bracket = expression[i];
        let n1, n2;

        if (bracket === '(' || bracket === '[') {
            stack.push(bracket);
            continue;
        }

        n1 = stack.pop();
        n2 = stack.pop();

        if (bracket === ')') {
            if (n1 !== '(' && n2 !== '(') return 0;
            if (n1 === '(') {
                stack.push(n2, ROUND);
            } else if (n2 === '(') {
                if (isNaN(n1)) return 0;
                stack.push(n1 * ROUND);
            }
        }
        if (bracket === ']') {
            if (n1 !== '[' && n2 !== '[') return 0;
            if (n1 === '[') {
                stack.push(n2, SQUARE);
            } else if (n2 === '[') {
                if (isNaN(n1)) return 0;
                stack.push(n1 * SQUARE);
            }
        }

        while (true) {
            n1 = stack.pop();
            n2 = stack.pop();
            if (isNaN(n1) || isNaN(n2)) {
                stack.push(n2, n1);
                break;
            }
            stack.push(n1 + n2);
        }
    }

    let answer = 0;
    for (const elem of stack) {
        if (elem === '(' || elem === '[' || elem === ')' || elem === ']')
            return 0;
        answer += elem || 0;
    }

    return answer;
}
```

**2022-04-10**

```jsx
//코드가 더 난잡해보여

const input = [];
require('readline')
    .createInterface({ input: process.stdin, output: process.stdout })
    .on('line', (line) => {
        input.push(line);
    })
    .on('close', () => {
        console.log(solution(input));
        process.exit();
    });

function solution(input) {
    const string = input.shift();
    if (string.length === 1) return 0;

    const stack = [];

    for (let i = 0, len = string.length; i < len; i++) {
        const char = string[i];

        if (char === '(' || char === '[') {
            stack.push(char);
            continue;
        }

        let memo = 0;
        let last = stack.pop();
        // 숫자인 경우
        if (!isNaN(last)) {
            memo = last;
            last = stack.pop();
        }
        if ((char === ']' && last === '[') || (char === ')' && last === '(')) {
            const val = char === ']' ? 3 : 2;
            // memo 값이 있다면
            memo = memo ? memo * val : val;
            const lastCheck = stack.pop();
            if (isNaN(lastCheck)) {
                if (lastCheck !== undefined) stack.push(lastCheck);
            } else {
                memo += lastCheck;
            }
            stack.push(memo);
        } else {
            return 0;
        }
    }
    if (stack.length > 1) return 0;
    return stack.shift();
}
```