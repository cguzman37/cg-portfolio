import React,{useState} from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Home from './Home';


function Navbar(){
  const [selected, setSelected] = useState(null);

  const items = [
    { label: 'About Me', component: <AboutMe /> },
    { label: 'Portfolio', component: <Portfolio /> },
    { label: 'Contact', component: <Contact /> },
    { label: 'Resume', component: <Resume /> }
  ];

  const handleClick = (index) => {
    setSelected(index);
  };

  const renderComponent = () => {
    if (selected === null) {
      return <Home />;
    } else {
      const selectedComponent = items[selected].component;
      return selectedComponent;
    }
  };
    return (
      <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home">Cynthia Guzman</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          {items.map((item, index) => (
                <li className={`nav-item ${selected === index ? 'active' : ''}`} key={index}>
                  <a className="nav-link" href="#" onClick={() => handleClick(index)}>{item.label}</a>
                </li>
          ))}
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/cguzman37">Github</a>
            </li>
          </ul>
        </div>
      </div>
     
    </nav>

     <div className="container-fluid">
     {renderComponent()}
   </div>
   </div>

);
}
export default Navbar;