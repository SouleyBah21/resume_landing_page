const facts = [
  "The moon is slowly drifting away from Earth.",
  "Honey never spoils.",
  "Bananas are berries, but strawberries aren't.",
  "Octopuses have three hearts.",
  "A single strand of spaghetti is called a 'spaghetto'."
];

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  return new Response(randomFact, { status: 200 });
}

