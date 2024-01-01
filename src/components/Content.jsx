import React, { useEffect, useState } from 'react';
import sleep1 from '../image/sleep1.jpg'
import sleep2 from '../image/sleep2.jpg'

const Content = (props) => {
    const {question,datas,onPage,onResult,styles,ran,onWrong,mode,timeUp,upCase} = props
    
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

    const [timer,setTimer] = useState(question)
    const [count, setCount] = useState(timeUp);
    const [end,setEnd] = useState(false)

    useEffect(() => {
      const id = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);

      if(count === -1) {
            if(timer === 0) {
                clearInterval(id);
                setEnd(true)
                setCount(0)
            } else {
                setTimer(timer-1)
                setCount(timeUp)
            }
      }
      return () => clearInterval(id);
    },[count, timer, timeUp])
    
    const onEnd = () => {
        setEnd(!end)
        setCount(timeUp)
    }

    return (
        <div className={styles.box}>
            <h2 style={{color:'yellowgreen',width:'150px',display:'inline-block',marginBottom:'6px'}}>{num+1} / {question+1}</h2>
            <h3 className={styles.timer}>{timer.toString().padStart(2, '0')}:{count.toString().padStart(2, '0')}</h3>
            {datas[num].img !== undefined && <div><img src={datas[num].img} className={styles.dataImg} alt='questionImg'/></div>}
            <div className={styles.questioin}>{upCase ? datas[num].question.toUpperCase() : datas[num].question}
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
                            border: dup.includes(index) && '2px solid black'}}>{upCase ? ans.text.toUpperCase() : ans.text}</button>
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
        { end && <div>
            <div className={styles.bg} onClick={() => onEnd()}></div>
            <img src={mode ? sleep2 : sleep1} alt='melong' className={styles.endImage}/>
        </div>}
        </div>
    );
};

export default Content;