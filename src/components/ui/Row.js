/* eslint-disable no-unused-expressions */
import React from 'react'
import { Flex } from '@rebass/grid'

export default ({ spacing = 2, ...props}) => {
    <Flex {...props} flexWrap="wrap" mx={-1 * spacing} />
}