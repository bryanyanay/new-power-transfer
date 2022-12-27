// add changing the logo to their profile picture later on 

import Image from "next/image";
import Link from "next/link";


function Sidebar() {
  return (
    <nav>
      <Image src="/power-transfer-logo.svg" width="100" height="100" alt="Power transfer logo"/>
      <div>
        <Link href="/">Home</Link>
        <Link href="/transfer">Transfer</Link>
        <Link href="/history">History</Link>
        <Link href="/vehicles">Vehicles</Link>
      </div>
    </nav>
  )
}

export default Sidebar;