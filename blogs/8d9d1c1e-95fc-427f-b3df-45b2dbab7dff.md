---
uuid: 8d9d1c1e-95fc-427f-b3df-45b2dbab7dff
description: 
title: MergeSort / QuickSort / CountingSort
tags: [  ]
date: 2022-01-02T15:00:00.000Z
---







### 📝 문제

[[ALDS1_5_B] Merge sort](%5BALDS1_5_B%5D%20Merge%20sort%20e5ce473f6bee4342a53fadd4beca6e53.md)

[[ALDS1_6_C] Quick Sort](%5BALDS1_6_C%5D%20Quick%20Sort%20ce1d636b0d724a09a12a30c433d05278.md)

[[ALDS1_6_A] Counting Sort](%5BALDS1_6_A%5D%20Counting%20Sort%20b4a11e8b1b164bf88e52e3cb8225a3d3.md)

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
    const n = Number(input.shift());
    const A = input.map(Number);

    const countingOrderedA = countingSort(n, A, 1000000);
    console.log(countingOrderedA.join(' '));

    const quickSortedA = [...A];
    quickSort(quickSortedA, 0, n - 1);
    console.log(quickSortedA.join(' '));

    const mergeSortedA = [...A];
    mergeSort(mergeSortedA, 0, n);
    console.log(mergeSortedA.join(' '));
}

function countingSort(n, A, defaultMax) {
    const orderedA = [];
    const C = Array(defaultMax).fill(0);
    let max = 0;

    A.forEach((e) => {
        max = Math.max(e, max);
        C[e] += 1;
    });

    for (let i = 1; i < max + 1; i++) {
        C[i] = C[i - 1] + C[i];
    }

    for (let i = n - 1; i >= 0; i--) {
        orderedA[C[A[i]] - 1] = A[i];
        C[A[i]]--;
    }

    return orderedA;
}

function merge(A, left, mid, right) {
    const L = A.slice(left, mid);
    const R = A.slice(mid, right);

    L.push(Infinity);
    R.push(Infinity);

    let i = 0;
    let j = 0;

    for (let k = left; k < right; k++) {
        if (L[i] <= R[j]) {
            A[k] = L[i];
            i++;
        } else {
            A[k] = R[j];
            j++;
        }
    }
}
function mergeSort(A, left, right) {
    if (left + 1 < right) {
        const mid = Math.floor((left + right) / 2);
        mergeSort(A, left, mid);
        mergeSort(A, mid, right);
        merge(A, left, mid, right);
    }
}

function partition(A, left, right) {
    const swap = (A, i, j) => {
        const temp = A[i];
        A[i] = A[j];
        A[j] = temp;
    };
    const pivot = A[right];

    let i = left;

    for (let j = left; j < right; j++) {
        if (A[j] < pivot) {
            swap(A, i, j);
            i++;
        }
    }
    swap(A, i, right);

    return i;
}
function quickSort(A, left, right) {
    if (left >= right) return;
    const mid = partition(A, left, right);
    quickSort(A, left, mid - 1);
    quickSort(A, mid + 1, right);
}
```