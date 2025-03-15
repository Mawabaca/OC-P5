import { useLocation } from 'react-router-dom';
import './Banner.scss';
import bannerImage from '../../assets/Banner-image.webp';
import bannerAboutImage from '../../assets/Banner-about-image.webp';

function Banner() {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const image = isHomePage ? bannerImage : bannerAboutImage;
  const alt = isHomePage ? 'Bannière Accueil' : 'Bannière FAQ';
  const title = isHomePage ? 'Chez vous, partout et ailleurs' : null;

  return (
    <div className={`banner-container ${isHomePage ? 'home' : ''}`}>
      <img src={image} alt={alt} />
      {title && <h1>{title}</h1>}
    </div>
  );
}

export default Banner;
