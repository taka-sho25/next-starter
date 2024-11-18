import { Suspense } from 'react'

import { Loading } from '@/components/Base/Loading'
import { ApiPageData } from '@/features/apiPage/data'

export default function ApiPage() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <ApiPageData />
      </Suspense>
    </div>
  )
}
