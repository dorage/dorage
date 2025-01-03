---
uuid: 9bd9b2c6-821f-4bf4-bf69-44ee7f8bcacb
description: 
title: [ALDS1_6_C] Quick Sort
tags: [ AOJ ]
date: 2021-12-30T15:00:00.000Z
---







### 링크

[https://onlinejudge.u-aizu.ac.jp/courses/lesson/1/ALDS1/6/ALDS1_6_C](https://onlinejudge.u-aizu.ac.jp/courses/lesson/1/ALDS1/6/ALDS1_6_C)

### 📝 문제

![Untitled](https://vault-r2.dorage.io/9bd9b2c6-821f-4bf4-bf69-44ee7f8bcacb/untitled.png)

*INPUT*

*OUTPUT*

```jsx
6
D 3
H 2
D 1
S 3
D 2
C 1
```

```jsx
Not stable
D 1
C 1
D 2
H 2
D 3
S 3
```

### 🚨 오류

<aside>
🕧

</aside>

### ✔️ 풀이

quick sort의 방법에 대해 알게되었다.

Partition을 어디에 사용하는지도 알게되었다.

어렴풋이 Partition을 이용해 소팅이 가능하겠단건 알았지만 그게 Quick Sort 인 줄은 몰랐다.

Quick Sort는 Partition을 이용해서 x로 지정한 값을 기준으로 왼쪽과 오른쪽으로 나누어 Quick Sort 를 재귀호출하는 방식이다.

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
    const n = Number(input.shift());
    const A = input.map((e) => {
        const [key, num] = e.split(' ');
        return { key, num: Number(num) };
    });
    const S = JSON.parse(JSON.stringify(A));

    quickSort(A, 0, n - 1);
    mergeSort(S, 0, n);

    console.log(
        A.every((e, idx) => A[idx].key === S[idx].key)
            ? 'stable'
            : 'not stable',
    );
    console.log(A.map(({ key, num }) => `${key} ${num}`).join('\n'));
}

function swap(A, i, j) {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

function partition(A, p, r) {
    const x = A[r].num;

    let i = p - 1;
    for (let j = p; j < r; j++) {
        if (A[j].num <= x) {
            i++;
            swap(A, i, j);
        }
    }
    swap(A, i + 1, r);
    return i + 1;
}

function quickSort(A, p, r) {
    if (p < r) {
        const q = partition(A, p, r);
        quickSort(A, p, q - 1);
        quickSort(A, q + 1, r);
    }
}

function merge(S, left, mid, right) {
    const L = S.slice(left, mid);
    const R = S.slice(mid, right);

    L.push({ num: Infinity });
    R.push({ num: Infinity });

    let i = 0;
    let j = 0;
    let cnt = 0;

    for (let k = left; k < right; k++) {
        cnt++;
        if (L[i].num <= R[j].num) {
            S[k] = L[i];
            i++;
        } else {
            S[k] = R[j];
            j++;
        }
    }
    return cnt;
}

function mergeSort(S, left, right) {
    let cnt = 0;
    if (left + 1 < right) {
        const mid = Math.floor((left + right) / 2);
        cnt += mergeSort(S, left, mid);
        cnt += mergeSort(S, mid, right);

        cnt += merge(S, left, mid, right);
    }
    return cnt;
}
```