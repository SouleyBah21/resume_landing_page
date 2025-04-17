const facts = [
  "Did you know? Honey never spoils.",
  "Did you know? The Eiffel Tower can be 15 cm taller during the summer.",
  "Did you know? A small child could swim through the veins of a blue whale.",
  "Did you know? Octopuses have three hearts.",
  "Did you know? Bananas are berries, but strawberries are not."
];

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  return new Response(JSON.stringify({ fact: randomFact }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

