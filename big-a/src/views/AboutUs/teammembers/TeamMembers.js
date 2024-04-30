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
      role: 'Software Developer',
      description: 'Oversees the back end functions to simplify the front end.',
    },
    {
      name: 'Josh Lee',
      role: 'Software Developer',
      description: 'Leads the development team, designs architecture, and ensures code quality.',
    },
    {
      name: 'Sam Schultz',
      role: 'Software Developer',
      description: 'Responsible for the user experience design and testing user interfaces.',
    },
    {
      name: 'Grady Rowedder',
      role: 'Software Developer',
      description: 'Gets the job done whether there is a need in the server or client-side of operations.',
    },
    {
      name: 'Myles Bunde Green',
      role: 'System Adminstrator, Project Manager',
      description: 'Oversees the project direction and ensures timelines are being met.',
    },
    {
      name: 'Kyle Hoffman',
      role: 'Field Validation',
      description: 'Field Validation.',
    },
  ];

  return (
    <div>
      {team.map((member, index) => (
        <CCard key={index} className="mb-4">
          <CCardBody>
            <TeamMember {...member} />
          </CCardBody>
        </CCard>
      ))}
    </div>
  );
};

export default TeamMembers;
