import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '@/containers/Layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div class='container-md flex justify-center'>
      
    <Layout/>
    </div>
  )
}
