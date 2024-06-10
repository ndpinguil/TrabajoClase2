import React from 'react';
import { List } from 'antd';

const quotes = [
    { character: 'Po', quote: 'There is no secret ingredient.' },
    { character: 'Shifu', quote: 'If you only do what you can do, you will never be more than you are now.' },
];

const CharacterQuotes: React.FC = () => {
    return (
        <List
        itemLayout="horizontal"
        dataSource={quotes}
        renderItem={(item) => (
            <List.Item>
            <List.Item.Meta title={item.character} description={item.quote} />
            </List.Item>
        )}
        />
    );
};

export default CharacterQuotes;