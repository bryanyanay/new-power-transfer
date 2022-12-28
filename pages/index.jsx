import Link from "next/link";
import Head from "next/head";

import { useSession } from "next-auth/react";

function Home() {
	const {data: session, status} = useSession();

	return (
		<div className="text-black"> 
			<Head>
				<title>Power Transfer Home</title>
			</Head>
			<h1 className="text-6xl font-bold leading-relaxed">Easy power transfers between electric vehicles.</h1>
			<Link href="/signin" className="transition block mt-28 text-4xl font-thin underline decoration-1 underline-offset-8 hover:text-cyan-700">Get started now.</Link>

			{!session ? <p>there is no session!</p> : <p>there is a session! you are {session.user.name}, email {session.user.email}</p>}
		</div>
	);
}

export default Home;

// do i need to use unstable_getServerSession first in getServerSideProps like shown here?: https://next-auth.js.org/getting-started/client#sessionprovider
// or maybe this is only for pages that we only want rendered when there is a session??
// or maybe we'd do it this way: https://next-auth.js.org/getting-started/client#custom-client-session-handling
// watch a tutorial to clear things up