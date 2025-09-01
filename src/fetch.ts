export async function getVisitorCount(): Promise<number> {
  const apiUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(apiUrl, {
    method: 'POST',
    // No headers needed - API Management handles authentication automatically
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const data = await response.json();
  return data.new_visitor_count;
}

// TESTING: Only runs if called directly from terminal
  getVisitorCount()
    .then(count => console.log(`Visitor count: ${count}`))
    .catch(err => console.error(`Error fetching visitor count:`, err));
