import React, { useState } from 'react';

const Content = (props) => {
    const {question,datas,onPage,onResult,styles,ran,onWrong} = props
    
    const [num,setNum] = useState(0)
    const [dup,setDup] = useState([])
    const [ok,setOk] = useState(false)
    const [dap,setDap] = useState(false)

    const onAnswer = (type,idx) => {
        if(datas[num].answer.filter(ans => ans.type).length > 1) {
            if(dup.length+1 >= datas[num].answer.filter(ans => ans.type).length) {
                const trueIndex = datas[num].answer.map((item, index) => item.type ? index : undefined).filter(index => index !== undefined);
                let arr = dup
                arr.push(idx)
                arr.sort((a, b) => a - b)
                setOk(true)
                if(trueIndex.every((value, index) => value === arr[index])){
                    setDap(true)
                    onResult(1)
                } else {
                    setDap(false)
                    onWrong(datas[num])
                }
            } else {
                setDup([...dup,idx])
            }
        } else {
            setOk(true)
            setDup([...dup,idx])
            if(type) {
                setDap(true)
                onResult(1)
            } else {
                setDap(false)
                onWrong(datas[num])
            }
        }
    }

    const onNext = () => {
        if(num+1 < question+1) {
            if(ran) {
                datas[num+1].answer.sort(() => 0.5 - Math.random())
            }
            setNum(num+1)
            setDup([])
            setOk(false)
            setDap(false)
        } else {
            onPage(2)
        }
    }

    const onDup = (idx) => {
        setDup(dup.filter(item => item !== idx))
    }
    
    return (
        <div className={styles.box}>
            <h2 style={{color:'yellowgreen'}}>{num+1} / {question+1}</h2>
            {datas[num].img !== undefined && <div><img src={datas[num].img} className={styles.dataImg} alt='questionImg'/></div>}
            <div className={styles.questioin}>{datas[num].question}
            {datas[num].answer.filter(ans => ans.type).length > 1 && 
            <div className={styles.anwdup}>
            [{dup.length}/{datas[num].answer.filter(ans => ans.type).length}]</div>}
            </div>
            <br/>
                {
                    datas[num].answer.map((ans,index) => 
                        <div key={index}>
                            <button onClick={() => dup.includes(index) ? onDup(index) : onAnswer(ans.type,index)} 
                            disabled={ok} className={styles.ansBut}
                            style={{color: ok && ans.type && (dap ? 'blue' : 'red'),
                            border: dup.includes(index) && '2px solid black'}}>{ans.text}</button>
                        </div>
                    )
                }
            <br/>
            {
                ok && <div className={styles.bottomDiv}>
                    <h3 style={{color : dap ? 'blue' : 'red',float:'left'}}>{dap ? '정답입니다' : '오답입니다'}</h3>
                    <button className={styles.allBut} style={{float:'right'}} onClick={()=>onNext()}>다음</button>
                </div>
            }
        </div>
    );
};

export default Content;