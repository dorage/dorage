---
uuid: 7f4cde4e-4ee0-47c5-a3ab-b4608efcb2e7
description: 
title: [ALDS1_3_D] Areas on the Cross-Section Diagram
tags: [ AOJ ]
date: 2021-11-23T15:00:00.000Z
---







### 링크

[https://onlinejudge.u-aizu.ac.jp/courses/lesson/1/ALDS1/3/ALDS1_3_D](https://onlinejudge.u-aizu.ac.jp/courses/lesson/1/ALDS1/3/ALDS1_3_D)

### 📝 문제

![Untitled](https://vault-r2.dorage.io/7f4cde4e-4ee0-47c5-a3ab-b4608efcb2e7/untitled.png)

*INPUT*

*OUTPUT*

```jsx
\\//
```

```jsx
4
1 4
```

### 🚨 오류

<aside>
🕧 OUTPUT이 한 글자만 나와야할 때 뒤에 공백이 출력되지 않게 하기 "".trim() 사용

</aside>

### ✔️ 풀이

[[ALDS1_3D] Areas on the cross section diagram.pdf](%5BALDS1_3_D%5D%20Areas%20on%20the%20Cross-Section%20Diagram%20e20ddfc9fc354a08a7955db6c3bad90b/ALDS1_3D_Areas_on_the_cross_section_diagram.pdf)

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
    const diagram = input.shift();
    areaOfDiagram(diagram);
}

function areaOfDiagram(diagram) {
    let s1 = [];
    let s2 = [];
    for (let j = 0; j < diagram.length; j++) {
        const char = diagram[j];
        if (char === '\\') {
            s1.push(j);
        }
        if (char === '/') {
            if (!s1.length) continue;
            const i = s1.pop();
            let area = j - i;

            while (true) {
                if (!s2.length) break;
                const [k, area2] = s2.pop();

                if (k > i) {
                    area += area2;
                } else {
                    s2.push([k, area2]);
                    break;
                }
            }

            s2.push([i, area]);
        }
    }

    console.log(s2.reduce((acc, curr) => acc + curr[1], 0));
    console.log(`${s2.length} ${s2.map((e) => e[1]).join(' ')}`.trim());
}
```

**다시 풀어보기**

```jsx
// 21-11-28
// 뭔가 더 지저분한 것 같기도하고
// 졸려서 그런가부다..

const { off } = require('process');
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
    const grounds = input.shift();
    getArea(grounds);
}

function getArea(grounds) {
    const stack = [];
    const areas = [];
    for (let i = 0; i < grounds.length; i++) {
        const ground = grounds[i];
        if (ground === '\\') {
            stack.push(i);
            continue;
        }
        if (ground === '/') {
            if (!stack.length) continue;
            const j = stack.pop();
            let area = i - j;
            while (areas.length) {
                const [k, prevArea] = areas.pop();
                if (k < j) {
                    areas.push([k, prevArea]);
                    break;
                }
                area += prevArea;
            }
            areas.push([j, area]);
        }
    }
    if (areas.length) {
        console.log(areas.reduce((a, b) => a + b[1], 0));
        console.log(areas.length + ' ' + areas.map((el) => el[1]).join(' '));
    } else {
        console.log(0);
        console.log(0);
    }
}
```

2022-04-10 다시풀기

```jsx
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
    input = input.shift();
    const s1 = [];
    const s2 = [];
    for (let i = 0, len = input.length; i < len; i++) {
        if (input[i] === '\\') {
            s1.push(i);
            continue;
        }
        if (s1.length && input[i] === '/') {
            let startIdx = s1.pop();
            let currArea = i - startIdx;
            while (s2.length) {
                const [lastIdx, lastArea] = s2.pop();
                if (startIdx < lastIdx) {
                    currArea += lastArea;
                    continue;
                }
                s2.push([lastIdx, lastArea]);
                break;
            }
            s2.push([startIdx, currArea]);
        }
    }
    return [
        s2.reduce((a, c) => a + c[1], 0),
        [s2.length, ...s2.map((e) => e[1])].join(' '),
    ].join('\n');
}

console.log(solution(['\\\\//']));
```