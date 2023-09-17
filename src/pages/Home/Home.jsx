import { Container } from "pages/Catalog/Catalog.styled";
import { AboutUsTitle, AdvantageTitle, BigTitle, ContactTitle, List, ListItemsTitle, ServicesTitle, Span, Text } from "./Home.styled";

const Home = () => { 
  return (
    <Container>
      <BigTitle>Welcome to AutoRental</BigTitle>
      <AboutUsTitle>About Us</AboutUsTitle>
      <Text>We are a professional company specializing in car rentals. Our goal is to provide our customers with reliable and convenient means of transportation for various purposes. Whether you need a car for travel, work, or personal use, we are always ready to meet your needs.</Text>
      <ServicesTitle>Our Services</ServicesTitle>
      <List>
        <li>
          <ListItemsTitle>Car Rentals</ListItemsTitle>
          <Text>We offer a wide selection of cars of various classes and brands so that you can find the one that suits your needs. You can rent a car by the hour, day, or even for an extended period, depending on your requirements.</Text>
        </li>
        <li>
          <ListItemsTitle>Travel Cars</ListItemsTitle>
          <Text>If you're planning a vacation or an important trip, we offer travel cars that will provide you with comfort and freedom of movement. You can enjoy every moment of your journey.</Text>
        </li>
        <li>
          <ListItemsTitle>Corporate Services</ListItemsTitle>
          <Text>Our company also specializes in providing corporate car rental services. We work with many companies to ensure their employees have reliable and comfortable transportation for business trips.</Text>
        </li>
      </List>
      <AdvantageTitle>Our Advantage</AdvantageTitle>
      <Text>Our company stands out from the rest thanks to the following advantages:</Text>
      <List>
        <li>
          <Text><Span>Quality and Reliability:</Span> All our cars undergo regular technical inspections and maintenance to ensure they are always in perfect condition.</Text>
        </li>
        <li>
          <Text><Span>Transparent Pricing:</Span> We offer honest and competitive prices without hidden fees.</Text>
        </li>
        <li>
          <Text><Span>Convenience and Accessibility:</Span> You can easily book a car through our website or contact our managers for further assistance.</Text>
        </li>
      </List>
      <ContactTitle>Contact Us</ContactTitle>
      <Text>We are ready to answer all your questions and provide additional information. Please <a href={`tel:+380730000000`}>contact us</a>.
        Thank you for visiting our homepage. We are delighted to be your partners in the car rental business and guarantee you the best service.
      </Text>
    </Container>
  );
};

export default Home;