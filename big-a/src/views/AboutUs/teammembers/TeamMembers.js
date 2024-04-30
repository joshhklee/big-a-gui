import React from 'react';
import { CCard, CCardHeader, CCardBody } from '@coreui/react';

// TeamMember component to display individual team member information
const TeamMember = ({ name, role, description }) => (
  <div>
    <strong>{name}</strong> - <em>{role}</em>
    <p>{description}</p>
  </div>
);

const TeamMembers = () => {
  const team = [
    {
      name: 'Christian Campbell',
      role: 'Back End Developer',
      description: 'Oversees the back end functions to simplify the front end.',
    },
    {
      name: 'Josh Lee',
      role: 'Lead GUI Developer',
      description: 'Leads the development team, designs architecture, and ensures code quality.',
    },
    {
      name: 'Sam Schultz',
      role: 'GUI Designer',
      description: 'Responsible for the user experience design and testing user interfaces.',
    },
    {
      name: 'Grady Rowedder',
      role: 'Quality Assurance Engineer',
      description: 'Ensures the product meets quality standards through testing and validation.',
    },
    {
      name: 'Myles Bunde Green',
      role: 'Lead Developer',
      description: 'Over sees the project and makes sure everything is going to plan.',
    },
  ];

  return (
    <div>
      {team.map((member, index) => (
        <CCard key={index} className="mb-4">
          <CCardHeader>{member.name}</CCardHeader>
          <CCardBody>
            <TeamMember {...member} />
          </CCardBody>
        </CCard>
      ))}
    </div>
  );
};

export default TeamMembers;
