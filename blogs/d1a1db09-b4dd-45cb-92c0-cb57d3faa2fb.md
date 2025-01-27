---
uuid: d1a1db09-b4dd-45cb-92c0-cb57d3faa2fb
description: 
title: [FP] 일급함수
tags: [ FunctionalProgramming ]
date: 2022-03-19T15:00:00.000Z
---








## 일급

일급은 값으로 다룰 수 있다는 의미이다.

- 변수에 담을 수 있다.
- 함수나 메서드의 인자로 넘길 수 있다.
- 함수나 메서드에서 리턴할 수 있다.

자바스크립트의 모든 값은 일급이다.

자바스크립트에서 모든 객체는 일급 객체이며 함수도 객체이자 일급 객체다.

일급함수는 다음과 같은 추가조건을 만족한다.

- 아무때나 선언이 가능하다 (런타임포함)
- 익명으로 선언할 수 있다
- 익명으로 선언한 함수도 함수나 메서드의 인자로 넘길 수 있다.

**자바스크립트의 함수는 위 모든 조건을 만족한다.**

### 클로저

함수와 그 함수가 선언된 렉시컬 환경과의 조합

클로저의 강력함이나 실용성은 은닉에 있지 않다.

클로저가 강력하고 실용적인 상황은 다음과 같다.

- 이전 상황을 나중에 일어날 상황과 이어 나갈 떄
- 함수로 함수를 만들거나 부분 적용을 할 때

예를 들어, 이벤트리스너로 함수를넘기기 이전에 알 수 있던 상황을 변수에 담아 클로저로 만들어 기억해 두면, 이벤트가 발생되어 클로저가 실행되었을 때 기억해 두었던 변수들로 이전 상황을 이어갈 수 있다.

콜백 패턴에서도 마찬가지로 콜백으로 함수를 넘기기 이전 상황을 클로저로 만들어 기억해 두는 식으로 이전 상황을 이어갈 수 있다.

### 콜백함수라 잘못 불리는 보조함수

콜백 패턴은 끝이 나면 컨텍스트를 다시 돌려주는 단순한 협업로직을 가진다.

- callback
- predicate
- iteratee
- event listener

표현의 제약은 상상력에도 제약을 만든다

보조함수에게 역할에 가장 맞는 이름이 있는것이 좋다.