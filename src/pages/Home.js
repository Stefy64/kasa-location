import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Banner from '../components/Banner/Banner';
import Card from '../components/Cards/Card';
import Footer from '../components/Footer/Footer'
const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Card />
            <Footer />
            <h1>Home</h1>
        </div>
    );
};

export default Home;