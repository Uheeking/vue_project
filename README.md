# 🌞 프로젝트 기획 이유

Vue를 공부하기 위해, 프로젝트를 기획하였다. 나한테 필요한 기능위주로 제작되었다. 

# 🤩 프로젝트 개발 목표

- ***비회원***
    - 회원가입을 하여 로그인하는 것보다 비로그인으로 페이지를 운영하고자 하였다. 간단한 미니프로젝트임으로 규모가 크게 제작하지 않기 위해 모든 것을 비회원제로 페이지를 제작하였다.
- ***날씨와 날짜확인***
    - 서울기준으로 날씨를 확인하고, 날짜를 확인할 수 있도록 하였다.
- ***ToDoList***
    - 내가 오늘 할 일은 무엇인지 확인가능하게 하였다.
- ***공고확인***
    - 참고사이트와 취업공고를 확인하고, 이를 글쓸 수 있도록 업로드 버튼을 만들고자 하였다.
- ***스터디***
    - 스터디를 구할 때 어려움이 있다는 것을 알았고, 이를 위해서 간편하게 로그인없이도 서로 스터디를 구할 수 있도록 하였다.

## **1. 사용 기술**

- **언어** : node.js, vue.js
- **DB** : mysql
- **IDEs** : vscode

# ❤️‍🔥 프로젝트 내용 설명

## 1) 첫번째 페이지
<p align="center"><img width="354" alt="image" src="https://user-images.githubusercontent.com/90121929/230698894-cc45a2db-550d-4c5e-b6ba-ba8e7f0fd694.png"></p>
오늘날짜와 날씨를 확인할 수 있다. 이를 day.js를 모듈을 가져와서 바로 쓸 수 있게 하였고, 서울기준으로 해서 날씨를 가져오게 하였다. 그리고 날씨에 따라 아이콘이 바뀌게 설정하였다. 그리고 input태그를 넣어 본인의 이름을 설정하게 하였다.
<p align="center"><img width="551" alt="image" src="https://user-images.githubusercontent.com/90121929/230699042-03e3cac2-b858-4aa1-a1cd-f17a8f86224f.png"></p>
이렇게 input에 자신의 이름을 설정하면 반겨주게 하였다. 그리고 나머지 페이지에서 본인의 이름이 보이게 설정하였다.

## 2) 두번째 페이지
<p align="center"><img width="354" alt="image" src="https://user-images.githubusercontent.com/90121929/230699049-61e184b3-4d71-4a1e-beb6-1b17e33f8a0a.png"></p>
두번째 페이지는 생각보다 간단하다. TodoList로 오늘 자신이 할 일을 적으면 이를 했는지 안했는지 보여준다.
<p align="center"><img width="354" alt="image" src="https://user-images.githubusercontent.com/90121929/230699197-d313e53e-5f18-4e66-92cb-07f2f3dc31fe.png"></p>
<p align="center"><img width="354" alt="image" src="https://user-images.githubusercontent.com/90121929/230699062-f8744e5c-06c2-4f0e-8a66-3ac5002c43ce.png"></p>

1. ***todo 등록*** : 오늘의 할일을 적어놓을 수 있다. 

2. ***todo 확인*** : 적어놓은 일을 마쳤다면 체크 표시를 눌러 할일을 다했다는 것을 표시할 수 있다. 

3. ***todo 삭제*** : 할 일을 다 마치고 나서 체크 표시를 눌렀다면 삭제도 가능하게 하였다. 

4.  ***todo 모두삭제*** : 할일을 일일이 삭제할 필요없이 clear All 버튼을 눌러 모두 삭제할 수 있다. 

### localstorage에 등록 및 삭제
<p align="center"><img width="354" alt="image" src="https://user-images.githubusercontent.com/90121929/230699090-1953e9f1-a174-4e66-99cf-20970bf36407.png"></p>
이렇게 localStorage에 completed와 item을 키로 저장한다. completed가 true라면 할일을 마쳐 줄이 그어지게 된다. 만약 아니라면 왼쪽 사진처럼 표시되게 된다. item은 할일을 적어놓은 것이다. 그리고 localstorage의 키를 할일로 적어 찾기 편하게 하였다. 

