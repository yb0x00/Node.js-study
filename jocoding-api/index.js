const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {    //HTTP 메소드 라우팅 콜백함수
    res.send('Hello World!')
})

//params 사용
// app.get('/user/:id', (req, res) => {
//     const q = req.params
//     //console.log(q)  //{ id: 'yeong' }
//     console.log(q.id)

//     res.json({'userid': q.id})
// })

//query 사용
app.get('/user/:id', (req, res) => {
    const q = req.query
    console.log(q)

    res.json({'userid': q.name})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})