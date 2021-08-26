import { useRouter } from 'next/router'

export default function Userid () {
  const router = useRouter()
  const { id } = router.query
  return <p>user: {id}</p>
}

