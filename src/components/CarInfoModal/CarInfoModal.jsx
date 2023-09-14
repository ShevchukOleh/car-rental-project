import { Tags, TagsItem, Title } from "pages/Catalog/Catalog.styled";
import { Backdrop, CarImage, CloseIcon, Conditions, ConditionsList, Description, InfoTitle, Modal, RentalButton } from "./CarInfoModal.styled";
import closeIcon from '../../images/x.svg'
import { useEffect } from "react";

export const CarInfoModal = ({ isOpen, onClose, car }) => {    
  useEffect(() => {
    const handleEscKey = (event) => {
      if (isOpen && event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Backdrop onClick={onClose}>
        <Modal>
            <CarImage src={car.img} alt={car.make} />
            <Title>{`${car.make} ${car.model}, ${car.year}`}</Title>
            <Tags>
            <TagsItem>{car.address.split(',')[1].trim()}</TagsItem>
            <TagsItem>{car.address.split(',')[2].trim()}</TagsItem>
            <TagsItem>{car.type}</TagsItem>
            <TagsItem>{car.make}</TagsItem>
            <TagsItem>{(car.mileage / 1000).toFixed(3)}</TagsItem>
            <TagsItem>{car.accessories[1]}</TagsItem>  
            </Tags>
            <Description>{car.description}</Description>
            <InfoTitle>Accessories and functionalities:</InfoTitle>
            <Tags>
                {car.accessories.map(accessories => (<TagsItem key={accessories}>{accessories}</TagsItem>))}
            </Tags>
            <InfoTitle>Rental Conditions: </InfoTitle>
            <ConditionsList>
                {car.rentalConditions.map(rentalConditions => (<Conditions key={rentalConditions}>{rentalConditions}</Conditions>))}
                <Conditions>Mileage: {car.mileage}</Conditions>
                <Conditions>Price: {car.rentalPrice}</Conditions>
            </ConditionsList>
            <CloseIcon onClick={onClose} src={closeIcon} alt="closeIcon" />
            <a href={`tel:+380730000000`}>
                <RentalButton type="button">Rental car</RentalButton>
            </a> 
        </Modal>
    </Backdrop>
  );
};
