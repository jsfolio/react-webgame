const React = require('react');
const ReactDom = require('react-dom');
const WordRelay = require('./word_relay');

ReactDom.render(<WordRelay/>, document.querySelector('#root'))