import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Subheader from "../components/subheader";

import { useSession } from "next-auth/react";

function LinkBox({ title, desc, dest }) { // the 60px in the svg arrow's top positioning is height of box minus height of svg divided by 2
	return (
		<Link href={dest} className="relative group">
			<div className="transition group-hover:bg-cyan-700 group-hover:-translate-x-4 bg-white shadow-lg border-solid border-4 border-cyan-700 rounded-lg w-96 h-40 p-4">
				<h3 className="transition group-hover:text-white text-2xl font-bold text-cyan-700 mb-4">{title}</h3>
				<p className="transition group-hover:text-white text-xl text-cyan-700">{desc}</p>
			</div>
			<svg className="-z-10 transition-all right-0 opacity-0 group-hover:opacity-100 group-hover:-right-5 absolute top-[60px] h-10 fill-cyan-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
					<path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
			</svg>
		</Link>
	);
}

function Home() {
	const {data: session, status} = useSession();

	// do we have to deal with "loading" status (e.g., display loading symbol)? it seems fine for now

	let page;
	if (session) {
		page = (
			<div className="text-black">
				<Head>
					<title>{session.user.name} Home - Power Transfer</title>
				</Head>
				<Header>Welcome back {session.user.name.split(" ")[0]}!</Header>
				<Subheader>What would you like to do today?</Subheader>

				<div className="flex flex-wrap flex-row justify-center gap-12">
					<LinkBox title="Transfer" desc="Transfer power from your vehicle to another." dest="/transfer"></LinkBox>
					<LinkBox title="History" desc="View your past power transfers." dest="history"></LinkBox>
					<LinkBox title="Vehicles" desc="View and manage your vehicles." dest="vehicles"></LinkBox>
				</div>
			</div>
		);
	} else {
		page = (
			<div className="text-black"> 	
				<Head>
					<title>Power Transfer Home</title>
				</Head>
				<h1 className="text-6xl font-bold leading-relaxed">Easy power transfers between electric vehicles.</h1>
				<Link href="/signin" className="transition block mt-28 text-4xl font-thin underline decoration-1 underline-offset-8 hover:text-cyan-700">Get started now.</Link>
			</div>
		);
	}
	return page;
}

export default Home;
