### Current notes

 - [ ] add a temporary api endpoint to post the transfer page's input to
 - [ ] add some indication of success on the transfer page upon transfer
 - [ ] add form validation to the transfer page

ONCE DONE, MOVE SOME OF THESE NOTES TO FUTURE

use and database design related notes:
 - each user is identified by a unique userId (but how would we identify a user's correct userId?)
   - rn i'm thinking use their email as identification; but then couldn't multiple Oauth services have the same email? don't we want different accounts for them?
   - for now i think just email is fine, but eventually maybe either change so that we store the accounts ourselves or 

show the user's id in the sidebar if they're authenticated

validation:
 - for our forms we should implement clientside validation, with errors being shown to the user immediately
 - we must also implement serverside validation for security tho (since clientside validation could be circumvented by just using devtools i believe)

for transfer page:
 - it'll be a form; we can start then stop it
 - rn im thinking once it's stopped we send a POST request to some API endpoint to record the stop
 - maybe add the ability to add misc notes to the particular transfer?
 - what if they click away from the page while it's still transferring?
 - since its a mock up, maybe just have a field entering the amt to transfer for now
 - also learn about how to use next-auth's csrf tokens for this form

for vehicles page:
 - how are we going to deal with adding/deleting vehicles? are there best practices for this?
 - there will be a form for adding vehicles, and a similar form for deleting vehicles
 - we could make the change client-side as well as serverside; like for adding, add a vehicle to some state array and also send a post request to some api endpoint
   - however this seems like it could go out of sync;  if the POST request fails the clientside wouldn't be synced with the database
 - we could make the change serverside (i.e., send POST request) then reload everything from the database
   - seems inefficient?
 - i think pseudo-reloading the page is the solution using next router, see: https://www.jamesperkins.dev/post/page-reload-with-ssr
 - we should let them nickname their vehicles, and nicknames must be unique for each of a user's vehicles
   - probably restrict it to just alphanumeric or smth

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
 - [ ] register a custom domain?
 - [ ] check out the going to production notes: https://nextjs.org/docs/going-to-production
 - [ ] add support for mobile screens


