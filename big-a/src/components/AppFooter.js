import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://github.com/joshhklee/big-a-gui" target="_blank" rel="noopener noreferrer">
          Big A
        </a>
        <span className="ms-1">&copy; 2024 Big A Incorporated.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by Beer, Coffee, and Celcius</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
