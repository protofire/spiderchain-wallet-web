import { IS_OFFICIAL_HOST } from '@/config/constants'

const useIsOfficialHost = (): boolean => {
  return IS_OFFICIAL_HOST
}

export default useIsOfficialHost