## 3) 세번째 페이지
<p align="center"><img width="354" alt="image" src="https://user-images.githubusercontent.com/90121929/230699103-dd6d5f3c-f0a9-4db0-a960-fd34500b404f.png"></p>
세번째 페이지를 만들때는 크리스마스가 지나가버려 크리스마스테마를 적용을 안하고자 하였다. 첫번째와 두번째 페이지를 제작할 때는 크리스마스 시즌이라 배경을 저렇게 적용하였다. 
상위에 사이트 ***업로드 버튼을 누르면 모달창***이 나온다.
<p align="center"><img width="354" alt="image" src="https://user-images.githubusercontent.com/90121929/230699105-c6c19033-79a7-4757-a383-9afe6f05d1bb.png"></p>

1. ***키워드 선택*** : 대표적으로 두가지 키워드를 선택하게 하였다. 취업공고, 참고사이트를 둘 중 하나를 선택하거나 아니면 다 선택하게 하였다. 

2. ***URL 입력*** : 키워드에 맞는 url을 입력하고자 하였다. 

3. ***사이트 설명*** : 어떠한 사이트인지 설명을 적게하였다. 

→ 업로드버튼을 클릭하게 되면 이가 업로드되어 사이트에 대한 설명이 뜬다. 

그리고 장기적으로 이 페이지를 개발시킨다면 각각의 키워드를 선택하게 해야 한다. 그런데 처음 개발할 때는 Vue를 잘 몰라 이를 분리하는 방법을 헤맸다. 그래서 각각을 클릭시 다르게 스타일을 주어 이를 저장하게 하였다. 그리고 클릭시 선택되는 class를 가지고 와, 조건문을 주어 클릭시 얻게 되는 class라면 db에 저장되게 하였다. 그래서 각각 키워드가 다르게 선택되도록 설정하였다.
<p align="center"><img width="354" alt="image" src="https://user-images.githubusercontent.com/90121929/230699123-dbb4a12c-c007-454f-a1fa-62c69b02e57b.png"></p>
그리고 이를 한눈에 볼 수 있게 하였다. 탭을 설정하여 키워드 순으로 보기 편하게 설정하였다.
<p align="center"><img width="354" alt="image" src="https://user-images.githubusercontent.com/90121929/230699139-777fadcd-113d-42c1-9fb3-5231c2d1e365.png"></p>
페이지네이션을 설정하여, 너무 많은 사이트가 안 뜨도록 설정하였다. 
마지막으로, 사이드바는 각각의 페이지를 갈 수 있게 설정하였다. 

## 4) 네번째 페이지

<p align="center"><img width="354" alt="image" src="https://user-images.githubusercontent.com/90121929/230699243-4bee3dfe-6a6c-4faf-a304-d25228baf049.png"></p>
글쓰기 버튼을 통하여 모달창이 띄워지게 하였다. 

### 4-1) 글쓰기
<p align="center"><img width="354" alt="image" src="https://user-images.githubusercontent.com/90121929/230699265-4ebf7e8c-1852-4a59-af71-01395a9a823c.png"></p>

- 제목, 사용 언어, 설명, 링크, 비밀번호를 입력하게 설정하였다.

- 사용언어는 javascript, node.js, react, vue, flutter등을 설정하였다.

- 그리고 비회원제라 비밀번호를 입력하여, 나중에 삭제할 때 비밀번호가 맞다면 삭제된다.

### 4-2) 세부 내용
<p align="center"><img width="354" alt="image" src="https://user-images.githubusercontent.com/90121929/230699275-06b47564-08a3-43d8-914d-beb3c00a63d2.png"></p>
<p align="center"><img width="354" alt="image" src="https://user-images.githubusercontent.com/90121929/230699278-e024f842-b608-4ff3-b1b7-5a77704ca32f.png"></p>
세부내용을 눌렀을 때 제목과 사용언어, 댓글등을 볼 수 있게 된다.

사용언어는 select에서 적용한 언어를 세부내용에서 보고자 하면, 이를 이미지로 변환하였다. 댓글은 닉네임, 댓글 내용등을 썼을 때 댓글을 달 수 있다. 그리고 이 댓글도 비밀번호를 설정해야 삭제가 가능하다. 그리고 비밀번호가 맞을 경우 삭제가 된다. 그리고 댓글을 창을 띄웠을 때 너무 많은 내용이 보이게 되면 지저분해 보일까봐, show라는 변수를 주었다. 그리고 이를 안 볼 때는 접어놓을 수 있게 설정하였다.

