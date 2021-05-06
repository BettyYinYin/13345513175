const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

// 中间件就是一个函数
app.use(bodyParser.json());
// Access-Control-Allow-Origin
app.use(cors({
    origin: 'http://localhost:5500',
    credentials: true
}))

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/api/json', (req, res) => {
    const {page, perPage} = req.query
    res.json({
        status: 0,
        page,
        perPage
    });
});

app.post('/api/bodyjson', function(req, res){
    const {page, perPage} = req.query;
    res.json({
        status: 0,
        page,
        perPage
    })
})

app.listen('8080', () => {
    console.log('start at http://localhost:8080');
});


