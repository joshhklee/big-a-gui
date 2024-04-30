import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilBook,
  cilCalculator,
  cilChartPie,
  cilCheck,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Playbook',
  },
  {
    component: CNavItem,
    name: 'Playbook',
    to: '/playbook',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'About Us',
  },
  {
    component: CNavItem,
    name: 'Goals',
    to: '/AboutUs/Goals',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Team Members',
    to: '/AboutUs/TeamMembers',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Field Validation',
  },
  {
    component: CNavItem,
    name: 'Field Validation',
    to: '/fieldvalidation',
    icon: <CIcon icon={cilCheck} customClassName="nav-icon" />,
  },
]

export default _nav
