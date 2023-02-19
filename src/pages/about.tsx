import Head from 'next/head'
import Link from 'next/link'

import { NextPageWithLayout } from './_app'

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>About Next.js with Tailwindcss</title>
      </Head>
      <h1 className='text-4xl text-orange-300 font-bold'>About this project</h1>
      <p className='text-xl py-4'>
        Next.js with Tailwindcss includes all you need for starting a new
        project
      </p>
      <p className='text-xl py-4'>
        Go to{' '}
        <Link
          href='/'
          className='text-amber-500 font-semibold hover:text-amber-400 hover:underline'
        >
          Home Page
        </Link>
      </p>
    </>
  )
}

export default AboutPage
