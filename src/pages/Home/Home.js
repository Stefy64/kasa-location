import React from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Cards/Card';
import '../Home/Home.css';

const Home = () => {
    return (
        <main className='home-container'>
            <Banner />
            <Card />
        </main>
    );
};

export default Home;