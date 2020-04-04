import React from 'react';
import { NewsList } from '../components/NewsList';
import { Banner } from '../components/Banner';
import banner from '../images/banner.jpg';

export const Home = () => {
    return (
        <div>
            <Banner imageUrl={banner} />
            <NewsList />
        </div>
    )
}
