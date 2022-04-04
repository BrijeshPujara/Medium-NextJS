import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <div>
      <div className='px-10 space-y-5'>
        <h1 className='text-9xl max-w-xl font-serif underline' >Stay curious.</h1>
        <h2>Discover stories, thinking, and expertise from writers on any topic.</h2>
      </div>
        <img className='hidden md:inline-flex h-32 lg:h-full' src="https://iconape.com/wp-content/png_logo_vector/medium-m.png" alt="" />
        </div>
    </div>
  )
}

export default Home
