import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/homepage.css';

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <div className="home-page">
      <Slider {...settings}>
        {/* Les images dans le slider */}
        <div>
          <img src="/img/Emoji.jpg" alt="Emoji Souriant" />
        </div>
        {/* Vous pouvez ajouter plus de slides ici avec d'autres images */}
      </Slider>
      {/* Contenu supplémentaire sous le slider */}
      <div className="homepage-content">
        <h1>Bienvenue sur FeelsIA</h1>
        <p>
          Découvrez une large gamme d'émotions et trouvez celle qui vous correspond le mieux aujourd'hui. 
          Parcourez notre sélection d'emojis et laissez-vous guider par vos sentiments.
        </p>
        {/* Vous pouvez ajouter plus de contenu ici : texte, images, boutons, etc. */}
      </div>
    </div>
  );
}

export default HomePage;
