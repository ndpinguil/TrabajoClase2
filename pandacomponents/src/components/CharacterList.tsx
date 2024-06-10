import React from 'react';
import { List } from 'antd';

const characters = [
    'Po',
    'Tigress',
    'Shifu',
    'Viper',
    'Crane',
    'Mantis',
    'Monkey',
    ];

    const CharacterList: React.FC = () => {
    return (
        <List
        size="large"
        bordered
        dataSource={characters}
        renderItem={(item) => <List.Item>{item}</List.Item>}
        />
    );
};

export default CharacterList;