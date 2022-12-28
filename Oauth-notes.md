
### Google
go to google API console
 - probs update the authorized domain of our oauth consent screen (in google api console) [that's just domains that provide trusted info about our app i believe, so we can put that domain/subdomains on consent screen]
   - we put tobedetermined.com for now
 - right now i believe it only works for our test users: we set it to just be bryan.yan2022@gmail.com for now
   - we'd have to publish it in the future to allow all users
   - acc for some reason it seems to be allowing other accounts as well?
 - once we get an actual domain we'd have to add authorized javascript origins and authorized redirect URIs to our Oauth client setup
   - right now we just have paths originating at localhost:3000 
