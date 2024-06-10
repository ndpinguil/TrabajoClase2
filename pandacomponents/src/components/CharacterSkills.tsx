// src/components/CharacterSkills.tsx
import React from 'react';
import { Tag } from 'antd';

const skills = [
    'Kung Fu',
    'Speed',
    'Strength',
    'Agility',
    'Wisdom',
];

const CharacterSkills: React.FC = () => {
    return (
        <div>
        {skills.map((skill) => (
            <Tag color="blue" key={skill}>
            {skill}
            </Tag>
        ))}
        </div>
    );
};

export default CharacterSkills;
