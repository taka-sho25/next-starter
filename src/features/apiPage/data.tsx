import { ApiClient } from '@/lib/api'
import type React from 'react'

export const ApiPageData: React.FC = async () => {
  const data = await ApiClient.articles.$get()

  return (
    <div>
      {data.articles.map((article) => (
        <span key={article.id}>{JSON.stringify(article)}</span>
      ))}
    </div>
  )
}
