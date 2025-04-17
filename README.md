The fetch button was working locally, but due to time constraints and a possible CORS issue between my Worker and Pages, 
I couldn’t fully debug the button behavior on the deployed site.
What i did for the projext was that I created a resume landing page with HTML, CSS, and JavaScript. 
I also made a Cloudflare Worker that fetches and returns a random fact in JSON format. On the page, there’s a button that’s supposed to fetch a new
fact from the Worker and show it on the screen.

Everything works locally, and the Worker is deployed and returns data correctly. The site is also deployed with Cloudflare Pages, 
but the button to fetch the fact didn’t work on the deployed version, most likely due to a connection or CORS issue
