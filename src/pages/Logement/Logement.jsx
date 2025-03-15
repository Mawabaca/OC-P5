import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import Carousel from '../../components/Carousel/Carousel';
import Tags from '../../components/Tags/Tags';
import Rating from '../../components/Rating/Rating';
import Host from '../../components/Host/Host';
import Dropdown from '../../components/Dropdown/Dropdown';
import './Logement.scss';

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  const dropdownData = [
    {
      id: 'description',
      title: 'Description',
      text: logement.description, 
    },
    {
      id: 'equipments',
      title: 'Équipements',
      text: logement.equipments,   
    },
  ];

  return (
    <main className="logement-page-container">
      <Carousel slides={logement.pictures} />
      <div className="top-section">
        <div className="left-info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>
        <div className="right-info">
          <Host name={logement.host.name} picture={logement.host.picture} />
          <Rating rating={logement.rating} />
        </div>
      </div>
      <Dropdown data={dropdownData} />
    </main>
  );
}
