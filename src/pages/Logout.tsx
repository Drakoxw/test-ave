import { FormLogin } from '@/components'

export default function Login() {
  return (
    <section className="center-all flex-col">
      <h1 className="title-h1">Registrate</h1>

      <div className="w-full max-w-md p-4 bg-gray-300 mt-8 rounded-md">
        <FormLogin />
      </div>
    </section>
  )
}
