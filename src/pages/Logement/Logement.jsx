import { useParams, Navigate } from 'react-router-dom';
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

  if (!logement) {
    return <Navigate to="*" replace />;
  }

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

      <div className="dropdowns-wrapper">
        <div className="dropdown-container">
          <Dropdown title="Description" content={logement.description} />
        </div>
        <div className="dropdown-container">
          <Dropdown title="Équipements" content={logement.equipments} isList />
        </div>
      </div>
    </main>
  );
}
