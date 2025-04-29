const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {    //HTTP 메소드 라우팅 콜백함수
    res.send('Hello World!')
})

app.get('/dog', (req, res) => {
    res.json({'sound':'멍멍'})
})

app.get('/cat', (req, res) => {
    res.json({'sound':'야옹'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})