import React, { useState } from 'react';

const Content = (props) => {
    const {question,datas,onPage,onResult,styles,ran} = props
    
    const [num,setNum] = useState(0)
    const [ok,setOk] = useState(false)
    const [dap,setDap] = useState(false)

    const onAnswer = (type) => {
        setOk(true)
        if(type) {
            setDap(true)
            onResult(1)
        } else {
            setDap(false)
        }
    }

    const onNext = () => {
        if(num+1 < question+1) {
            setNum(num+1)
            setOk(false)
            setDap(false)
        } else {
            onPage(2)
        }
    }
    
    return (
        <div className={styles.box}>
            <h2 style={{color:'yellowgreen'}}>{num+1} / {question+1}</h2>
            <div className={styles.questioin}>{datas[num].question}</div>
            <br/>
                {ran ? 
                    datas[num].answer.sort(() => 0.5 - Math.random()).map((ans,index) => 
                        <div key={index}>
                            <button onClick={() => onAnswer(ans.type)} disabled={ok} className={styles.ansBut}
                            style={{color: ok && ans.type && (dap ? 'blue' : 'red')}}>{ans.text}</button>
                        </div>
                    ) : 
                    datas[num].answer.map((ans,index) => 
                        <div key={index}>
                            <button onClick={() => onAnswer(ans.type)} disabled={ok} className={styles.ansBut}
                            style={{color: ok && ans.type && (dap ? 'blue' : 'red')}}>{ans.text}</button>
                        </div>
                    )
                }
            <br/>
            {
                ok && <div>
                    <h3 style={{color : dap ? 'blue' : 'red'}}>{dap ? '정답입니다' : '오답입니다'}</h3>
                    <button className={styles.allBut} onClick={()=>onNext()}>다음</button>
                </div>
            }
        </div>
    );
};

export default Content;