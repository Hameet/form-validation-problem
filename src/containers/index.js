import { connect } from 'react-redux'

import Form from '../Components/Form'

import { getEmail } from '../state/selectors'

const mapStateToProps = state => {
  return {
    rates: getEmail(state)
  }
}

export default connect(mapStateToProps)(Form)
