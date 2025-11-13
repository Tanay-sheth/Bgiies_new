// src/app/providers.jsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

export function Providers({ children }) {
  return (
      <ChakraProvider value={defaultSystem}>
        {children}
      </ChakraProvider>
  )
}