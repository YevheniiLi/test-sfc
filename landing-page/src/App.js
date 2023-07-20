import React, {useState} from 'react';
import "./App.css";

function App() {

  const [showRecursosDropdown, setShowRecursosDropdown] = useState(false);
  const [showCastellanoDropdown, setShowCastellanoDropdown] = useState(false);

    const toogleRecursosDropdown = () => {
      setShowRecursosDropdown(!showRecursosDropdown)
    };

    const toogleCastellanoDropdown = () => {
      setShowCastellanoDropdown(!showCastellanoDropdown)
    }

  return (
    <div className="landing-section">
  <div className="header-landing">
    <div className="logo-section">
      <img src="/images/logo.svg" alt="Logo" width="150" />
    </div>
    <ul className="landing-group">
          <li>Sobre nosotros</li>
          <li>Mapa</li>
          <li className="dropdown" onMouseEnter={toogleRecursosDropdown} onMouseLeave={toogleRecursosDropdown}>
            <span className="dropdown-toggle">Recursos</span>
            <ul className={`dropdown-menu ${showRecursosDropdown ? 'show' : ''}`}>
              <li><a href="https://www.apple.com">Apple</a></li>
              <li><a href="https://www.google.com">Google</a></li>
              <li><a href="https://www.amazon.com">Amazon</a></li>
            </ul>
          </li>
          <li>Blog</li>
          <li className="dropdown" onMouseEnter={toogleCastellanoDropdown} onMouseLeave={toogleCastellanoDropdown}>
            <span className="dropdown-toggle">Castellano</span>
            <ul className={`dropdown-menu ${showCastellanoDropdown ? 'show' : ''}`}>
              <li>Español</li>
              <li>Inglés</li>
              <li>Francés</li>
            </ul>
          </li>
        </ul>
  </div>
  <div className="main-landing-section">
    <div className="landing-text-container">
      <p className="landing-title">Ponemos tu sentido del olfato al servicio de la ciencia ciudadana</p>
      <span className="landing-text">Mide el olor y genera datos científicos para mejorar la calidad de vida de tu comunidad. ¡Descárgate la App y siente el poder de la ciencia colaborativa!</span>
      <div className="landing-links">        
        <img src="/images/googleplay.png" alt="Google Play" width="150" />
        <img src="/images/applestore.png" alt="Apple Store" width="150" height="90"  />
      </div>
    </div>
    <div className="mobile-section" style={{ position: 'relative' }}>
      <img src="/images/items.png" alt="items" width="200"  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/>
      <img src="/images/iphone.png" alt="iphone" width="250" style={{borderRadius: '40px'}} />
    </div>
  </div>
</div>

  
  );
}

export default App;
