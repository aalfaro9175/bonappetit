import React from 'react'
import PropTypes from 'prop-types'

const NotFound = props => (
  <p style={{ marginTop: '60px', marginLeft: '30px' }}>{props.message}</p>
)

NotFound.propTypes = {
  message: PropTypes.string.isRequired,
}

NotFound.defaultProps = {
  message: 'Página No Encontrada',
}

export default NotFound
