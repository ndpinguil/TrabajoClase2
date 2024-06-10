import React from 'react';
import { Card } from 'antd';

interface CharacterCardProps {
    name: string;
    description: string;
    image: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, description, image }) => {
    return (
        <Card hoverable cover={<img alt={name} src={image} />}>
        <Card.Meta title={name} description={description} />
        </Card>
    );
};

export default CharacterCard;