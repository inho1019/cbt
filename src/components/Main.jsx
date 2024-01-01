import React, { useState } from 'react';
import nca from './NCA';
import nca2 from './NCA2';
import ncp200 from './NCP200';
import ncp202 from './NCP202';
import ncp207 from './NCP207';
import Start from './Start';
import Content from './Content';
import Result from './Result';
import styles from '../css/cbt.module.css';

const Main = () => {
    const [result,setResult] = useState(0)
    const [question,setQuestion] = useState(0)
    const [page,setPage] = useState(-1)
    const [sel,setSel] = useState('-1')
    const [datas,setDatas] = useState([])
    const [wrongData,setWrongData] = useState([])
    const [pass,setPass] = useState()
    const [ran,setRan] = useState(false)
    const [mode,setMode] = useState(false)
    const [max,setMax] = useState(1)
    const [timeUp,setTimeUp] = useState(false)
    const [upCase,setUpCase] = useState(false)

    const onUpCase = () => {
        setUpCase(!upCase)
    }

    const onTimeUp = () => {
        setTimeUp(!timeUp)
    }

    const onRan = () => {
        setRan(!ran)
    } 

    const onWrong = (data) => {
        setWrongData([...wrongData, data])
    }

    const getRandomItems = (array, n) => {
        const shuffledArray = array.sort(() => 0.5 - Math.random());
        return shuffledArray.slice(0, n);
    };

    const onResult = (n) => {
        setResult(result+n)
    }

    const onPage = (n) => {
        setPage(n)
    }

    const onQuestion = (n) => {
        const data = sel === '0' ? nca : sel === '1' ? nca2 : sel === '2' ? ncp200 : sel === '3' ? ncp202 : sel === '4' && ncp207; 
        let randomData = getRandomItems(data, n);
        if(ran) {
            randomData[0].answer.sort(() => 0.5 - Math.random())
        }
        setDatas(randomData);
        setQuestion(n-1);
    }

    const onPass = () => {
        if(pass === 'bitcamp!@#123') {
            onPage(0)
        } else {
            alert('패스워드가 틀렸습니다')
        }
    }

    const onSel = (n) => {
        setSel(n)
        setMax(n === '0' ? nca.length : n === '1' ? nca2.length : n === '2' ? ncp200.length : n === '3' ? ncp202.length : n === '4' && ncp207.length)
    }
    
    const onReset = () => {
        setPage(0)
        setResult(0)
        setSel('-1')
        setWrongData([])
        setRan(false) 
        setTimeUp(false) 
        setUpCase(false)
    }

    const onWrongStart =() => {
        setDatas(wrongData)
        setQuestion(wrongData.length-1)
        setResult(0)
        setWrongData([])
        setPage(1)
    }
    return (
        <div className={styles.box}>
            <h2  style={{color: mode ? '#ffd6e1' : 'skyblue'}} onClick={()=>setMode(!mode)}>{page >= 0 && 'NAVER Cloud Certified CBT'}</h2>
            <h2>{sel === '0' && 'NCA 문제은행'}{sel === '1' && 'NCA 예상기출'}{sel === '2' && 'NCP200 문제은행'}{sel === '3' && 'NCP202 문제은행'}{sel === '4' && 'NCP207 문제은행'}</h2>
            {
                page === -1 && <div>
                    <p>패스워드 입력 : <input type='password' value={pass} onChange={(e) => setPass(e.target.value)}/></p>
                    <button onClick={()=> onPass()}>확인</button>
                </div>
            }
            {
                page === 0 && <Start onQuestion={onQuestion} onPage={onPage} onSel={onSel} styles={styles} sel={sel} 
                            nca={nca.length} nca2={nca2.length} ncp200={ncp200.length} ncp202={ncp202.length} ncp207={ncp207.length}
                            ran={ran} onRan={onRan} mode={mode} max={max} onTimeUp={onTimeUp} timeUp={timeUp} onUpCase={onUpCase} upCase={upCase}/>
            }
            {
                page === 1 && <Content question={question} datas={datas} onPage={onPage} onResult={onResult} styles={styles} ran={ran} 
                            onWrong={onWrong} mode={mode} timeUp={timeUp ? 9 : 59} upCase={upCase}/>
            }
            {
                page === 2 && <Result result={result} question={question} onReset={onReset} styles={styles} 
                            wrongNum={wrongData.length} onWrongStart={onWrongStart} mode={mode}/>
            }
        </div>
    );
};

export default Main;