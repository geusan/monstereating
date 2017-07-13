import express from 'express';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

import mongoose from 'mongoose';//mongodb
import session from 'express-session'; //세션

import api from './routes'; // 라우팅

const app = express(); // express app 인스턴스
const db = mongoose.connection; // database 연결 인스턴스
db.on('error', console.error);
db.once('open', () => {console.log('Connected to mongodb server')});
mongoose.connect('mongodb://localhost/monster'); //monster 데이터베이스로 연결
const port = 8081;
const devPort = 8082;

app.use('/', express.static(path.join(__dirname, './../public')));

// api 주소로 라우팅
app.use('/api', api);

// 세션사용
app.use(session({
    secret: 'monsterEating$1$016',
    resave: false,
    saveUninitialized: true
}));

// 기본 라우팅 위치 public/index.html
app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

app.listen(port, () => {
    console.log('Express is listening on port', port);
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
            console.log('webpack-dev-server is listening on port', devPort);
        }
    );
}