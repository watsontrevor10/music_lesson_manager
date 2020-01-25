import React from 'react';
import { Link, } from 'react-router-dom';
import { Heading, Anchor, } from 'grommet';

const NoMatch = () => (
  <Heading as="h3" textAlign="center">
    Page not found return
    <Link to="/"> Home</Link>
  </Heading>
)

export default NoMatch;