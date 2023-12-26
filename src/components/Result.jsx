import React from 'react';
import fail from '../image/fail.png'
import success from '../image/success.png'
import gunchim from '../image/gunchim.jpg'
import bbang from '../image/bbang.jpg'

const Result = (props) => {
    const {result,question,onReset,styles,wrongNum,onWrongStart,mode} = props

    return (
        <div>
            <h2 style={{color: result/(question+1) * 100 >= 60 ? 'yellowgreen' : 'tomato'}}>
                {parseInt(result/(question+1) * 100)}점으로 {result/(question+1) * 100 >= 60 ? '합격!!!' : '불합격ㅋㅋ'}</h2>
            <img style={{borderRadius:'10px'}} src={result/(question+1) * 100 >= 60 ? (mode ? gunchim : success) : (mode ? bbang : fail )} width={300} alt="result"/>
            <br/>
            <button onClick={() => onReset()} className={styles.allBut}>다시하기</button>
            {wrongNum > 0 && <span>&nbsp;&nbsp;<button onClick={() => onWrongStart()} className={styles.allBut}>오답풀기</button></span>}
        </div>
    );
};

export default Result;