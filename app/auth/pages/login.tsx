import { useRouter, BlitzPage } from "blitz"
import Layout from "app/core/layouts/AuthLayout"
import { LoginForm } from "app/auth/components/LoginForm"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <LoginForm
        onSuccess={(_user) => {
          const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/home"
          router.push(next)
        }}
      />
    </div>
  )
}

LoginPage.redirectAuthenticatedTo = "/home"
LoginPage.getLayout = (page) => <Layout title="Log In">{page}</Layout>

export default LoginPage
