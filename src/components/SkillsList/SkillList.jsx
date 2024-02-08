import React from 'react';
import './SkillList.scss'; // Import CSS file for styling

const SkillList = ({ skills }) => {
    const renderSkills = () => {
        return skills.map((skill, index) => (
            <div className="skillItem" key={index}>
                <img src={skill.image} alt={skill.name} />
                <p>{skill.name}</p>
            </div>
        ));
    };

    return (
        <div className="skillListContainer">
            <div className="skillList">
                {renderSkills()}
            </div>
        </div>
    );
};

export default SkillList;
