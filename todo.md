### Current notes
use and database design related notes:
 - each user is identified by a unique userId (but how would we identify a user's correct userId?)
   - rn i'm thinking use their email as identification; but then couldn't multiple Oauth services have the same email? don't we want different accounts for them?

for transfer page:
 - it'll be a form; we can start then stop it
 - rn im thinking once it's stopped we send a POST request to some API endpoint to record the stop
 - maybe add the ability to add misc notes to the particular transfer?
 - what if they click away from the page while it's still transferring?
 - since its a mock up, maybe just have a field entering the amt to transfer for now

for vehicles page:
 - how are we going to deal with adding/deleting vehicles? are there best practices for this?
 - there will be a form for adding vehicles, and a similar form for deleting vehicles
 - we could make the change client-side as well as serverside; like for adding, add a vehicle to some state array and also send a post request to some api endpoint
   - however this seems like it could go out of sync;  if the POST request fails the clientside wouldn't be synced with the database
 - we could make the change serverside (i.e., send POST request) then reload everything from the database
   - seems inefficient?
 - i think pseudo-reloading the page is the solution using next router, see: https://www.jamesperkins.dev/post/page-reload-with-ssr

for history page:
 - just a table listing past transactions
 - look into how to implement a scroll bar
 - should we able to sort/search?


### Immediate
 - [x] add the next.config.js file to enable standalone
 - [x] add custom sign in/up page
 - [ ] create the signed-in pages (just the UI)
 - [ ] i believe i have to add some stuff to the production dockerfile now that i've done a bunch more

### Overview
 - [ ] construct simple interface (try using tailwind)
 - [ ] create the database (yugabyte & hasura api)
 - [ ] add in authentication (next-auth)
 - [ ] look into how to start up in a container, and host on AWS lightsail

 - [ ] leave out typescript for now, integrate later

### Future
 - [ ] add a .dockerignore file? (https://codefresh.io/blog/not-ignore-dockerignore-2/)
 - [ ] configure https instead of http?
 - [ ] make it available on a proper port, rather than port 3000
   - i believe this is done by setting the PORT env variable (see server.js in .next/standalone, it uses that env variable)
   - acc for some reason when I host on lightsail it's already https with the proper port? is it bc the container isn't directly exposed to internet but thru some of AWS's stuff?
 - [ ] register a custom domain?
 - [ ] look into SWR for client-side data fetching
 - [ ] check out the going to production notes: https://nextjs.org/docs/going-to-production
 - [ ] add support for mobile screens


