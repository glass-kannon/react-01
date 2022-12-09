import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

// ###########################################################################
// Fireship.io Loading button on click

// const LoadingButton = (props) => {
//   return (
//     <button onClick={props.onClick} type="button">
//       { props.loading ? <div className='loader' /> : props.label }
//     </button>
//   );
// }

// ###########################################################################
// Fireship.io Lifecycle

// const CountdownTimer = ({ hr, min, sec }) => {
//   const [over, setOver] = useState(false);
//   const [paused, setPaused] = useState(true);
//   const [[h, m, s], setTime] = useState([hr, min, sec]);

//   const tick = () => {
//     if (over || paused) {
//       setTime(['XX', 'XX', 'XX'])
//       return;
//     }
//     if (h == 0 && m == 0 && s == 0) {
//       setOver(true);
//     } else if (m == 0 && s == 0) {
//       setTime([h - 1, 59, 59]);
//     } else if (s == 0) {
//       setTime([h - 1, m - 1, 59]);
//     } else {
//       setTime([h, m, s - 1]);
//     }
//   }

//   const handleReset = () => {
//     setTime([hr, min, sec]);
//     setPaused(true);
//     setOver(false);
//   }

//   // did not work
//   // const handlePause = () => {
//   //   setPaused(!paused);
//   // }
//   // const fmt = (val) => {
//   //   val.toString().padStart(2, '0');
//   // }

//   // does work
//   const handlePause = () => setPaused(!paused);

//   const fmt = (val) => val.toString().padStart(2, '0');

//   useEffect(() => {
//     let ticker = setInterval(() => tick(), 1000);
//     return () => {
//       clearInterval(ticker);
//     }
//   })

//   return (
//     <>
//       <h3 className='countdown'>
//         {`${fmt(h)}:${fmt(m)}:${fmt(s)}`}
//       </h3>
//       <button onClick={handlePause}>{paused ? 'Start' : 'Pause'}</button>
//       <button onClick={handleReset}>Reset</button>
//     </>
//   );
// }

function App() {
  // ###########################################################################
  // Fireship.io Lifecycle

  // return (
  //   <div>
  //     <CountdownTimer hr={0} min={0} sec={3} />
  //   </div>
  // );

  // ###########################################################################
  // Fireship.io State

  // const [count, setCount] = useState(0);
  // const [prevCount, setPrevCount] = useState(0);

  // const increment = () => {
  //   setCount((prev) => {
  //     setPrevCount(prev);
  //     setCount(count + 1);
  //   })
  // }

  // // const decrement = () => {
  // //   setCount((prev) => {
  // //     setPrevCount(prev);
  // //     setCount(count - 1);
  // //   })
  // // }

  // return (
  //   <>
  //     <h3>Current Count: {count}</h3>
  //     <h3>Previous Count: {prevCount}</h3>
  //     <button onClick={increment}>Increment</button>
  //     {/* <button onClick={decrement}>Decrement</button> */}
  //   </>
  // );

  // ###########################################################################
  // Fireship.io Events

  // const initialValues = {
  //   vorname: "",
  //   nachname: "",
  // };

  // const [values, setValues] = useState(initialValues);

  // const eventHandler = (e) => {
  //   const { name, value } = e.target;
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // };

  // return (
  //   <>
  //     <div>
  //       <input
  //         name='vorname'
  //         value={values.vorname}
  //         placeholder="Input here"
  //         onChange={eventHandler}
  //       />
  //     </div>
  //     {/* weird stuff happens */}
  //     <div>
  //       <input
  //         name='nachname'
  //         value={values.nachname}
  //         placeholder="More Input here"
  //         onChange={eventHandler}
  //       />
  //     </div>
  //   </>
  // );

  // ###########################################################################
  // Fireship.io Animals List

  // const data = [
  //   { id: 1, name: 'Fido 🐕' },
  //   { id: 2, name: 'Snowball 🐈' },
  //   { id: 3, name: 'Murph 🐈‍⬛' },
  //   { id: 4, name: 'Zelda 🐈' },
  //   { id: 5, name: 'Couple 🐈🐈‍⬛' },
  // ];

  // return (
  //   <>
  //     <ul>
  //       {data &&
  //         data.map(({ id, name }) => {
  //           return <li key={id}>{name}</li>
  //       })}
  //     </ul>
  //   </>
  // );

  // ###########################################################################
  // Fireship.io Loading button on click

  // const [isLoading, setIsLoading] = useState(false);

  // return (
  //   <LoadingButton
  //     label="Click me"
  //     loading={isLoading}
  //     onClick={() => setIsLoading(!isLoading)}
  //   />
  // );

  // ###########################################################################
  // Create React App default scaffold

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
