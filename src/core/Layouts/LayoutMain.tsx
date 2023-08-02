import NavBar from '@/components/app/Navbar'

type Props = {
  children: JSX.Element
}

export default function LayoutMain({ children }: Props): JSX.Element {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-700 text-white ">
      <header className='w-full'>
        <NavBar />
      </header>
      <main className='w-full p-8 flex flex-col gap-8'>{children}</main>
    </div>
  )
}
