import React, { useEffect, useState } from 'react';
import './index.css';

const NumberGuessingGame = () => {
  const [number, setNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [chances, setChances] = useState(5);
  const [change, setChange] = useState(false);
  const [lost, setLost] = useState(false);
  const [won, setWon] = useState(false);
  const [emoji, setEmoji] = useState<string>('');

  useEffect(() => {
    generateNumber();
  }, []);

  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    setNumber(randomNumber);
  };

  const handleGuess = () => {
    const guessedNumber = parseInt(guess);
    if (guessedNumber === number) {
      setEmoji(`🎉`)
      setMessage(` 
      You Won !!`);
      setChances(0);
      setWon(true);
    } else {
      const remainingChances = chances - 1;
      setChances(remainingChances);
      if (remainingChances === 0) {
        setChances(0);
        setLost(true);
        setEmoji(`🤕`)
        setMessage(`
        You lost !!`);
      } else {  
       
      }
    }
    setGuess('');
  };


  return (
    <div className='outer-div'>
    <div className="container flex flex-row">
      {/* sectionyellow */}
    <div className="section yellow">
        <h2 style={{margin: 0, fontSize: 48, fontWeight: 500}}>Guess<br/> the<br/> number</h2>
        {/*  */}
        <span className=""><span style={{fontWeight:700, paddingBottom:"10px"}}>Rules<br/></span>
            1.Start the Game <br/>
            2.Guess the number between 1-10  <br/>
            3.You would get 5 chances to guess it right  <br/>
            4.Lost ? Replay  <br/>
            5.Won ? Congrats !!  <br/>
        </span>
    </div>
    {/* section yellow end */}
    <div className="section white">
             <div className="inside-box">
             {change === false && <h2 style={{fontStyle: 'normal',color:"#000000",fontWeight: 400}}>Guess a number<br/> between 1-10</h2>}
             {change === true &&  chances!=0 && <h2 style={{marginBottom:50,fontWeight:400,fontSize:"17px",marginLeft:20}}>{chances} chances Left</h2>}
             {change === false && (
              <button className='small-box' onClick={() => setChange(true)}
              style={{height: 40, borderRadius:7, width:"120px",border:"white",marginBottom:40,fontWeight:400}}> Start the Game
              </button>
             )}
        
              {change === true && chances!=0 &&


              (
                <><input
                value={guess}
                style={{height: 40, borderRadius:4, width:"100%",border:"white",paddingLeft:19}}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Please enter your guess"
              />   
                <button className='start-game-cta' onClick={() => {handleGuess()}}> Guess
                </button></>
              )}

              
             {/* {message && <p className="message">{message}</p>} */}
             <div>
        {emoji && <div style={{paddingLeft:70,fontWeight:800,fontSize:40}}>{emoji}</div>}
        {message && <p style={{textAlign:"center",fontSize:20}}>{message}</p>}
      </div>

             {lost=== true &&
( 
              <button className='start-game-cta' onClick={() => {handleGuess();setMessage(""); setLost(false);setChances(5);setEmoji('')}}> Re-try
              </button>
            )}


            {won=== true &&
            ( 
              <button className='start-game-cta' onClick={() => {handleGuess();setMessage(""); setLost(false);setChances(5);setChange(false);setWon(false)}}> 
              Play again
              </button>
            )}
                    
             </div>

    </div>
  </div>
  </div>
  );
};

export default NumberGuessingGame;