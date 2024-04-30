import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { Link } from 'react-router-dom'

const goToTeamMembers = () => {
    Link('/AboutUs/teammembers'); // Use the correct path
  };

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Links</CDropdownHeader>
        <CDropdownItem href="https://github.com/users/joshhklee/projects/1/views/1">
          <CIcon icon={cilTask} className="me-2" />
          Taskboard
          <CBadge color="danger" className="ms-2">
          This will take you to our Github Project Taskboard
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="https://github.com/joshhklee/big-a-gui/discussions/1">
          <CIcon icon={cilCommentSquare} className="me-2" />
          Comments
          <CBadge color="warning" className="ms-2">
            This will take you to our Github Discussions Space
          </CBadge>
        </CDropdownItem>
          <Link to="/AboutUs/teammembers" style={{ textDecoration: 'none', color: 'inherit' }}>
            <CDropdownItem>
            <CIcon icon={cilUser} className="me-2" />About Us
            </CDropdownItem>
          </Link>
        <CDropdownDivider />
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
