import { PropsWithChildren } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <section className="box">
      <Header />
      {children}
      <Footer />
    </section>
  )
}
