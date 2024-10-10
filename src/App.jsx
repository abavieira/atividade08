import React, { useState } from 'react';
import './App.css';

function CalculadoraIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const calcularIMC = () => {
    if (peso && altura) {
      const imcCalculado = (peso / (altura * altura)).toFixed(2);  
      setIMC(imcCalculado);
      
      if (imcCalculado < 18.5) {
        setMensagem('Abaixo do peso');
      } else if (imcCalculado < 24.9) {
        setMensagem('Peso normal');
      } else if (imcCalculado < 29.9) {
        setMensagem('Sobrepeso');
      } else {
        setMensagem('Obesidade');
      }
    }
  };

  return (
    <div className="calculadora-imc">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Peso (kg): </label>
        <input 
          type="number" 
          value={peso} 
          placeholder="Exemplo: 65kg" 
          onChange={(e) => setPeso(e.target.value)} 
        />
      </div>
      <div>
        <label>Altura (m): </label>
        <input 
          type="number" 
          value={altura} 
          step="0.01" 
          placeholder="Exemplo: 1.67" 
          onChange={(e) => setAltura(e.target.value)} 
        />
      </div>
      <button onClick={calcularIMC}>Calcular</button>

      {imc && (
        <div>
          <h2>Seu IMC: {imc}</h2>
          <h3>{mensagem}</h3>
        </div>
      )}
    </div>
  );
}

export default CalculadoraIMC;
