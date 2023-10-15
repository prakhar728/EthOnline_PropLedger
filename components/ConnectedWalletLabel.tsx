// import Stack from '@mui/material/Stack'
// import Typography from '@mui/material/Typography'
// import IconButton from '@mui/material/IconButton'
// import Tooltip from '@mui/material/Tooltip'
// import { styled } from '@mui/material/styles'
// import { Theme } from '@mui/material'
// import LogoutIcon from '@mui/icons-material/LogoutRounded'

import AddressLabel from './AddressLabel';
import { useAccountAbstraction } from '../store/authContext';
import authLogo from 'src/assets/web3Auth_logo.png'
import { IconButton, Image, Stack, Text, Tooltip } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';

// TODO: rename this to connected owner?
function ConnectedWalletLabel() {
  const { isAuthenticated, ownerAddress, logoutWeb3Auth } = useAccountAbstraction()

  if (!isAuthenticated) {
    // TODO: ADD NO CONNECTED WALLET LABEL
    return null
  }

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <Image src={"./web3Auth_logo.png"} alt="connected Wallet logo" height={'50px'} />

        <Text variant="body2">
          {ownerAddress && <AddressLabel address={ownerAddress} showBlockExplorerLink />}
        </Text>
      </Stack>

      {/* logout button */}
      <Tooltip title="Logout">
        <IconButton aria-label='Logout' onClick={logoutWeb3Auth} icon={<FiLogOut />}>
        </IconButton>
      </Tooltip>
    </Stack>
  )
}

export default ConnectedWalletLabel




