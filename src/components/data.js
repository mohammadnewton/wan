// src/data.js
import styling from "../assets/Rectangle.svg";
import online from "../assets/Rectangle2.svg";
import wardrobe from "../assets/Rectangle3.svg";
import image1 from "../assets/rect1.svg";
import image2 from "../assets/rect2.svg";
import image3 from "../assets/rect3.svg";
import image4 from "../assets/rect4.svg";
import image5 from "../assets/rect6.svg";
import mapMarker from "../assets/map-marker.svg";
import mailIcon from "../assets/envelope.svg";
import cardImage from '../assets/cardImage.png';
import transformationBg from '../assets/transformation-bg.png';
import serviceImage1 from '../assets/image1.png';
import serviceImage2 from '../assets/image2.jpg';
import serviceImage3 from '../assets/image3.png';
import servicesBg from '../assets/services-bg.png';
import heroImage from '../assets/hero.svg';
import backVideo from '../assets/back.mp4';

// Notice Video
export const videoData = {
  video: backVideo
};

// Homepage or HeroPage Data
export const heroData = {
  image: heroImage,
  title: "Hello I'm Winnie",
  description: "Welcome to WAN Styling I help Women find their Everyday Style",
  buttonText: "Explore Our Services"
};


// Transformation Page Homepage Data
export const transformationsData = {
  background: transformationBg,
  title: "Our Transformations",
  subtitle: "Welcome to Wan Styling I help women find their everyday style.",
};

// Services Data
export const servicesData = [
  {
    image: styling,
    title: "Styling Package",
    description: "Our stylists will help you find your signature style through personalized appointments."
  },
  {
    image: online,
    title: "Online Shopping Assist",
    description: "Our stylists will help you find your signature style through personalized appointments."
  },
  {
    image: wardrobe,
    title: "Custom Wardrobe",
    description: "Our stylists will help you find your signature style through personalized appointments."
  }
];

// Gallery Photos Data
export const galleryImages = [image1, image2, image3, image4, image5];

// Contact Form Data
export const contactFormData = {
  heading: "CONTACT US",
  subHeading: "Let's talk about Love to hear from you",
  formTitle: "Send us a Message",
  fields: [
    { label: "Full Name", type: "text", placeholder: "Adam Gelius", required: true },
    { label: "Email", type: "email", placeholder: "example@yourmail.com", required: true },
    { label: "Phone", type: "tel", placeholder: "+885 1254 5211 552", required: false },
    { label: "Message", type: "text", placeholder: "type your message here", required: true },
  ],
  buttonText: "Send",
};

// Contact Information Data
export const contactInfo = {
  location: {
    icon: mapMarker,
    title: "Our Location",
    detail: "401 Broadway, 24th Floor, Orchard Cloud View, London",
  },
  mail: {
    icon: mailIcon,
    title: "How Can We Help?",
    detail: "info@yourdomain.com \ncontact@yourdomain.com",
  },
};

// Card Data For Transformation Page
export const cardData = [
  {
    image: cardImage,
    title: "Njeeri's Transformation Journey",
    description: 'Lorem ipsum dolor sit amet consectetur. Porta justo quis ac congue egestas mattis porttitor donec. Fringilla convallis imperdiet cursus ac vivamus id. Quam nibh dapibus ultrices sed mi nec. Mollis orci elit tincidunt pellentesque quis sit accumsan.',
    link: 'Read More',
  },
  {
    image: cardImage,
    title: "Njeeri's Transformation Journey",
    description: 'Lorem ipsum dolor sit amet consectetur. Porta justo quis ac congue egestas mattis porttitor donec. Fringilla convallis imperdiet cursus ac vivamus id. Quam nibh dapibus ultrices sed mi nec. Mollis orci elit tincidunt pellentesque quis sit accumsan.',
    link: 'Read More',
  },
  {
    image: cardImage,
    title: "Njeeri's Transformation Journey",
    description: 'Lorem ipsum dolor sit amet consectetur. Porta justo quis ac congue egestas mattis porttitor donec. Fringilla convallis imperdiet cursus ac vivamus id. Quam nibh dapibus ultrices sed mi nec. Mollis orci elit tincidunt pellentesque quis sit accumsan.',
    link: 'Read More',
  },
  {
    image: cardImage,
    title: "Njeeri's Transformation Journey",
    description: 'Lorem ipsum dolor sit amet consectetur. Porta justo quis ac congue egestas mattis porttitor donec. Fringilla convallis imperdiet cursus ac vivamus id. Quam nibh dapibus ultrices sed mi nec. Mollis orci elit tincidunt pellentesque quis sit accumsan.',
    link: 'Read More',
  }
];

// Services Page Data
export const servicesPageData = [
  {
    image: serviceImage1,
    title: "Our Services",
    subtitle: "1. Make your customers happy by giving services.",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
    price: "Prices start from Kshs 10,000",
    buttonText: "Book Now"
  },
  {
    image: serviceImage2,
    subtitle: "2. Wardrobe Styling",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
    price: "Prices start from Kshs 10,000",
    buttonText: "Book Now"
  },
  {
    image: serviceImage3,
    subtitle: "3. Make your customers happy by giving services.",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
    price: "Prices start from Kshs 10,000",
    buttonText: "Book Now"
  }
];

// Service Page Home Data
export const servicesPageHomeData = {
  backgroundImage: servicesBg,
  title: "Our Services",
  description: "Welcome to Wan Styling. I help women find their everyday style."
};