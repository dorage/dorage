---
uuid: d74c0f1b-2441-4a4a-befa-dd79a6eb2f8f
description: 
title: Find Closest Value In BST
tags: [ AlgoExpert ]
date: 2021-03-28T15:00:00.000Z
---







```jsx
function findClosestValueInBst(tree, target) {
  let closest = tree.value;
	while(true){
		if(tree === null) break;
		if(Math.abs(closest - target) > Math.abs(target - tree.value)){
			closest = tree.value;
		}
		if(target < tree.value){
			tree = tree.left;
		} else if(target > tree.value){
			tree = tree.right;
		} else {
			break;
		}
	}
	return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
```

주어진 이진탐색트리 객체 tree에서 target과 가장 가까운 값을 찾는 문제이다.

현재 노드와 target의 차를 구하여 가장 가까운 값을 찾으며 트리를 순회한다.