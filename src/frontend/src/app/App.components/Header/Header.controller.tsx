import * as React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'

import { State } from 'reducers'

import { logout } from 'pages/Login/Login.actions'

import { Option } from '../Select/Select.view'
import { HeaderView } from './Header.view'


export const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.auth.user)
  const { pathname } = useLocation()

  let defaultCourse: Option = { name: 'Chalink Introduction', path: 'chainlinkIntroduction' }
  const [activeCourse] = useState(defaultCourse)

  function removeAuthUserCallback() {
    dispatch(logout());
    history.push('/');
  }

  return (<HeaderView
    user={user}
    removeAuthUserCallback={removeAuthUserCallback}
    pathname={pathname}
    activeCourse={activeCourse}
  />)
}
