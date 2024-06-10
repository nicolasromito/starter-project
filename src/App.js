
import logo from './logo.svg';
import './App.css';
import Toolbar from './Toolbar.js';
const App = () => {
  const container = document.querySelector('.scroll-container');
  const content = document.querySelector('.scroll-content');

  // let isDown = false;
  // let startX;
  // let scrollLeft;

  // container.addEventListener('mousedown', (e) => {
  //   isDown = true;
  //   startX = e.pageX - container.offsetLeft;
  //   scrollLeft = container.scrollLeft;
  //   content.style.cursor = 'grabbing';
  // });

  // container.addEventListener('mouseleave', () => {
  //   isDown = false;
  //   content.style.cursor = 'grab';
  // });

  // container.addEventListener('mouseup', () => {
  //   isDown = false;
  //   content.style.cursor = 'grab';
  // });

  // container.addEventListener('mousemove', (e) => {
  //   if (!isDown) return;
  //   e.preventDefault();
  //   const x = e.pageX - container.offsetLeft;
  //   const walk = (x - startX) * 3; // Ajusta la velocidad del scroll
  //   container.scrollLeft = scrollLeft - walk;
  // });
  return (
    <div class="container">
       <Toolbar/>
      <div class="top">
        <div class="content">
          <div style={{width: '600px' }}>
            <h2>Hi, I'm Nicolás</h2>
            <h1 style={{color: 'rgb(38, 145, 202)'}}>Software Developer</h1>
            <h2>That loves creating web apps.</h2>
          </div>
          <div style={{width: '100px'}}>Imagen</div> 
        </div>
      </div>
     <img className="wave wave-color" src="https://previews.dropbox.com/p/thumb/ACSg1rTdEedva8DtJJH4vWE8m1wGuiT_oJZL0a6aRKkqS-QjSQMYzzW4Bf8oxx2F3DbditCKHpz1ybXVSfOL1hPn43Y-DDjqssSco5HUEclmvgUtR1L0hrA_FD0q8PU5DzcTucA8ZexMatAv227IIbIl22SjW9kgC4I_RNNYsVDIGIZkdb967l-SoYb81KwJF2TFQuMqkdbVSOuPfmngClIi4fhHJ3w4c1dbOmYCcOjYKFon2UaEcM4QAYKe9KuNrHXeKL4tcYd1iSovvwYfJcNDfuUg3Hl37Ch8tIu8iKd9_tSRgJwFKkSAusTA2-xWBzYmiWx4RLeEFGUUIGTD1bu7UceTjNkUuCr-1B8F6d6kTw/p.png"></img>
        <div class="middle">
        <div class="content-middle">
          <div style={{width: '600px'}}>Imagen</div> 
          <div style={{width: '600px' }}>
            <h1>Sobre mi<span style={{color: 'rgb(38, 145, 202)'}}>.</span></h1>
            <h3 >Soy un loquito que le gusta programar <br /> y que ama los videojuegos</h3>
            <button className="button clic button-green">Mas sobre mi</button>
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="content-middle">
          <div style={{width: '600px' }}>
            <h1>Mis proyectos<span style={{color: 'rgba(255, 0, 0, 0.8)'}}>.</span></h1>
            <h3 >Apps que hice cuando <br /> estaba al pedo</h3>
            <button className="button clic button-blue">Todos mis proyectos</button>
          </div>
          <div style={{width: '600px'}}>Imagen</div> 
        </div>
        {/*<div className="scroll-container">
          <div className="scroll-content">
            <img src="imagen1.jpg" alt="Imagen 1"></img>
            <img src="imagen2.jpg" alt="Imagen 2"></img>
            <img src="imagen3.jpg" alt="Imagen 3"></img>
          </div>
        </div>*/}
      </div>
      <img className="wave wave-color2" src="https://previews.dropbox.com/p/thumb/ACRtpTseJE2UnDbl37Y7ThvSXNhVpJKjnTE5AINEsa0cBrHgQybVJWfs955ENKOtdivP5TZob1L5LQYM1HpITqNlqNDLVTRHXnLyAzK4S4nyOa5sOhkH_O0REyDNqPAMd8KKAtbIyw62ds5yGvLiKPkEJ-CAuZiQHht_eExMIdHUmtvIXfWsKOaKHNvQNMTbHm295vnDHLJ41tI6hp0Vy4beGLC5tND4MeGtvYv4SO9VHS_2zeB48_ypdPla1HkT9IA2BqwR2HtkbU_eETg0gur-DCST1KpIH-HaFkjUSR2GMWDP196bCFTvwd233wlqfFH-kW1H5wAExz4yICHfIB3iyn-N2ZC7EvVvJB6osvy4Ww/p.png"></img>
      <div class="botton">
        <div class="content-botton">
          <img className="face" src="https://previews.dropbox.com/p/thumb/ACTCwXg_jkDhOSIGlWBtO8eCt17GpNTgd5cFmwU2o5U6zsDqpNOZci9iYdu8roGcZLNc_9VZyNcRfHVEB5krC9M2oij6hOmhTXTLSTNSgra1y9tEreFckhbz7P7Xd-p0AhPgSD4e89T9_GA-0gYCQvrxRl5SMeOXir28mItwdDnGy-qHHD-9LeNAPr4Pk2gIWIUShy9wEnrbYZyXBHyPPnFuW_xl8GRKtwZSr9luJi1_5PdV3RK6jdxHGG3JDJP1ul0491-ysQXwbakRlFJ4JQB5-l2Tb-CJWchy87-4darC6cmEYLHap4XcmtbOtBHNncFRBPcbCqhMzNpBoSPyle5G/p.png"></img>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/nicolas-romito/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="contact-logo" src="https://static.vecteezy.com/system/resources/previews/023/986/970/large_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"></img>
          </a>
          <a
            className="App-link"
            href="https://github.com/nicolasromito"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="contact-logo" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"></img>
          </a>
          <a
            className="wsp"
            href="https://api.whatsapp.com/send?phone=5491125678989&text=Hola%20Nicolas"
            target="_blank"
          >
            <img className="contact-logo" src="https://i.pinimg.com/564x/6c/78/49/6c784972cbf5806215d46fbda8b0c46a.jpg"></img>
          </a>
          <img className="face" src="https://previews.dropbox.com/p/thumb/ACTzNzCTK2VNFrLKQ-OfNZ5ykK0PDPcx4HNa7aybXhgmxvjfnVZxLjYSsmULAJy_s93Knzq3VLixFrH6QHRFlRi07S0XouEuIWe_T0qJAhDqMUngOO80iWwkSJXEA-eJshwZlHjKh68GCyonuLEv-dVZylPM3GW_vqYCb0jIjJauQTcST7QTe0unZYDk8QvwVjRLCo0fb9S6IkCxQz0wk1rcznsHERA0gDUhZNCqKX-d-vmfgVPXnw3_6veqkheuYPykHWbiuV8e2HsOX1WZpIFjNzNhqM-EyLXsQcwkEMg2jIgWC7gNew1OUG-MdSMRTaUKp46Mnn2capzjc5LJclQP/p.png"></img>
        </div>
      </div>
    </div>
  );
};

export default App;
