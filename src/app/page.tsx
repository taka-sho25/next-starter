import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href='/form'> Form Page </Link>
        </li>
        <li>
          <Link href='/api'> Api Page </Link>
        </li>
      </ul>
    </div>
  )
}
