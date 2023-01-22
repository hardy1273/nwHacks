import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '@/containers/Layout';
import "bootstrap/dist/css/bootstrap.css";
//import { Link } from 'react-router-dom'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div style={{height: "100vh"}}>
      
    <Layout/>
    </div>
  )
}
