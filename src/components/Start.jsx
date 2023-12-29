import React, { useState } from 'react';

import bono from '../image/bono.jpg'
import lupy from '../image/biglp.jpg'

const Start = (props) => {
    const {onQuestion,onPage,onSel,styles,sel,nca,nca2,ncp200,ncp202,ncp207,ran,onRan,mode,max,onTimeUp,timeUp} = props

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
            <h3>시험 유형을 선택하세요</h3>
            <select onChange={(e) => onSelect(e)} className={styles.sel}>
                <option value='-1'>선택</option>
                <option value='0'>NCA 문제은행({nca})</option>
                <option value='1'>NCA 예상기출({nca2})</option>
                <option value='2'>NCP200 문제은행({ncp200})</option>
                <option value='3'>NCP202 문제은행({ncp202})</option>
                <option value='4'>NCP207 문제은행({ncp207})</option>
            </select>
            {
                sel !== '-1' && <div>
                    <h3>문제수를 선택해주세요(1 - {max})</h3>
                        <h4 style={{color:'gray'}}><button className={styles.pmBut} onClick={() => parseInt(num) < 11 ? setNum(1) :
                            setNum(parseInt(num) % 10 !== 0 ? parseInt(num)-(parseInt(num)%10) : parseInt(num)-10)}
                            disabled={num <= 1}>-10</button> 
                        {num}문제 <button className={styles.pmBut} onClick={() => parseInt(num) > (max-10) ? setNum(max) :
                            setNum(parseInt(num) % 10 !== 0 ? parseInt(num)+(10-(parseInt(num)%10)) : parseInt(num)+10)}
                            disabled={num >= max}>+10</button></h4>
                        <input type='range' min={1} max={max} style={{width:'300px'}} value={num} onChange={(e) => setNum(e.target.value)}/>
                        <div className={styles.selSection}>
                            <p style={{fontWeight:'bold'}}>보기랜덤 <input type='checkbox' value={ran} onChange={() => onRan()}/></p>
                            <p style={{fontWeight:'bold'}}>타임어택 <input type='checkbox' value={timeUp} onChange={() => onTimeUp()}/></p>
                        </div>
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