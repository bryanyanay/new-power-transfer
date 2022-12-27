import Link from "next/link";
import Head from "next/head";


function Home() {
	return (
		<div className="p-12 text-black"> 
			<Head>
				<title>Power Transfer Home</title>
			</Head>
			<h1 className="text-6xl font-bold leading-relaxed">Easy power transfers between electric vehicles.</h1>
			<Link href="/signin" className="block mt-28 text-4xl font-thin hover:underline">Get started now.</Link>
		</div>
	);
}

export default Home;
