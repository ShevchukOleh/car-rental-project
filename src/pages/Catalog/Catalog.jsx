import React, { useEffect, useState } from "react";
import { CarImage, Container, Tags, List, ListItem, PriceText, Title, TitleContainer, TagsItem, LearnMoreButton, HeartImage, ImageContainer } from "./Catalog.styled";
import heartImage from '../../images/heart.svg'
import { ReactSVG } from "react-svg";
import { CarInfoModal } from "components/CarInfoModal/CarInfoModal";
import fetchCars from "API/fetchCar";

export const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    fetchCars()
      .then((data) => {
        setCars(data); 
      })
      .catch((error) => {
        console.error("Помилка:", error);
      });
  }, []);


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
        {cars.map((car) => (
          <ListItem key={car.id}>
            <div>
              <ImageContainer>
                <CarImage src={car.img} alt={car.make} />
                <HeartImage>
                  <ReactSVG src={heartImage} style={{width: 18, height: 18, fill: 'none', stroke: '#FFFFFFCC'}}/>
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
