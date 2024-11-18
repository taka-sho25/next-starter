import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href='/form'> Form </Link>
        </li>
        <li>
          <Link href='/api'> Api </Link>
        </li>
      </ul>
    </div>
  )
}
