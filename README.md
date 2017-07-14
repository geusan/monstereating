# 괴식닷컴 MERN(MongoDB + Express + React + NodsJS)
C9(Ubuntu 16.04 기준) - 

## 기본설명
웹애플리케이션을 빠르게 구축할 수 있는 프레임워크 스택을 말한다.  구성은 아래와 같이 사용하게된다.
- frontend : ReactJS
- backend(server) : NodeJS + Express
- database : MongoDB
각 기본설명이 적혀 있고, 설치방법이 적혀있는데 아래쪽에서 한번에 다하자


### 0. git : repository 버젼관리 시스템
    github은 온라인상의 스토리지를 통해 개발코드 버젼관리를 쉽게 도와준다. 
    각 부분에 맞춰서 commit 을 할경우에 해당 개발 상황까지의 상태가 등록이 되고
    commit 메시지로 찾기를 할 수가 있어, 이전에는 되다가 후에 안되는 기능이 있을 때
    이전상태로 되돌릴 수도 있다. 
    그리고 다른 사람이 쓴 코드와 안겹치게 작동하고, 한번에 merge를 하면서 협업이
    더욱 쉽도록 도와준다.
    
    # 설치방법
    sudo apt-get install -y git
    
### 1. mongoDB 사용환경 설정
    확장가능성이 좋고(Scalable) , 사용이 간단하며 (NoSQL), 오픈소스인 데이터베이스
    사용법을 금방 익히고 쉽게 사용할 수 있다. 그리고 빠르다.
    
    # 터미널1
    sudo apt-get install -y mongodb-org  #몽고디비 설치
    sudo mongod --bind_ip=$IP --dbpath={데이터베이스 폴더} --nojournal # 몽고디비 서버 실행
    # 개발사용이 끝났으면 꼭 끄자
    
    # 터미널2 다른 터미널 열기
    mongo #다른 터미널에서 몽고디비 서버 접속
    
    # mongodb 커맨드 명령어
    >show dbs # database 목록 보기
    >use monster # monster database로 이동
    >db.{model + s (복수형)}.find()  # 찾기 메소드
    >db.{model + s (복수형)}.save({contents: "newData"}) # contents: "newData" 를 가진 데이터 생성
    >db.{model + s (복수형)}.update(조건문, {바꿀정보json}) # 수정
    >db.{model + s (복수형)}.delete(조건문) # 삭제
    
    
    
### 2. nodeJS 설치(c9은 원래 설치되어 있음 버젼업만 하자)
    개발언어다. v8엔진을 기반이라고 하는데, 잘은 모르겠는데, cross-env 에 강력하다고 한다.
    이 말은 어디에서든지 개발이 가능하고, 어디에서든지 실행이 가능하다는 말이다.
    어떤 플랫폼 상이든 개발이 편하고 빠르게 된다. 퍼포먼스는 JSP에 비하면 떨어지는 데,
    실시간 채팅이거나 스트리밍 기능이 필요할 때 제외하고는 상관 없을 거라고 생각한다.
    
    # v6 기준 (ubuntu 에 설치 할 때)
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    sudo apt-get install -y nodejs
    
    #버젼업 하기
    node -v # 버젼확인
    sudo npm cache clean -f # 캐시 삭제
    sudo npm install -g n # n 모듈 설치
    sudo n stable # 안정화
    
    # npm 버젼업
    npm -v # 버젼확인
    sudo npm install -g npm # 업데이트
    
    출처 : https://velopert.com/1351
    
    
### 3. Express 설치하기(NodeJS 프레임워크)
    NodeJS에서 서버를 쓰는 프레임워크이다. 그냥 루비와 레일즈 느낌으로 이해하면 된다.
    
    # 우리는 package.json 파일로 버젼관리를 합니다만, 방법은 써드림(친절)
    sudo npm install express
    

### 4. ReactJS 설치하기
    우리가 쓰려는 발암물질 webpack을 사용한다. webpack이 환경변수 설정을 자동화 해주는데, 발암이 틀림없다.
    온전한 정신건강을 위해 심호흡 5번씩 하고 사용하도록하자
    # -g : global(시스템에 설치) --save : local (프로젝트에만 설치)
    sudo npm install -g webpack webpack-dev-server # Webpack 설치
    sudo npm install -g react react-dom redux # ReactJS 설치 
    
    

## 여기부터 진짜
    0. 이것만 따라하면 된다.
    
    git clone https://github.com/geusan/react_base.git
    
    # package.json 설정
    sudo npm install
    
    sudo npm install -g webpack webpack-dev-server
    sudo npm install -g babel-cli nodemon cross-env
    sudo npm install --save express body-parser morgan
    
    sudo npm apt-get install -y mongodb-org
    sudo npm install --save mongoose
    
    # webpack 설정
    webpack.config.js # 파일 확인
    webpack.dev.config.js # 파일 확인
    
    # build 하기
    npm run build ( server build 와 webpack build 동시에 된다)
    
    # mongodb 서버 실행
    mkdir data
    sudo mongod --bind_ip=$IP --dbpath=data --nojournal 
    # 에러가 뜰 경우 data 폴더 삭제 후 재생성 데이터베이스 IO Exception 이다.
    
    # start 하기
    npm run start 
    
    1. 기본적인 거
    package.json 파일로 dependencies 를 관리한다.
    webpack.config.js 는 디플로이 서버 환경
    webpack.dev.config.js 는 개발 서버 환경
    
    
    2. src/ 폴더의 components, containers, reducers 폴더에는 index.js 가 꼭 필요하다.
    
    3. 현재 CRUD의 간단한 기능만을 가지고 있다. 맘에드는 기능으로 커스텀하여 사용하면 된다.
    
    4. 출처 velopert.com
    