import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="colum1">

      </div>
      <div className="colum2">
        <h4 className="My-Title">Desarrollador .NET</h4>
        <h1 className="My-Name">NICOLAS ROMITO</h1>
        <h5 className="My-Text">
            hola soy un texto de prueba <br />
            y solo estoy para testear
        </h5>
        <a href="https://api.whatsapp.com/send?phone=1125678989&text=Hola Nicolas" target="_blank">Enviar mensaje por WhatsApp</a>
        <a
            className="App-link"
            href="https://github.com/nicolasromito"
            target="_blank"
            rel="noopener noreferrer"
        >
            Mi git
        </a>
    </div>
</div>
  );
}

export default App;
