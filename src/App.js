import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  // const text = 'Hello this is me'
  // const num = 12345
  const [text, num] = ['Hello this is me', 12345]

  // Ubah data array of string ini menjadi array of JSX Element
  const arr = ["Afif Fasya", "Yoko", "2H4B6D"]
  const arrObj = [{
    name: "John",
    job: "Gamer"
  },
  {
    name: "Cena",
    job: "Bing Chilling"
  }]

  useEffect(() => {
    console.log("dijalanin 1x aja")
  }, [])

  useEffect(() => {
    console.log("I detect changes in state 'Counter' / 'Counter2' now: " + counter + '/' + counter2)
  }, [counter, counter2])

  const handleClickAdd = () => {
    if (counter === 10) {
      setCounter(0)
      return;
    }
    setCounter(prev => prev + 1)
    return;
  }

  const handleClickAdd2 = () => {
    if (counter2 === 10) {
      setCounter2(0)
      return;
    }
    setCounter2(prev => prev + 1)
    return;
  }

  return (
    <>
      Counter: {counter}
      <button onClick={handleClickAdd}>Tambah</button>
      Counter2: {counter2}
      <button onClick={handleClickAdd2}>Tambah 2</button>
      <br />
      <p>{text}</p>
      {num}
      {arr.map((data, index) => {
        return <p key={index}>{data + index}</p>
      })}
      {arrObj.map((data, index) => {
        return <p key={index}>{data.name} - {data.job}</p>
      })}
    </>
  );
}

export default App;
