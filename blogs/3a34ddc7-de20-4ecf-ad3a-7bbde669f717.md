---
uuid: 3a34ddc7-de20-4ecf-ad3a-7bbde669f717
description: 
title: [91] Decode Ways
tags: [ Daily Challenge, LeetCode, Medium ]
date: 2022-09-30T15:00:00.000Z
---







### 링크

[Decode Ways - LeetCode](https://leetcode.com/problems/decode-ways/)

### 📝 문제

A message containing letters from `A-Z` can be **encoded** into numbers using the following mapping:

```
'A' -> "1"
'B' -> "2"
...
'Z' -> "26"

```

To **decode** an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, `"11106"` can be mapped into:

- `"AAJF"` with the grouping `(1 1 10 6)`
- `"KJF"` with the grouping `(11 10 6)`

Note that the grouping `(1 11 06)` is invalid because `"06"` cannot be mapped into `'F'` since `"6"` is different from `"06"`.

Given a string `s` containing only digits, return *the **number** of ways to **decode** it*.

The test cases are generated so that the answer fits in a **32-bit** integer.

*INPUT*

*OUTPUT*

```jsx
s = "12"
```

```jsx
2
```

### 🚨 오류

<aside>
🕧

</aside>

### ✔️ 풀이

처음부터 모든 경우를 검사하는 브루트포스로 풀이해 보았는데, 같은 수가 연달아서 나오면 Time Limit Exceeded 가 발생한다.

```jsx
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let answer = 0;
    const q = [0];
    
    while(q.length) {
        const i = q.shift();
        
        if(i > s.length) continue;
        if(i === s.length) {
            answer++;
            continue;
        }
        
        const curr = s[i];
        if(curr === '0') continue;
        q.push(i + 1);
        
        if(i >= s.length - 1) continue;
        const next = s[i + 1];
        if(Number(curr + next) > 26) continue;
        q.push(i + 2);
    }
    
    return answer;
};
```

약간의 조건이 있는 DP문제였다.

탑다운 방식에서는 문제가 있었지만 바텀업 방식으로 풀이하니 바로 통과를 했다.

```jsx
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const len = s.length;
    const memo = Array(len).fill(0);
    memo.push(1);
    memo[len - 1] = s[len - 1] === '0' ? 0 : 1;
    
    for(let i = len - 2; i >= 0; i--) {
        const curr = s[i];
        const next = s[i + 1];
        
        if(curr === '0') continue;
        memo[i] += memo[i + 1];
        if(Number(curr+next) <= 26) memo[i] += memo[i + 2];
    }
    
    return memo[0];
};
```