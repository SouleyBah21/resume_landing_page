document.getElementById('factButton').addEventListener('click', async () => {
  const response = await fetch('https://your-worker-subdomain.workers.dev/fact');
  const data = await response.json();
  document.getElementById('factDisplay').textContent = data.fact;
});
