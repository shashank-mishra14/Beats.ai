import React from 'react'
import Link from 'next/link'
type Props = {}

const BeatsSection = (props: Props) => {
  return (
    <section className="w-full h-full bg-black">
    <header className="fixed right-0 left-0 top-0 py-4 px-4  z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
      <Link
          href="/"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Back to home
          </span>
        </Link>
      </aside>
      </header>

    </section>
  )
}

export default BeatsSection