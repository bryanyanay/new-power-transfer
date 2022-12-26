
### Immediate
 - [x] add the next.config.js file to enable standalone

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


