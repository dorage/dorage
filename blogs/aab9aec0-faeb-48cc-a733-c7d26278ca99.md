---
uuid: aab9aec0-faeb-48cc-a733-c7d26278ca99
description: 
title: [FP] 메모이제이션
tags: [ FunctionalProgramming ]
date: 2022-03-31T15:00:00.000Z
---








## 메모이제이션이란

메모이제이션은 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술

```jsx
function memoize(func){
	const cache = {};
	return function(arg){
		if(cache[arg]) return cache[arg];
		return cache[arg] = func.apply(this, arguments);
	};
}

const mult5 = memoize((v) => 5*v);
log(mult5(1)); // 5
log(mult5(1)); // 5, cached
log(mult5(2)); // 10
log(mult5(2)); // 10, cahced

const add = memoize((a,b) => a+b);
log(add(1,2)); // 3
log(add(1,3)); // 3, cached
log(add(1,4)); // 3, cached

/*
첫 번째 인자를 키로 사용하기 때문에 발생하는 문제
*/

const keys = memoize((obj) => _.keys(obj));
log(keys({a:1, b:2})) // ["a", "b"]
log(keys({a:1, b:2})) // ["a", "b"], cached
log(keys({a:10, b:20, c:30})) // ["a", "b"], cached

/*
key가 [Object object]로 저장되기에 발생하는 문제
*/

// Underscore.js _.memoize
_.memoize = function (func, hasher) {
    var memoize = function (key) {
        var cache = memoize.cache;
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        if (!_.has(cache, address))
            cache[address] = func.apply(this, arguments);
        return cache[address];
    };
};
/*
.cache 를 사용한 이유는 클로저로 은닉하면 개발자가 메모리관리를 할 수 없다.
.cache 를 통해 저장된 캐시값에 접근하여 삭제를 할 수 있다.
*/
```