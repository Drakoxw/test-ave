type Props = {
  children: JSX.Element
}

export default function LayoutMain({ children }: Props): JSX.Element {
  return (
    <>
      <main className="h-screen w-screen overflow-hidden bg-zinc-900 text-white p-8 flex flex-col gap-8">
        {children}
      </main>
    </>
  )
}
