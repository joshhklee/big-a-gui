import React from 'react'
import { useState } from 'react';
import yaml from 'js-yaml';

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CFormTextarea,
  CRow,
  CForm,


} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilCloudDownload,
} from '@coreui/icons'




const Dashboard = () => {
  const [yamlContent, setYamlContent] = useState('');
  const [yamlError, setYamlError] = useState('');

  const validateYAML = (e) => {
    const input = e.target.value;
    setYamlContent(input);

    try {
      yaml.load(input);
      setYamlError('');
    } catch (err) {
      setYamlError(`Invalid YAML format: ${err.message}`);
    }
  }

  const insertText = (text) => {
    setYamlContent((prevContent) => prevContent + text);
  };

  const buttons = [
    {
      text: `webservers:
  hosts:
    foo.example.com:
    bar.example.com:
`,
      label: 'Web Servers',
    },
    {
      text: `dbservers:
  hosts:
    one.example.com:
    two.example.com:
    three.example.com:
`,
      label: 'DB Servers',
    },
  ];

  return (
    <> 
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Field Validation Testing
              </h4>
              <div className="small text-body-secondary">(using js-yaml)</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
            </CCol>
            <CCol sm={8} className="d-none d-md-block">
              {buttons.map((button, index) => (
                <CButton
                  key={index}
                  color="primary"
                  className="me-2 mb-2"
                  onClick={() => insertText(button.text)}
                >
                  {button.label}
                </CButton>
              ))}
            </CCol>
            <CCol sm={9} className="d-none d-md-block">
              <CForm>
                <CFormTextarea
                  id="textarea-input"
                  rows="9"
                  label=" "
                  placeholder={`webservers:
  hosts:
    foo.example.com:
    bar.example.com:
dbservers:
  hosts:
    one.example.com:
    two.example.com:
    three.example.com:`}
                  value={yamlContent}
                  onChange={validateYAML}
                  className="App-textarea"      
                ></CFormTextarea>
                {yamlError && <div className="App-error">{yamlError}</div>}
              </CForm>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter>
          <CRow
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            lg={{ cols: 4 }}
            xl={{ cols: 5 }}
            className="mb-2 text-center"
          >
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Dashboard
