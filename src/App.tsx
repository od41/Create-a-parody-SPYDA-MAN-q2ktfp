import './App.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Jokes from '@/components/Jokes'
import Bio from '@/components/Bio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-white flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Jokes />
        <Bio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
