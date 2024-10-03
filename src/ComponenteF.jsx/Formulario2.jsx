import { useState } from 'react';

function IngessoJogo() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Digite o esporte de seu interrese:
         <input type="text" 
         name="Esporte" 
         value={inputs.Esporte || ""} 
         onChange={handleChange}
      />
      </label>
      <br/>
      <label>Data do jogo:
        <input 
          type="date" 
          name="data" 
          value={inputs.data || ""} 
          onChange={handleChange}
        />
        </label>
        <br/>
        <label>Horario do jogo:
        <input 
          type="time" 
          name="Horario" 
          value={inputs.Horario || ""} 
          onChange={handleChange}
        />
        </label>
        <br/>
        <input type="submit" />
    </form>
  )
}

export default IngessoJogo