import api from '@/api/$api'
import mock from '@/api/$mock'
import aspidaClient from '@aspida/fetch'

// export const ApiClient =
//   process.env.NODE_ENV === 'development' ? mock(aspidaClient()) : api(aspidaClient())
export const ApiClient = mock(aspidaClient())
