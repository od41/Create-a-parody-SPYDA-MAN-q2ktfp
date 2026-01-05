import './App.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Jokes from '@/components/Jokes'
import Bio from '@/components/Bio'
import Contact from '@/components/Contact'

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <Jokes />
      <Bio />
      <Contact />
    </div>
  )
}

export default App
