import React from 'react'
import { Box, Heading, Layer, } from 'grommet'

const Contact = (props) => {

  return (
    <>
      <Layer position='center' modal onClickOutside={props.close} onEsc={props.close}>
        <Box gap='small' pad='small'>
          <Heading level={3}>{props.first_name} {props.last_name} Test</Heading>
        </Box>
      </Layer>
    </>
  )
}

export default Contact