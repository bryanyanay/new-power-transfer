This is me rebuilding the power transfer app from scratch, as a review of React, Next.js, YugabyteDB, Hasura, Auth0, Typescript, etc.

This time I'm planning on using Tailwind CSS and docker as well.

### Useful commands
 - DEV SERVER: `npm run dev` to start up the dev server, with hot reloading and the like
 - BUILD PRODUCTION IMAGE: `docker build -f Dockerfile.production -t bryanyanay/power-transfer:<tag-name> .` 
   - run in the root directory of project
   - builds the image with ur desired tag
   - username/imagename format for image name (or repo name) explanation: https://stackoverflow.com/questions/37815524/docker-build-tag-repository-name
 - RUN PRODUCTION CONTAINER: `docker run --name power-transfer -p 3000:300 bryanyanay/power-transfer:<tag-name>` 
   - `docker stop power-transfer` to stop, then `docker rm power-transfer` to delete container
   - `--rm` flag add to docker run in order to automatically delete after stopping
   - `-d` flag add to docker run to push the container running to the background, so u keep ur shell (currently I can't recover my shell without this flag)
 - VIEW PRODUCTION SITE: go to localhost:3000