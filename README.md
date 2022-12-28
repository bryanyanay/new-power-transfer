This is me rebuilding the power transfer app from scratch, as a review of a bunch of web dev stuff.

This time I'm planning on using Tailwind CSS and docker as well.

### Misc.
 - remember to set NEXTAUTH_URL env var when deploying to production: https://next-auth.js.org/getting-started/example
   - and actually there are some other things to set up too when deploying to production

### Stack
 - Next.js framework
 - NextAuth.js for authentication & security
 - React for UI
 - TailwindCSS for styling
 - [YugabyteDB for database? Hasura on top?]
 - Hosted in a docker container

### Useful commands
 - DEV SERVER: `npm run dev` to start up the dev server, with hot reloading and the like
 - BUILD PRODUCTION IMAGE: `docker build -f Dockerfile.production -t bryanyanay/power-transfer:<tag-name> .` 
   - run in the root directory of project
   - builds the image with ur desired tag
   - username/imagename format for image name (or repo name) explanation: https://stackoverflow.com/questions/37815524/docker-build-tag-repository-name
 - RUN PRODUCTION CONTAINER: `docker run --name power-transfer -p 3000:3000 bryanyanay/power-transfer:<tag-name>` 
   - `docker stop power-transfer` to stop, then `docker rm power-transfer` to delete container
   - `--rm` flag add to docker run in order to automatically delete after stopping
   - `-d` flag add to docker run to push the container running to the background, so u keep ur shell (currently I can't recover my shell without this flag)
 - VIEW PRODUCTION SITE: go to localhost:3000
 - PUSH TO DOCKER HUB: `docker push bryanyanay/power-transfer:<tag-name>` 
   - probs have to login first; `docker login` otherwise says access denied