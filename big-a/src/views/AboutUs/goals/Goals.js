import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react';
import { DocsLink } from '../../../components';

// AboutUs component represents the "About Us" page
const AboutUs = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          About Us
        </CCardHeader>
        <CCardBody>
          <h2>Our Mission</h2>
          <p>
          Automate IT tasks, enabling organizations to streamline operations, reduce manual effort, and increase efficiency across infrastructure management.
          </p>

          <h2>Our History</h2>
          <p>
            Founded in 2024, our company has grown from a group project. Our journey is a testament to
            our dedication and hard work.
          </p>

          <h2>Our Team</h2>
          <CRow>
            <CCol xs={12} sm={6} md={4}>
              <h4>Josh Lee</h4>
              <p>CEO and Founder</p>
            </CCol>
            <CCol xs={12} sm={6} md={4}>
              <h4>Myles Bunde Green</h4>
              <p>Chief Technology Officer</p>
            </CCol>
            <CCol xs={12} sm={6} md={4}>
              <h4>Christian Campbell</h4>
              <p>The Man Him Self</p>
            </CCol>
          </CRow>

          <h2>Our Values</h2>
          <p>
            We believe in integrity, collaboration, and delivering value. These values guide everything we do, from
            product development to customer support.
          </p>
        </CCardBody>
      </CCard>
    </>
  );
};

export default AboutUs;
