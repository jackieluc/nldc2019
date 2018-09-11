import React from 'react';
import styled from 'styled-components';
import Div from '../images/divider-right.svg';
import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import SponsorDetails from '../components/SponsorDetails';
import Footer from '../components/Footer';

const App = styled.div`
  text-align: center;
`;

const Divider = styled.div`
  background-image: url('${Div}');
  width: 300px;
  height: 34px;
  margin: 0 auto;
`;

const Home = () => (
  <App>
    <Hero />
    <EventDetails />
    <Divider />
    <SponsorDetails />
    <Footer />
  </App>
);

export default Home;
