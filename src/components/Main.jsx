import React, { useState } from 'react';
import nca from './NCA';
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
    const [pass,setPass] = useState()

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
        const data = sel === '0' ? nca : ''; 
        const randomData = getRandomItems(data, n);
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
    }
    
    const onReset = () => {
        setPage(0)
        setResult(0)
        setSel(-1)
    }
    return (
        <div className={styles.box}>
            <h1>네이버클라우드플랫폼 CBT</h1>
            <h1>{sel === '0' && 'NCA'}</h1>
            {
                page === -1 && <div>
                    <h3>패스워드 입력 : <input type='password' value={pass} onChange={(e) => setPass(e.target.value)}/></h3>
                    <button onClick={()=> onPass()}>확인</button>
                </div>
            }
            {
                page === 0 && <Start onQuestion={onQuestion} onPage={onPage} onSel={onSel} styles={styles} sel={sel}/>
            }
            {
                page === 1 && <Content question={question} datas={datas} onPage={onPage} onResult={onResult} styles={styles}/>
            }
            {
                page === 2 && <Result result={result} question={question} onReset={onReset} styles={styles}/>
            }
        </div>
    );
};

export default Main;