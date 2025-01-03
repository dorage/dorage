---
uuid: f1ca0862-dced-457e-ad5b-a2f423eeac94
description: 
title: [2131] Longest Palindrome by Concatenating Two Letter Words
tags: [ LeetCode, Medium ]
date: 2022-09-18T15:00:00.000Z
---







### 링크

### 📝 문제

You are given an array of strings `words`. Each element of `words` consists of **two** lowercase English letters.

Create the **longest possible palindrome** by selecting some elements from `words` and concatenating them in **any order**. Each element can be selected **at most once**.

Return *the **length** of the longest palindrome that you can create*. If it is impossible to create any palindrome, return `0`.

A **palindrome** is a string that reads the same forward and backward.

*INPUT*

*OUTPUT*

```jsx
["lc","cl","gg"]
```

```jsx
6
```

### 🚨 오류

<aside>
🕧

</aside>

### ✔️ 풀이

두 글자인 경우 이미 해당 글자의 뒤집힌 글자가 나왔으면 카운트 업을 해주고, 없는 경우 해쉬맵을 통한 체크와, 해당 문자열이 팰린드롬인지 확인하고 셋에 넣어준다.

카운트에 글자 수를 곱하고 셋트에 남은 팰린드롬이 있다면 글자 수 2를 더해준다.

```jsx
/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    let count = 0;
    const map = new Map();
    const set = new Set();
    const selected = [];
    
    for(const word of words){
        const reverse = reverseTwo(word);
        if(map.has(reverse)) {
            const cnt = map.get(reverse);
            
            if(cnt > 1) {
                map.set(reverse, cnt - 1);
            } else {
                map.delete(reverse);
            }
            
            set.delete(reverse);
            count += 2;
            continue;
        }
        
        const cnt = map.has(word) ? map.get(word) : 0;
        map.set(word, cnt + 1);
        if(word === reverse) set.add(word);
    }
    return count * 2 + (set.size ? 2 : 0);
};

const reverseTwo = (str) => `${str[1]}${str[0]}`;
```