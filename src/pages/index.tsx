import Head from 'next/head'
import Link from 'next/link'

import { NextPageWithLayout } from './_app'

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <h1 className='text-4xl text-orange-300 font-bold'>
        Welcome to{' '}
        <span className='font-extrabold italic text-amber-500'>Next.js</span>{' '}
        with{' '}
        <span className='font-extrabold italic text-amber-500'>
          Tailwindcss
        </span>
      </h1>
      <p className='text-xl py-4'>
        Go to{' '}
        <Link
          href='about'
          className='text-amber-500 font-semibold hover:text-amber-400 hover:underline'
        >
          About Page
        </Link>
      </p>
    </>
  )
}

export default HomePage
