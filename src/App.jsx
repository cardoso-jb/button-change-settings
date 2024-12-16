import React, {useState} from 'react';
import Button from './components/button/button'
import Text from './components/text/text'
import './App.css'

function App() {
  const [text, setText] = useState('clique abaixo e veja a mágica');
  const [color, setColor] = useState('black') 

  const handleButtonClick = (buttonText) => {
        setText((prev) => prev.toUpperCase());
        setColor('red');
        alert(`Esse Botão faz a ${buttonText} `); 
  };

  return (
    <>
      <Text text={text} color={color} />

      <Button onClick={() => handleButtonClick('Mágica')} /> 
    </>
  )
}

export default App
