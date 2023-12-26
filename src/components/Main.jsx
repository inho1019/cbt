import React, { useState } from 'react';
import nca from './NCA';
import nca2 from './NCA2';
import ncp200 from './NCP200';
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
        const data = sel === '0' ? nca : sel === '1' ? nca2 : sel === '2' ? ncp200 : ''; 
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
    }
    
    const onReset = () => {
        setPage(0)
        setResult(0)
        setSel('-1')
        setWrongData([])
        setRan(false)
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
            <h1>{page >= 0 && '네이버클라우드플랫폼 CBT'}</h1>
            <h1>{sel === '0' && 'NCA 문제은행'}{sel === '1' && 'NCA 예상기출'}{sel === '2' && 'NCP200 문제은행'}</h1>
            {
                page === -1 && <div>
                    <p>패스워드 입력 : <input type='password' value={pass} onChange={(e) => setPass(e.target.value)}/></p>
                    <button onClick={()=> onPass()}>확인</button>
                </div>
            }
            {
                page === 0 && <Start onQuestion={onQuestion} onPage={onPage} onSel={onSel} styles={styles} sel={sel} 
                            nca={nca.length} nca2={nca2.length} ncp200={ncp200.length} ran={ran} onRan={onRan}/>
            }
            {
                page === 1 && <Content question={question} datas={datas} onPage={onPage} onResult={onResult} styles={styles} ran={ran} onWrong={onWrong}/>
            }
            {
                page === 2 && <Result result={result} question={question} onReset={onReset} styles={styles} wrongNum={wrongData.length} onWrongStart={onWrongStart}/>
            }
        </div>
    );
};

export default Main;