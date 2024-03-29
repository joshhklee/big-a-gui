import React, { useState } from 'react';
import axios from 'axios';
import { CCard, CCardHeader, CCardBody } from '@coreui/react'

function GenerateAndViewYaml() {
  const [createdObject, setCreatedObject] = useState(null);
  const [isPosting, setIsPosting] = useState(false);

  // const handleButtonClick = async () => {
  //   setIsPosting(true);

    // Replace with your actual endpoint and data structure
  //   const url = 'https://your-backend-endpoint.com/api/create';
  //   const postData = {
  //     // ... your data object to post
  //   };

  //   try {
  //     const response = await axios.post(url, postData);
  //     setCreatedObject(response.data);
  //   } catch (error) {
  //     console.error('Error posting data:', error);
  //     // Handle error appropriately
  //   }

  //   setIsPosting(false);
  // };

  return (
    <><CCard className="mb-4">
        <CCardHeader>Generate Playbook YAML</CCardHeader>
        <CCardBody>
          <p>
            Click button to generate default YAML for Ansible Playbook
          </p>
          <div className="bd-example">
            <dl className="row">
              <dt className="col-sm-3">
            <div>
        <button>
          {'Generate YAML'}
        </button>
    </div>
              </dt>
            </dl>
          </div>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>
          View Generated YAML
        </CCardHeader>
        <CCardBody>
        <p>
          Below is the generated YAML from the earlier post call
        </p>
        {createdObject && (
          <div>
            <h3>Created Object:</h3>
            <pre>{JSON.stringify(createdObject, null, 2)}</pre>
          </div>
      )}
        </CCardBody>
      </CCard>  
  </>
  );
}

export default GenerateAndViewYaml;
