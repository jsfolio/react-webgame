const React = require('react');
const { useState, useRef } = React;

const Multiply = () => {
    //state를 하나씩 분리
    const [first, setFirst] = useState(Math.ceil(Math.random()*9));
    const [second, setSecond] = useState(Math.ceil(Math.random()*9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    //state를 바꾸면 함수자체가 다시 실행되기 때문에 조금 더 느려질 수 있다.
    const onChangeInput = (e) => {
        setValue(e.target.value);
    };
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(value) === first * second){
            setResult('정답' + value);
            setFirst(Math.ceil(Math.random()*9));
            setSecond(Math.ceil(Math.random()*9));
            setValue('');

            inputRef.current.focus();
        }else{
            setResult('땡!!');
            setValue('');
            inputRef.current.focus();
        };
    };
    return (
        <>
            <div>{first} 곱하기 {second} 는?</div>
            <form onSubmit={onSubmitForm}>
                <input type="number"
                    ref = {inputRef}
                    value = {value}
                    onChange = {onChangeInput}/>
                <button>입력</button>
            </form>
            <div id="result">{result}</div>
        </>
    )
}

module.exports = Multiply;