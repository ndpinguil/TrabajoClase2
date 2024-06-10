// src/components/MovieTable.tsx
import React from 'react';
import { Table } from 'antd';

const movies = [
    { key: '1', title: 'Kung Fu Panda', year: 2008, director: 'Mark Osborne' },
    { key: '2', title: 'Kung Fu Panda 2', year: 2011, director: 'Jennifer Yuh Nelson' },
    { key: '3', title: 'Kung Fu Panda 3', year: 2016, director: 'Jennifer Yuh Nelson' },
];

const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Year', dataIndex: 'year', key: 'year' },
    { title: 'Director', dataIndex: 'director', key: 'director' },
];

const MovieTable: React.FC = () => {
    return <Table dataSource={movies} columns={columns} />;
};

export default MovieTable;
