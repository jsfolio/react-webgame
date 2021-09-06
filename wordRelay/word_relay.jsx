//npm에서 리액트 불러오기
const React = require('react');
const {Component} = React;
//↑ 파일을 쪼개는 경우 추가적으로 적어줘야함.
class WordRelay extends Component{
    state = {
        text: 'hello webpack'
    }
    render(){
        return <h1>{this.state.text}</h1>
    }
}

module.exports = WordRelay;