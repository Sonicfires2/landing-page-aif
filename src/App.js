import './App.css';
import AboutUs from './components/AboutUs/aboutUs';
import AboutUsDescription from './components/AboutUsDescription/aboutUsDescription';
import Headers from './components/Headers/headers';
import Intro from './components/Intro/intro';
import Leader from './components/WhatWeDo/activity';
import HousingApplication from './components/HouseApplication/houseApplication';
import LeadershipContainer from './components/Leadership/leadership';
import Value from './components/Value/value';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Alum from './components/Alum/alum';
import CurrentNews from './components/CurrentNews/currentNews';

function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Intro></Intro>
      <AboutUs></AboutUs>
      <AboutUsDescription></AboutUsDescription>
      <Leader></Leader>
      <Value></Value>
      <HousingApplication></HousingApplication>
      <LeadershipContainer></LeadershipContainer>
      <CurrentNews></CurrentNews>
      <Alum></Alum>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
