import React, { useState } from 'react';
import axios from 'axios';
import { CForm, CFormInput, CButton, CFormLabel, CAlert } from '@coreui/react';

function FieldValidation() {
  const [formData, setFormData] = useState({
    host: '192.168.0.1', // Pre-initialized state for host
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("trying to submit..");
    try {
      const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/input_valid/host/',
        data: new URLSearchParams({ user_input: formData.host }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      if (response.status === 200 && !response.data.includes("error")) {
        alert('Form is valid!');
        console.log(response.data); // Log success message
        setErrors({}); // Clear errors on success
      } else {
        console.log(response.data); // Log error message
        setErrors({ host: response.data || "An error occurred" });
      }
    } catch (error) {
      console.error('Error posting data:', error);
      setErrors({ host: 'Network or server error' }); // Set a generic error if an unexpected error occurs
    }
  };

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="host">Host:</CFormLabel>
        <CFormInput type="text" id="host" name="host" value={formData.host} onChange={handleChange} isInvalid={Boolean(errors.host)} />
        {errors.host && <CAlert color="danger">{errors.host}</CAlert>}
      </div>
      <CButton type="submit" color="primary">Submit</CButton>
    </CForm>
  );
}

export default FieldValidation;
