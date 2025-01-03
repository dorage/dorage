---
uuid: 9ebb8b8a-6deb-478c-a4aa-998ef2afb822
description: 
title: [38] Count and Say
tags: [ Daily Challenge, LeetCode, Medium ]
date: 2022-10-17T15:00:00.000Z
---







### 링크

[Count and Say - LeetCode](https://leetcode.com/problems/count-and-say/)

### 📝 문제

The **count-and-say** sequence is a sequence of digit strings defined by the recursive formula:

- `countAndSay(1) = "1"`
- `countAndSay(n)` is the way you would "say" the digit string from `countAndSay(n-1)`, which is then converted into a different digit string.

To determine how you "say" a digit string, split it into the **minimal** number of substrings such that each substring contains exactly **one** unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

For example, the saying and conversion for digit string `"3322251"`:

![https://assets.leetcode.com/uploads/2020/10/23/countandsay.jpg](https://vault-r2.dorage.io/9ebb8b8a-6deb-478c-a4aa-998ef2afb822/https_assets_leetcode_com_uploads_2020_10_23_countandsay_jpg.jpg)

Given a positive integer `n`, return *the* `nth` *term of the **count-and-say** sequence*.

*INPUT*

*OUTPUT*

```jsx
n = 1
```

```jsx
1
```

### 🚨 오류

<aside>
🕧

</aside>

### ✔️ 풀이

```jsx
const nCount = (n) => {
    let result = '';
    
    const str = n.toString();
    const len = str.length;
    
    let start = -1;
    let end = 0;
    
    for(let i = 0; i < len; i++) {
        if(str[i] === str[i + 1]) {
            end++;
            continue;
        }
        result += `${end - start}${str[i]}`;
        start = end;
        end++;
    }
    
    return result;
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1) return "1";
    return nCount(countAndSay(n - 1));
};
```