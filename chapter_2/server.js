// The address of this server connected to the network is:URL, IP
const express = require('express')  //express 패키지 로드
const app = express()   //expres를 통해 "설정된 서버 객체" 생성
const PORT = 8383

//서버가 8383포트에서 HTTP 요청을 기다림
app.listen(PORT, () => console.log(`Server has started on : ${PORT}`))