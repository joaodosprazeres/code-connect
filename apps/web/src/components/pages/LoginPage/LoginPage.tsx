import { AuthLayout } from '../../templates/AuthLayout'
import { AuthBanner } from '../../organisms/AuthBanner'
import { LoginForm, type LoginFormValues } from '../../organisms/LoginForm'
import bannerImage from '../../../assets/login/banner.png'

export type LoginPageProps = {
  onSubmit?: (values: LoginFormValues) => void
}

export function LoginPage({ onSubmit }: LoginPageProps) {
  return (
    <AuthLayout
      banner={
        <AuthBanner
          image={bannerImage}
          imageAlt="Profissional de cibersegurança analisando telas de monitoramento"
        />
      }
    >
      <LoginForm onSubmit={onSubmit} signUpHref="/cadastro" forgotPasswordHref="/esqueci-senha" />
    </AuthLayout>
  )
}
