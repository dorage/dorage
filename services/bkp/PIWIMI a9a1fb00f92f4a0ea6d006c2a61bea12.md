# PIWIMI

기간: July 1, 2021
Stack: Javascript, PUG, PostgreSQL, VULTR

![PIWIMI%20a9a1fb00f92f4a0ea6d006c2a61bea12/common_og.jpg](PIWIMI%20a9a1fb00f92f4a0ea6d006c2a61bea12/common_og.jpg)

![PIWIMI%20a9a1fb00f92f4a0ea6d006c2a61bea12/PIWIMI.png](PIWIMI%20a9a1fb00f92f4a0ea6d006c2a61bea12/PIWIMI.png)

## 링크

---

[https://github.com/dorage/piwimi](https://github.com/dorage/piwimi)

[[Side] CASE#1 - 자발적 공유에 의한 확산](https://www.notion.so/Side-CASE-1-841d2832c7074447abd8d76fab7221bb?pvs=21)

[[Side] CASE#2 - 피드백](https://www.notion.so/Side-CASE-2-825cb2b423b04adf817f604f17bb4de8?pvs=21)

[[Side] CASE#3 - 강제 피드백과 공유](https://www.notion.so/Side-CASE-3-2200b0ef12f741a4ada3f9b2695715b7?pvs=21)

[[Side] CASE#4 - 오래걸린 케이스..](https://www.notion.so/Side-CASE-4-294990b43c314b66b1b5792649b2a74b?pvs=21)

## 스택

---

### ▶FRONT-END

![pug.png](%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%202ab214e377864911902dcbec0cc5eaab/pug.png)

**PUG**

![javascript.jpeg](FAW%20(Fucking%20Awesome%20Weather)%20091c02c32bcc4a8e9f1982364f422375/javascript.jpeg)

**JS ES6+**

![jCR2zNJV.png](%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%202ab214e377864911902dcbec0cc5eaab/jCR2zNJV.png)

**SASS**

![IMG_4636.png](%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%202ab214e377864911902dcbec0cc5eaab/IMG_4636.png)

**WEBPACK**

![empty-logo-square.png](FAW%20(Fucking%20Awesome%20Weather)%20091c02c32bcc4a8e9f1982364f422375/empty-logo-square.png)

### ▶BACK-END

![n1JRsFeB_400x400.png](%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%202ab214e377864911902dcbec0cc5eaab/n1JRsFeB_400x400.png)

**NODE.JS**

![ASOhU5xJ.png](%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%202ab214e377864911902dcbec0cc5eaab/ASOhU5xJ.png)

**POSTGRESQL**

![QCZNyljQ_400x400.png](%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%202ab214e377864911902dcbec0cc5eaab/QCZNyljQ_400x400.png)

**VULTR**

![empty-logo-square.png](FAW%20(Fucking%20Awesome%20Weather)%20091c02c32bcc4a8e9f1982364f422375/empty-logo-square.png)

![empty-logo-square.png](FAW%20(Fucking%20Awesome%20Weather)%20091c02c32bcc4a8e9f1982364f422375/empty-logo-square.png)

## 설명

---

- ‘프레임워크 없는 프론트엔드개발’ 책에 감명을 받아 React 를 사용하지 않고 만들어본 웹서비스
- 인도네시아인들을 대상으로 심리테스트를 제공하는 웹서비스이다.
- 인도네시아 여자친구와 제작을 하게 되었다.
- 프론트엔드
    - font-size를 기반으로 한 Responsive-Design
        
        ```sass
        html
            @media screen and (max-device-width: 768px)
                font-size: 2px
            @media screen and (min-device-width: 768px) and (max-device-width: 1024px)
                font-size: 1.5px
            @media screen and (min-device-width: 1024px)
                font-size: 1px
        
        $pad: 20rem
        $col: 40rem
        
        // 각 화면 크기를 3개로 나누어 폰트사이즈를 지정한 뒤,
        // rem으로 모든 사이즈를 세팅하였다. 
        ```
        
    - attribute의 개수 / attribute의 값 / textContent가 변경된 경우 DOM노드를 가상 DOM과 replace하는 방식으로 클라이언트 렌더링을 흉내내었다.
- 백엔드
    - Express JS와 PostgreSQL, Google Cloud Storage, Vultr를 이용해 제작하게 되었다