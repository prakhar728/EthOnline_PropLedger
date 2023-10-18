// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../theme'
import { AccountAbstractionProvider } from '../../store/authContext'
// import ContractProvider from '../../store/contractContext'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (  
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <AccountAbstractionProvider>
          {/* <ContractProvider> */}
          {children}
          {/* </ContractProvider> */}
        </AccountAbstractionProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}