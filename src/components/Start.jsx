import React, { useState } from 'react';

import bono from '../image/bono.png'

const Start = (props) => {
    const {onQuestion,onPage,onSel,styles,sel,nca,nca2} = props

    const [num,setNum] = useState(1)
    const [error,setError] = useState('')
    
    const onNum = (e) => {
        if(e.target.value > 0 && e.target.value <= 60) setNum(e.target.value)
        else if(e.target.value < 1) setNum(1)
        else if(e.target.value > 60) setNum(60)
    }

    const onStart = () => {
        if(sel === '-1') {
            setError('선택해주세요')
        } else {
            onQuestion(num)
            onPage(1)
        }
    }

    return (
        <div className={styles.box}>
            <h2>시험 유형을 선택하세요</h2>
            <select onChange={(e) => onSel(e.target.value)} className={styles.sel}>
                <option value='-1'>선택</option>
                <option value='0'>NCA 문제은행({nca})</option>
                <option value='1'>NCA 예상기출({nca2})</option>
            </select>
            {sel === '-1' && <h3 style={{color:'red'}}>{error}</h3>}
            <h2>문제수를 선택해주세요 (1~60)</h2>
                <h2>{num}</h2>
                <input type='range' min={1} max={60}  value={num} onChange={(e) => onNum(e)}/>
            <br/>
            <button onClick={() => onStart()} className={styles.allBut}>시작</button>
            <br/>
            <img src={bono} width={400} alt='bono'/>
        </div>
    );
};

export default Start;