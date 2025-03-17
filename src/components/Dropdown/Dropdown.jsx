import { useState } from 'react';
import './Dropdown.scss';
import arrow from '../../assets/arrow.webp';

function Dropdown({ title, content, isList = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-item">
      <div className="dropdown-title" onClick={handleToggle}>
        <h3>{title}</h3>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
          <img src={arrow} alt="arrow icon" />
        </span>
      </div>

      <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
        <div className="dropdown-text">
          {isList && Array.isArray(content) ? (
            content.map((elem, idx) => <p key={idx}>{elem}</p>)
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
