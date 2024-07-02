import React, { useEffect, useState } from 'react';
import './index.css';

const NumberGuessingGame = () => {
  const [number, setNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [chances, setChances] = useState(5);
  const [change, setChange] = useState(false);

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
      setMessage('🎉 You Won !!');
      setChances(0); // Game over after correct guess
    } else {
      const remainingChances = chances - 1;
      setChances(remainingChances);
      if (remainingChances === 0) {
        setMessage(`🤕 You lost !!`);
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
        <h2 style={{margin: 0, fontSize: 48}}>Guess<br/> the<br/> number</h2>
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
             {change === false && <h2>Guess a number<br/> between 1-10</h2>}
             {change === true && <h2>{chances} chances Left</h2>}
             {change === false && (
              <button className='small-box' onClick={() => setChange(true)}> Start the Game
              </button>
             )}
        
              {change === true && 


              (
                <><input
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Please enter your number"
              />   
                <button className='start-game-cta' onClick={() => {handleGuess()}}> Guess
                </button></>
              )}
              
             {message && <p>{message}</p>}
                    
             </div>

    </div>
  </div>
  </div>
  );
};

export default NumberGuessingGame;