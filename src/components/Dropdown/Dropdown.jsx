import { useState } from 'react';
import './Dropdown.scss';
import arrow from '../../assets/arrow.webp';

function Dropdown({ data }) {
  const [activeDropdownIndex, setActiveDropdownIndex] = useState([]);

  const handleToggle = (index) => {
    if (activeDropdownIndex.includes(index)) {
      setActiveDropdownIndex(activeDropdownIndex.filter((i) => i !== index));
    } else {
      setActiveDropdownIndex([...activeDropdownIndex, index]);
    }
  };

  return (
    <div className="dropdown-list">
      {data.map((item, index) => (
        <div key={item.id || index} className="dropdown-item">
          <div className="dropdown-title" onClick={() => handleToggle(index)}>
            <h3>{item.title}</h3>
            <span className={`dropdown-arrow ${activeDropdownIndex.includes(index) ? 'open' : ''}`}>
              <img src={arrow} alt="arrow icon" />
            </span>
          </div>
          <div className={`dropdown-content ${activeDropdownIndex.includes(index) ? 'open' : ''}`}>
            <div className="dropdown-text">
              {Array.isArray(item.text) ? (
                item.text.map((elem, idx) => <p key={idx}>{elem}</p>)
              ) : (
                <p>{item.text}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
