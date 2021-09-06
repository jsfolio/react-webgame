const path = require('path');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', //실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js' , '.jsx'] //확장자 생략 가능
    },
    entry: {
        app: ['./client'],
                //대상 파일에서 다른 대상 파일을 불러 올 경우 생략할 수 있다.
                //(./word_relay.jsx 생략)             
    }, //입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties'
                ]
            },
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'),
                    //dirname :현재폴더
        filename: 'app.js'
    }, //출력
};