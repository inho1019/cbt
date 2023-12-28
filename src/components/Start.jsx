import React, { useState } from 'react';

import bono from '../image/bono.jpg'
import lupy from '../image/biglp.jpg'

const Start = (props) => {
    const {onQuestion,onPage,onSel,styles,sel,nca,nca2,ncp200,ncp202,ran,onRan,mode,max} = props

    const [num,setNum] = useState(1)

    const onStart = () => {
        onQuestion(num)
        onPage(1)
    }

    const onSelect = (e) => {
        onSel(e.target.value)
        setNum(1)
    }

    return (
        <div className={styles.box}>
            <h2>시험 유형을 선택하세요</h2>
            <select onChange={(e) => onSelect(e)} className={styles.sel}>
                <option value='-1'>선택</option>
                <option value='0'>NCA 문제은행({nca})</option>
                <option value='1'>NCA 예상기출({nca2})</option>
                <option value='2'>NCP200 문제은행({ncp200})</option>
                <option value='3'>NCP202 문제은행({ncp202})</option>
            </select>
            {
                sel !== '-1' && <div>
                    <h2>문제수를 선택해주세요(1 - {max})</h2>
                        <h3>{num}문제</h3>
                        <input type='range' min={1} max={max} style={{width:'300px'}} value={num} onChange={(e) => setNum(e.target.value)}/>
                        <p style={{fontWeight:'bold'}}>보기랜덤 <input type='checkbox' value={ran} onChange={() => onRan()}/></p>
                    <button onClick={() => onStart()} className={styles.allBut}>시작</button>
                </div>
            }
            <br/>
            <br/>
            <img src={mode ? lupy : bono} className={styles.bono} alt='bono'/>
        </div>
    );
};

export default Start;