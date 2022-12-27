// add changing the logo to their profile picture later on 

import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";


function Sidebar() {
  return (
    <section className="flex flex-col items-center gap-8 bg-cyan-700 p-5 pt-8 h-screen w-72">
      <h1 className="text-cyan-50 text-3xl font-bold">Power Transfer</h1>
      <div className="bg-cyan-50 w-36 h-36 p-6 rounded-full hover:animate-spin">
        <Logo className="fill-cyan-700"/>
      </div>
      
      <nav className="flex flex-col items-stretch text-cyan-50 text-2xl font-bold w-full">
        <Link className="transition hover:scale-105 hover:bg-cyan-600 text-center p-2" href="/">Home</Link>
        <Link className="transition hover:scale-105 hover:bg-cyan-600 text-center p-2" href="/transfer">Transfer</Link>
        <Link className="transition hover:scale-105 hover:bg-cyan-600 text-center p-2" href="/history">History</Link>
        <Link className="transition hover:scale-105 hover:bg-cyan-600 text-center p-2" href="/vehicles">Vehicles</Link>
      </nav>

      <Link className="transition hover:shadow-lg hover:shadow-cyan-900 hover:-translate-y-1 hover:bg-cyan-800 hover:text-cyan-50 mt-auto mb-5 bg-cyan-50 rounded-full p-5 pt-3 pb-3 text-cyan-700 text-2xl font-bold" href="/signin">Sign In</Link> {/* must change this to sign out if the user is signed in */}
    </section>
  )
}



export default Sidebar;