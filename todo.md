### Current notes
 - on sign out, to redirect to the homepage use () => signOut({ callbackUrl: "/" })
   - arrow function is necessary since otherwise the signOut function will be automatically called instead of stored for later calling on button click

for custom signin page, it looks like:
 - we need to configure the pages option: https://next-auth.js.org/configuration/pages
 - we use getProviders and enumerate over the resulting data to create sign in buttons for each configured provider
 - we don't need csrf tokens if we're just using oauth type sign in
 - we pass the provider.id to signIn to directly start the correct OAuth flow for each button
   - also put it in arrow function so that it's not immediately called


### Immediate
 - [x] add the next.config.js file to enable standalone
 - [ ] add custom sign in/up page
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


