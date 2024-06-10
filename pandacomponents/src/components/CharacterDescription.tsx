import React from 'react';

interface CharacterDescriptionProps {
    name: string;
    description: string;
}

const CharacterDescription: React.FC<CharacterDescriptionProps> = ({ name, description }) => {
    return (
        <div>
        <h2>{name}</h2>
        <p>{description}</p>
        </div>
    );
};

export default CharacterDescription;
