import ErrorMessage from '@/components/tx/ErrorMessage'
import { Typography } from '@mui/material'
import ExternalLink from '@/components/common/ExternalLink'
import { useHasFeature } from '@/hooks/useChains'
import { FEATURES } from '@/utils/chains'

export const SunsetWarning = () => {
  const isFeatureEnabled = useHasFeature(FEATURES.SUNSET_BANNER)

  if (!isFeatureEnabled) return null

  return (
    <ErrorMessage level="warning" title="Botanix is now available on the official Safe app at app.safe.global!">
      <Typography display="inline" mr={1}>
        Created safes are already available there; to transfer local data (address book, settings, and variables), use
        the Export/Import functionality found on the Settings &gt; Data page{' '}
        <ExternalLink href="https://safe.botanixlabs.com/settings/data">here</ExternalLink>.
      </Typography>
      <Typography display="inline">
        Please complete your unfinished transactions here until the November 1, 2025 since they won&apos;t be migrated
        to Safe Global version.
      </Typography>
    </ErrorMessage>
  )
}
