/* eslint-disable no-unused-expressions */
import React from 'react'
import { Box } from '@rebass/grid'

export default ({  spacing = 2, ...props}) => {
    <Box {...props} px={spacing} flex="0 0 auto"/>
}