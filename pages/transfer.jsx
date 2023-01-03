import Head from "next/head";
import { useState } from "react";

import Header from "../components/header";
import Subheader from "../components/subheader";

function Transfer() {
  const [input, setInput] = useState({
    "donor-vehicle": "", // these must match with the name attributes of the form input elements, due to how we write the input change handler function
    "recipient-user": "",
    "recipient-vehicle": "",
    "amount": ""
  });

  function handleInput(e) {
    const tgt = e.target;
    setInput({
      ...input,
      [tgt.name]: tgt.value
    });
  }

  return (
    <div>
      <Head>
        <title>Transfer</title>
      </Head>
      <Header>Transfer</Header>
      <Subheader>Transfer power from one of your vehicles to another. The donor vehicle must be one of your vehicles.</Subheader>

      <form className="flex flex-col gap-4 items-center" action="not yet determined" method="POST">
        <div>
          <label className="block font-bold text-xl mb-2" htmlFor="donor-vehicle">Donor Vehicle Nickname:</label>
          <input className= "transition focus:bg-slate-200 focus:translate-x-2.5 focus:shadow-md focus:outline-none bg-slate-100 p-2 pl-4 pr-4 rounded-full w-96" type="text" name="donor-vehicle" id="donor-vehicle" value={input["donor-vehicle"]} onChange={handleInput} />  
        </div>
        <div>        
          <label className="block font-bold text-xl mb-2" htmlFor="recipient-user">Recipient User ID:</label>
          <input className= "transition focus:bg-slate-200 focus:translate-x-2.5 focus:shadow-md focus:outline-none bg-slate-100 p-2 pl-4 pr-4 rounded-full w-96" type="text" name="recipient-user" id="recipient-user" value={input["recipient-user"]} onChange={handleInput} />
        </div>
        <div>
          <label className="block font-bold text-xl mb-2" htmlFor="recipient-vehicle">Recipient Vehicle Nickname:</label>
          <input className= "transition focus:bg-slate-200 focus:translate-x-2.5 focus:shadow-md focus:outline-none bg-slate-100 p-2 pl-4 pr-4 rounded-full w-96" type="text" name="recipient-vehicle" id="recipient-vehicle" value={input["recipient-vehicle"]} onChange={handleInput} />
        </div>
        <div>
          <label className="block font-bold text-xl mb-2" htmlFor="amount">Amount to transfer (in kWh):</label>
          <input className= "transition focus:bg-slate-200 focus:translate-x-2.5 focus:shadow-md focus:outline-none bg-slate-100 p-2 pl-4 pr-4 rounded-full w-96" type="text" name="amount" id="amount" value={input["amount"]} onChange={handleInput} />
        </div>
        <button className="mt-4 bg-white border-solid border-4 font-bold rounded-full p-5 pt-3 pb-3 text-xl border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white transition" type="submit">Transfer</button>
      </form>
    </div>
  );
}

/* HOW IT CURRENTLY WORKS
 - an error is just thrown if the recipient does not have the specified vehicle
*/

/* A BETTER WAY FOR IT TO WORK
the recipient vehicle option should be grayed out if we still haven't picked recipient user
 - once we have, a database query should trigger to get a list of that user's vehicles, and we can 
*/

export default Transfer;