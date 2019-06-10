import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Form from '../components/form-components/Form'

const IndexPage = () => (
  <>
    <Form />
    <Link to='/page-2/'>Go to page 2</Link>
  </>
)

export default IndexPage
