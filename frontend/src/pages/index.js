import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '@/containers/Layout';
import "bootstrap/dist/css/bootstrap.css";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div class='container-md mt-10 flex '>
      
    <Layout/>
    </div>
  )
}
