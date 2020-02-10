import React from 'react'
import { Layer, } from 'grommet'

const Contact = (props) => {

  return (
    <>
      <Layer position='center' modal onClickOutside={props.close} onEsc={props.close}>

      </Layer>
    </>
  )
}

export default Contact