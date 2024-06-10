// src/pages/ComponentsPage.tsx
import React from 'react';
import CharacterCard from '../components/CharacterCard';
import CharacterDescription from '../components/CharacterDescription';
import CharacterImage from '../components/CharacterImage';
import CharacterList from '../components/CharacterList';
import CharacterQuotes from '../components/CharacterQuotes';
import CharacterSkills from '../components/CharacterSkills';

const ComponentsPage: React.FC = () => {
    return (
        <div>
        <h1>Kung Fu Panda Characters</h1>
        <CharacterCard name="Po" description="The Dragon Warrior" image="path_to_image" />
        <CharacterDescription name="Tigress" description="Master Tigress is the strongest and boldest of the Furious Five." />
        <CharacterImage img="path_to_image" />
        <CharacterList />
        <CharacterQuotes />
        <CharacterSkills />
        </div>
    );
};

export default ComponentsPage;
