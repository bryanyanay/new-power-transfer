// add changing the logo to their profile picture later on 

import Link from "next/link";
import Logo from "./logo";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";


function Sidebar() {
  const { data: session, status } = useSession();

  console.log(status);

  return (
    <section className="flex-none selection:bg-cyan-50 selection:text-cyan-700 flex flex-col items-center gap-8 bg-cyan-700 p-5 pt-8 h-screen w-72">
      <h1 className="text-cyan-50 text-3xl font-bold">Power Transfer</h1>
      
        {session ? 
          (<Image className="rounded-full shadow-inner hover:animate-spin" width={150} height={150} src={session.user.image} alt="User profile image" />) :
          (
          <div className="bg-cyan-50 w-36 h-36 p-6 rounded-full hover:animate-spin">
            <Logo className="fill-cyan-700"/>
          </div>
          )
        }
      
      <nav className="flex flex-col items-stretch text-cyan-50 text-2xl font-bold w-full">
        <Link className="transition hover:scale-105 hover:bg-cyan-600 text-center p-2" href="/">Home</Link>
        <Link className="transition hover:scale-105 hover:bg-cyan-600 text-center p-2" href="/transfer">Transfer</Link>
        <Link className="transition hover:scale-105 hover:bg-cyan-600 text-center p-2" href="/history">History</Link>
        <Link className="transition hover:scale-105 hover:bg-cyan-600 text-center p-2" href="/vehicles">Vehicles</Link>
      </nav>

      <button onClick={!session ? signIn : () => signOut({ callbackUrl: "/" })} className="transition hover:shadow-lg hover:shadow-cyan-900 hover:-translate-y-1 hover:bg-cyan-800 hover:text-cyan-50 mt-auto mb-5 bg-cyan-50 rounded-full p-5 pt-3 pb-3 text-cyan-700 text-2xl font-bold">Sign {!session ? "In" : "Out"} </button> 
            
    </section>
  )
}

export default Sidebar;