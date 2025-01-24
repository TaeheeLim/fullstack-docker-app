import express from 'express';
import bodyParser from 'body-parser';
import db from './db.js';

const app = express();

//json 형태로 오는 요청의 본문을 해석할 수 있게 등록
app.use(bodyParser.json());

//테이블 CREATE
db.query(`CREATE TABLE lists (
        id INTEGER AUTO_INCREMENT,
        value TEXT,
        PRIMARY KEY (id)        
    )`, (err, results, fields) => {
        console.log('results', results)
    })

//DB lists 테이블에 있는 모든 데이터를 프론트 서버에 전송
app.get('/api/values', function(req, res){
    //데이터베이스에서 모든 정보 select
        db.query('SELECT * FROM lists;',
            (err, results, fields) => {
                return res.json(results)
            }
    )
})

// 클라이언트에서 입력한 값을 db에 insert
app.post('/api/value', function(req, res, next) {
    console.log('nodemon');
    //데이터 베이스에 값 insert
    db.query(`INSERT INTO lists (value) VALUES("${req.body.value}")`,
        (err, results, fields) => {
            if(!err){
                return res.json({success : true, value : req.body.value, test : 'test~~'})
            } else {
                return res.json({success : false, value : '실패'})
            }
        }
    )
})

app.listen(5000, () => {
    console.log('Application started on port 5000')
})