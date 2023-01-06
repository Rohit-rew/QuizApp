import Head from 'next/head'
import { Inter } from '@next/font/google'

// components imports
import WelcomeView from '../components/login/welcomeView'


export default function Home() {
  return (
    <>
      <Head>
        <title>Quiz frontend</title>
        <meta name="description" content="Quiz frontend deecription" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='background-gradient'>

      <WelcomeView/>


      
      </main>
    </>
  )
}
