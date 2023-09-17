import { CarImage } from "components/CarInfoModal/CarInfoModal.styled";
import { Container, HeartImage, ImageContainer, LearnMoreButton, List, ListItem, PriceText, Tags, TagsItem, Title, TitleContainer } from "pages/Catalog/Catalog.styled";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import heartImage from '../../images/heart.svg'
import { CarInfoModal } from "components/CarInfoModal/CarInfoModal";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (car) => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    const isFavorite = storedFavorites.some((favoriteCar) => favoriteCar.id === car.id);

    if (isFavorite) {
      const updatedFavorites = storedFavorites.filter((favoriteCar) => favoriteCar.id !== car.id);  
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } 
  };

  const handleLearnMoreClick = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
    setIsModalOpen(false);
  };
  

  return (
    <Container>
      <List>
        {favorites.map((car) => (
          <ListItem key={car.id}>
            <div>
              <ImageContainer>
                <CarImage src={car.img} alt={car.make} />
                <HeartImage onClick={() => toggleFavorite(car)}>
                  <ReactSVG src={heartImage} style={{
                    width: 18, height: 18,
                    fill: '#3470FF', 
                    stroke: '#3470FF',
                  }}/>
                </HeartImage>
              </ImageContainer>
              <TitleContainer>
                <Title>{`${car.make} ${car.model}, ${car.year}`}</Title>
                <PriceText>{car.rentalPrice}</PriceText>
              </TitleContainer>
              <Tags>
                <TagsItem>{car.address.split(',')[1].trim()}</TagsItem>
                <TagsItem>{car.address.split(',')[2].trim()}</TagsItem>
                <TagsItem>{car.type}</TagsItem>
                <TagsItem>{car.make}</TagsItem>
                <TagsItem>{(car.mileage / 1000).toFixed(3)}</TagsItem>
                <TagsItem>{car.accessories[1]}</TagsItem>  
              </Tags>
            </div>
            <LearnMoreButton type="button" onClick={() => handleLearnMoreClick(car)}>Learn more</LearnMoreButton>
          </ListItem>
        ))}
      </List>
      <CarInfoModal isOpen={isModalOpen} onClose={handleCloseModal} car={selectedCar} />
    </Container>
  );
};