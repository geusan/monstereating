# 괴식닷컴 MERN(MongoDB + Express + React + NodsJS)
C9(Ubuntu 16.04 기준)

## 기본설명
웹애플리케이션을 빠르게 구축할 수 있는 프레임워크 스택을 말한다.  구성은 아래와 같이 사용하게된다.
- frontend : ReactJS
- backend(server) : NodeJS + Express
- database : MongoDB


### 0. git 설치
    sudo apt-get install -y git
    
### 1. mongoDB 사용환경 설정
    # 터미널1
    sudo apt-get install -y mongodb-org  #몽고디비 설치
    sudo mongod --bind_ip=$IP --dbpath={데이터베이스 폴더} --nojournal # 몽고디비 서버 실행설치
    
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
    # 우리는 package.json 파일로 버젼관리를 합니다만, 방법은 써드림(친절)
    sudo npm install express
    

### 4. ReactJS 설치하기
    # -g : global(시스템에 설치) --save : local (프로젝트에만 설치)
    sudo npm install -g webpack webpack-dev-server # Webpack 설치
    sudo npm install -g react react-dom redux # ReactJS 설치 
    
    

## 중요한것
    1. 기본적인 
    package.json 파일로 dependencies 를 관리한다.
    webpack.config.js
    webpack.dev.config.js 
    로 loader 연결을 한다.
    