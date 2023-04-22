import Image from 'next/image'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import ComponentsContainer from '@/components/extcomponents'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ComponentsContainer/>


    </div>
  )
}
