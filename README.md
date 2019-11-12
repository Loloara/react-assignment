# 당근마켓 웹 개발 과제 챌린지 - Node.js

programmers의 과제 테스트는 코드를 제출하면 자동으로 서버를 구성하여 실행해 볼 수 있는 환경을 제공합니다.

아래 내용을 확인하여 프로젝트를 구성하고 코드를 제출해 주세요.

> 참고: 이 템플릿은 웹 어플리케이션 모듈인 [express.js](https://expressjs.com/ko/) 와 SQL을 위한 ORM(Object-Relational Mapping) 모듈인 [sequelize.js](https://sequelize.org/) 가 미리 구성되어 있습니다.

Docker 설치 및 개발 환경 설정

### Docker 설치
- 개발 환경은 docker로 구성하여 제공됩니다. 
- docker가 이미 설치 되어있다면 다음으로 넘어가세요.
- 사용중이신 os에 맞게 docker-for-desktop을 다운로드/설치 합니다.
  - mac: https://download.docker.com/mac/stable/Docker.dmg
  - windows: https://download.docker.com/win/stable/Docker%20Desktop%20Installer.exe

### 개발용 서버 실행
```
$ docker-compose up -d mysql-server
$ docker-compose run shell
    # yarn install
    # exit
$ docker-compose up -d server
```

#### 개발용 서버 접속
> 최초 실행시 접속까지 시간이 걸릴 수 있습니다. 
```
$ docker logs -f node-webapp_server_1

# migrate 관련 log까지 출력이 된 이후 아래 url로 접속해 주세요.
https://localhost:5000
```

## 실행 및 제출 시 주의사항

- Port 번호는 **PORT 환경 변수** 또는 **5000** 을 사용해야 합니다.

- 의존성 모듈들이 정의되어 있는 `package.json` 가 반드시 저장소에 루트 디렉토리에 있어야 합니다.

- 저장소에는 하나의 프로젝트만 있어야 합니다. 실행시 저장소 루트 디렉토리에 있는 `package.json` 파일만 참조하여 실행합니다.

  > **주의!**: 저장소에 api 서버와 web 서버가 같이 있다던지 하면 안됩니다.

- programmers에서 과제 실행 및 제출 시에는 `NODE_ENV` 는 **production** 으로 실행 됩니다.

  > **주의!**: 따라서 `devDependencies` 에 정의되어 있는 의존성 모듈은 설치되지 않으므로 실행시 필요한 모듈은 `dependencies` 에 정의되어 있어야 합니다.

- `.gitignore` 에 아래 항목들이 포함시켜 주세요. `node_modules` 디렉토리와 `.env` 파일이 저장소에 포함되어서는 안됩니다.

  ```
  /node_modules
  npm-debug.log
  /*.env
  ```

  >  참고: `typescript` 나 `webpack` 을 사용한 경우 컴파일의 결과 디렉토리 (`/dist` 등)도 포함되어서는 안됩니다.

- `console.log` 등 stdout으로 출력된 로그는 화면에 표시됩니다.

- programmers에서 실행된 서버는 최대 10분 뒤에는 자동으로 종료됩니다.



## 실행 및 제출 방법

1.  **본인의 github 계정**의 **private** 저장소를 생성해서 과제를 **master** 브랜치에 push 해주세요.

     > **주의!**: 저장소가 public으로 되어 있는 경우에는 programmers에서 과제를 실행/제출할 수 없습니다.

2. github 저장소 페이지의 **Setting > Collaborators** 에서 [programmers-gitbot](https://github.com/programmers-gitbot) 을 Collaborator로 추가 해주세요.

3. 실행시 github 저장소의 url을 입력하시고 **[빌드(build)]** 버튼을 누르면 자동으로 서버를 구성하여 실행 합니다. 실행 후에는 **[최종 제출]** 버튼이 활성화되어 과제를 제출 할 수 있습니다.

4. **[최종 제출] 하면 테스트가 종료되며, 이후 다시 제출이 불가능하니 충분히 실행을 해보시고 제출하시기 바랍니다!!**

   > **주의!**: [최종 제출] 되면 제출 당시의 master 브랜치의 commit으로 제출이 고정되므로 제출 이후 저장소에 commit을 push 해도 제출물에는 반영되지 않습니다.
  


## 에러 로그 발생 시 참고사항

- git fetch failed! please check your repository.

  > 잘못된 저장소 주소를 입력하거나 force commit으로 해당 commit이 없어진 경우 발생합니다.

- -----> Unable to select a buildpack

  > 저장소 root 디렉토리에 `package.json` 파일을 찾을 수 없습니다. `package.json` 파일을 확인해주세요.

- npm ERR! 혹은 error An unexpected error occurred

  > npm install 혹은 yarn install 중 에러가 발생했습니다. 로그에 표시된 해당 모듈을 확인해주세요.

- ERROR: connect ECONNREFUSED 127.0.0.1:3306

  > MySQL host를 찾을 수 없습니다. MySQL host는 *MYSQL_ROOT_HOST* 환경변수 혹은 "mysql-server" 이여야 합니다.
  
  > **주의!**: programmers에서 과제 실행 시 MySQL host는 127.0.0.1(localhost)가 아니라 *mysql-server*임을 유의해주세요.
  
- ERROR: Access denied for user 'root'@'172.17.0.3' (using password: YES)

  > MySQL 유저 혹은 비밀번호를 잘못 입력했습니다. 유저는 *MYSQL_USER* 환경 변수 혹은 "root", 비밀번호는 *MYSQL_ROOT_PASSWORD* 환경 변수 혹은 "password" 이여야 합니다.

  > **주의!**: 이 로그에서 나오는 ip 주소를 고정으로 사용하지 마세요. MySQL host의 ip 주소는 동적으로 변할 수 있습니다.

- ERROR: Unknown database

  > database를 찾을 수 없습니다. database는 *MYSQL_DATABASE* 환경 변수 혹은 "my_database" 이여야 합니다.

- Proc entrypoint migrate does not exist. Please check your Procfile

  > 저장소 root 디렉토리에 Procfile 파일을 찾을 수 없거나 Procfile의 migrate가 정의되어 있지 않은 경우 발생합니다. 

- 페이지가 작동하지 않습니다.

  > 서버 실행에 실패했거나 서버가 실행된지 10분이 지나 종료되었습니다. Procfile의 web을 확인하여 서버 실행의 이상이 없는지 확인하세요. 이상이 없으면 [초기화] 후 다시 실행하세요.



## programmers 과제 실행 시스템 및 프레임워크 환경

programmers에서 실행된 과제는 다음 환경에서 동작합니다.

```
OS 버전: ubuntu 16.04
메모리 제한: 1024 MiB
MySQL 버전: 8.0.17
node.js 버전: 10.14.1
npm 버전: 6.4.1
yarn 버전: 1.12.3
```