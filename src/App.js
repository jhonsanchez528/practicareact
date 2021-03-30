import React, { useState } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';


function App() {
  const [data, setData] = useState("");
  const calcBtns = [];
  [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "%"].forEach(item => {
    calcBtns.push(
      <button onClick={e => {
        setData(data + e.target.value)
      }}
        value={item}
        key={item}>
        {item}
      </button>
    )
  })
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="App">
          <center><h1 className="titulo">Calculadora</h1></center>
          <div className="tarjeta">
            <div className="sub">{data}</div>
            <TextField className="caja" fullWidth value={data} disabled label="Ingreso de numeros" id="standard-basic" variant="standard" />
            <button className="limpiar" onClick={() => setData(data.substr(0, data.length - 1))} >
              ←
        </button>
            <button className="ac" onClick={() => setData("")} >
              AC
        </button>
            <div className="botones">
              {calcBtns}
            </div>
            <button className="suma" onClick={e => setData(data + e.target.value)} value="+" >
              +
        </button>
            <button className="resta" onClick={e => setData(data + e.target.value)} value="-" >
              -
        </button>
            <button className="multiplicar" onClick={e => setData(data + e.target.value)} value="*" >
              X
        </button>
            <button className="dividir" onClick={e => setData(data + e.target.value)} value="/" >
              /
        </button>

            <button onClick={e => {
              try {
                setData(
                  String(eval(data)).length > 3 &&
                    String(eval(data)).includes(".")
                    ? String(eval + (data)).toFixed(4)
                    : String(eval(data))
                );
              } catch (err) {
                <div  value="aaaaaaaaa" ></div>
              }
            }}
              value="="
            >
              =
        </button>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );

}

export default App;
