import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { CarImage, Container, Tags, List, ListItem, PriceText, Title, TitleContainer, TagsItem, LearnMoreButton, HeartImage, ImageContainer, LoadMoreButton } from "./Catalog.styled";
import fetchCars from "API/fetchCar";
import { FilterByBrand } from "components/Filter/FilterByBrand";
import { MileageRangeFilter } from "components/Filter/FilterByMileage";
import { FilterByPrice } from "components/Filter/FilterByPrice";
import { CarInfoModal } from "components/CarInfoModal/CarInfoModal";
import heartImage from '../../images/heart.svg'

export const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [mileageRange, setMileageRange] = useState({ minMileage: '', maxMileage: '' });
  const [visibleCars, setVisibleCars] = useState(8);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);

    fetchCars()
      .then((data) => {
        setCars(data);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }, []);

  useEffect(() => {
    const savedBrand = localStorage.getItem('selectedBrand');
    if (savedBrand) {
      setSelectedBrand(savedBrand);
    }
    const savedPrice = localStorage.getItem('selectedPrice');
    if (savedPrice) {
      setSelectedPrice(savedPrice);
    }
    const savedMileageRange = localStorage.getItem('selectedMileageRange');
    if (savedMileageRange) {
      setMileageRange(JSON.parse(savedMileageRange));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedMileageRange', JSON.stringify(mileageRange));
  }, [mileageRange]);

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    localStorage.setItem('selectedBrand', brand);
  };

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
    localStorage.setItem('selectedPrice', price);
  };

  const handleMileageChange = (mileageRange) => {
    setMileageRange(mileageRange);
    localStorage.setItem('selectedMileageRange', JSON.stringify(mileageRange));
  };

  const handleDeleteFilters = () => {
    localStorage.removeItem('selectedBrand');
    localStorage.removeItem('selectedPrice');
    localStorage.removeItem('selectedMileageRange')
    setSelectedBrand('');
    setSelectedPrice('');
    setMileageRange({ minMileage: '', maxMileage: '' });
  };

  const handleLearnMoreClick = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const toggleFavorite = (car) => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    const isFavorite = storedFavorites.some((favoriteCar) => favoriteCar.id === car.id);

    if (isFavorite) {
      const updatedFavorites = storedFavorites.filter((favoriteCar) => favoriteCar.id !== car.id);  
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      updatedFavorites.push(car)
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    }
  };

  const filteredCars = cars.filter((car) => {
    if (selectedBrand && car.make !== selectedBrand) {
      return false;
    }
    if (selectedPrice) {
      if (car.rentalPrice && parseFloat(car.rentalPrice.slice(1)) > parseFloat(selectedPrice)) {
        return false;
      }
    }
    if (mileageRange.minMileage && car.mileage <= parseFloat(mileageRange.minMileage)) {
      return false;
    }
    if (mileageRange.maxMileage && car.mileage >= parseFloat(mileageRange.maxMileage)) {
      return false;
    }
    return true;
  });

  const handleLoadMore = () => {
    const totalCars = filteredCars.length;
    const newVisibleCars = visibleCars + 8;

    if (newVisibleCars >= totalCars) {
      setVisibleCars(totalCars);
      setShowLoadMore(false);
    } else {
      setVisibleCars(newVisibleCars);
    }
  };

  useEffect(() => {
    if (visibleCars >= filteredCars.length) {
      setShowLoadMore(false);
    } else {
      setShowLoadMore(true);
    }
  }, [visibleCars, filteredCars]);

  return (
    <Container>
      <div style={{display: 'flex', gap: '18px', marginBottom: '50px', justifyContent: 'center', alignItems: 'center'}}>
        <FilterByBrand cars={cars} onBrandChange={handleBrandChange} selectedBrand={selectedBrand} />
        <FilterByPrice onPriceChange={handlePriceChange} selectedPrice={selectedPrice} />
        <MileageRangeFilter onMileageChange={handleMileageChange} mileageRange={mileageRange} />
        <LearnMoreButton onClick={handleDeleteFilters} style={{width: '136px', height: '48px'}}>Reset</LearnMoreButton>
      </div>
      <List>
        {filteredCars.slice(0, visibleCars).map((car) => (
          <ListItem key={car.id}>
            <div>
              <ImageContainer>
                <CarImage src={car.img} alt={car.make} />
                <HeartImage onClick={() => toggleFavorite(car)}>
                  <ReactSVG src={heartImage} style={{
                    width: 18, height: 18,
                    fill: favorites.some((favoriteCar) => favoriteCar.id === car.id) ? '#3470FF' : 'none', 
                    stroke: favorites.some((favoriteCar) => favoriteCar.id === car.id) ? '#3470FF' : '#FFFFFFCC',
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
      <div style={{display:'flex', justifyContent: 'center'}}>
        {showLoadMore && (<LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>)}
      </div>
      <CarInfoModal isOpen={isModalOpen} onClose={handleCloseModal} car={selectedCar} />
    </Container>
  );
};
