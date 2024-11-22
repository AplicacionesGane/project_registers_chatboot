import { UserIcon, LockIcon } from '../components/icons'
import { Input, Button, Label } from '../components/ui'
import { useAuth } from '../auth/AuthProvider'
import { useState, FormEvent } from 'react'
import { Toaster } from 'sonner'
import axios from 'axios'

import { LOGIN_URL, APP_NAME } from '../utils/contanst'

function LoginPage () {
  const { setIsAuthenticated } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault()

    axios.post(`${LOGIN_URL}/login`, { username, password, app: APP_NAME })
      .then(res => {
        if (res.status === 200) {
          setIsAuthenticated(true)
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <section className="w-screen h-screen flex bg-gradient-to-b from-blue-200 to-blue-300 relative">
      <section className='w-full grid place-content-center '>
        <form className='min-w-96 flex flex-col gap-8 bg-gray-200 py-10 px-16 rounded-lg shadow-lg' onSubmit={handleSubmit}>
          <figure className='flex items-center justify-center'>
            <img src="/gane.webp" alt="logo de gane" className='w-[220px] ' />
          </figure>
          <article className='flex flex-col gap-1 text-md lg:text-lg 2xl:text-2xl'>
            <Label>Usuario: </Label>
            <div className='flex items-center gap-2 w-full justify-around px-2'>
              <UserIcon />
              <Input name='username' type='text' placeholder='CP1118342523' required
                autoComplete='username' value={username}
                onChange={(ev) => { setUsername(ev.target.value) }} />
            </div>
          </article>

          <article className='flex flex-col gap-1 text-md lg:text-lg 2xl:text-2xl'>
            <Label>Contraseña:</Label>
            <div className='flex items-center gap-2 w-full justify-around px-2'>
              <LockIcon />
              <Input name='contraseña' type='password' placeholder='***********' required
                autoComplete='contraseña' value={password}
                onChange={(ev) => { setPassword(ev.target.value) }} />
            </div>
          </article>

          <Button>Iniciar Sesión</Button>

        </form >
      </section>

      <Toaster position='top-right' duration={4000} richColors />

    </section >
  )
}

export default LoginPage
