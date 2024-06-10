import React from 'react';
import MovieTable from '../components/MovieTable';

const HomePage: React.FC = () => {
    return (
    <div>
        <h1>Kung Fu Panda Movies</h1>
        <MovieTable />
    </div>
    );
};

export default HomePage;