// import Stack from '@mui/material/Stack'
// import Tooltip from '@mui/material/Tooltip'
// import IconButton from '@mui/material/IconButton'
// import OpenInNew from '@mui/icons-material/OpenInNew'
// import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined'

import { IconButton, Stack, Tooltip } from '@chakra-ui/react';
import useMemoizedAddressLabel from '../hooks/useMemoizedAddressLabel'
import { useAccountAbstraction } from '../store/authContext';
import { FiCopy, FiExternalLink } from 'react-icons/fi';

type AddressLabelProps = {
  address: string
  isTransactionAddress?: boolean
  showBlockExplorerLink?: boolean
  showCopyIntoClipboardButton?: boolean
}

const AddressLabel = ({
  address,
  isTransactionAddress,
  showBlockExplorerLink,
  showCopyIntoClipboardButton = true
}: AddressLabelProps) => {
  const { chain } = useAccountAbstraction()

  const addressLabel = useMemoizedAddressLabel(address)

  const blockExplorerLink = `${chain?.blockExplorerUrl}/${
    isTransactionAddress ? 'tx' : 'address'
  }/${address}`

  return (
    <Stack direction="row" alignItems="center" justifyContent="center" as="span">
      <Tooltip title={address}>
        <span>{addressLabel}</span>
      </Tooltip>

      {/* Button to copy into clipboard */}
      {showCopyIntoClipboardButton && (
        <Tooltip
          title={`Copy this ${
            isTransactionAddress ? 'transaction hash' : 'address'
          } into your clipboard`}
        >
          <IconButton
          aria-label='Copy File'
            onClick={() => navigator?.clipboard?.writeText?.(address)}
            size={'small'}
            color="inherit"
            icon={<FiCopy />}
          >
          </IconButton>
        </Tooltip>
      )}

      {/* Button to etherscan */}
      {showBlockExplorerLink && blockExplorerLink && (
        <Tooltip title={'View details on block explorer'}>
          <IconButton
            as="a"
            aria-label='Open Link'
            href={blockExplorerLink}
            target="_blank"
            rel="noopener"
            size={'small'}
            color="inherit"
            icon={<FiExternalLink />}
          />
        </Tooltip>
      )}
    </Stack>
  )
}

export default AddressLabel
