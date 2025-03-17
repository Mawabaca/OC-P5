import './About.scss';
import Banner from '../../components/Banner/Banner';
import Dropdown from '../../components/Dropdown/Dropdown';
import aboutData from '../../data/about.json';

function About() {
  return (
    <main className="page-container about-page">
      <Banner />
      
      <div className="dropdown-list">
        {aboutData.map((item, index) => (
          <Dropdown 
            key={index} 
            title={item.title} 
            content={item.text} 
          />
        ))}
      </div>
    </main>
  );
}

export default About;
