import './About.scss';
import Banner from '../../components/Banner/Banner';
import Dropdown from '../../components/Dropdown/Dropdown';
import aboutData from '../../data/about.json';

function About() {
  return (
    <main className="page-container about-page">
      <Banner />
      <Dropdown data={aboutData} />
    </main>
  );
}
export default About;
