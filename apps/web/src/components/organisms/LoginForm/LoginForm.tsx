import { useState, type FormEvent } from 'react'
import { ArrowRight, ClipboardList } from 'lucide-react'
import { Button } from '../../atoms/Button'
import { Checkbox } from '../../atoms/Checkbox'
import { TextLink } from '../../atoms/TextLink'
import { FormField } from '../../molecules/FormField'
import { Divider } from '../../molecules/Divider'
import { SocialLoginButton } from '../../molecules/SocialLoginButton'
import { AuthHeading } from '../../molecules/AuthHeading'
import githubIcon from '../../../assets/login/github-icon.svg'
import googleIcon from '../../../assets/login/google-icon.svg'

export type LoginFormValues = {
  identifier: string
  password: string
  rememberMe: boolean
}

export type LoginFormProps = {
  onSubmit?: (values: LoginFormValues) => void
  signUpHref?: string
  forgotPasswordHref?: string
}

export function LoginForm({ onSubmit, signUpHref = '#', forgotPasswordHref = '#' }: LoginFormProps) {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit?.({ identifier, password, rememberMe })
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col items-center gap-8 px-8">
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex w-full max-w-[318px] flex-col items-start gap-10">
          <AuthHeading title="Login" subtitle="Boas-vindas! Faça seu login." />
          <div className="flex w-full flex-col items-start gap-4">
            <FormField
              label="Email ou usuário"
              placeholder="usuario123"
              value={identifier}
              onChange={(event) => setIdentifier(event.target.value)}
              autoComplete="username"
            />
            <div className="flex w-full flex-col items-start gap-2">
              <FormField
                label="Senha"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
              />
              <div className="flex w-full items-center justify-between">
                <Checkbox
                  label="Lembrar-me"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                <TextLink href={forgotPasswordHref}>Esqueci a senha</TextLink>
              </div>
            </div>
          </div>
        </div>

        <Button type="submit" className="max-w-[318px]" icon={<ArrowRight size={20} />}>
          Login
        </Button>

        <div className="flex w-full max-w-[318px] flex-col items-center gap-2">
          <Divider>ou entre com outras contas</Divider>
          <div className="flex items-center justify-center gap-6">
            <SocialLoginButton icon={githubIcon} label="Github" />
            <SocialLoginButton icon={googleIcon} label="Gmail" />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-2">
        <p className="w-full text-center text-[15px] text-offwhite">Ainda não tem conta?</p>
        <TextLink href={signUpHref} variant="accent" icon={<ClipboardList size={24} />}>
          Crie seu cadastro!
        </TextLink>
      </div>
    </form>
  )
}
