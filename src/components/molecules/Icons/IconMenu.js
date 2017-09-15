// @flow
import React from 'react'
import { injectGlobal } from 'styled-components'

import Icon from '../../atoms/Icon/Icon'

injectGlobal`
  .mdi-menu:before {
    content: "F35C";
  }
`

const IconMenu = props => (
  <Icon icon="menu" {...props} />
);

export default IconMenu
