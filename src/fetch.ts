export async function getVisitorCount(): Promise<number> {
  const response = await fetch('https://dev00functionapp-apim.azure-api.net/dev00functionapp/http_trigger', 
    {
  method: 'POST',
  headers: {
    'Ocp-Apim-Subscription-Key': '3a4c6d96b4a2413f982ac0c56f59f09b',
  },
    });
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const data = await response.json();

  // Assuming the API response looks like: { new_visitor_count: 123 }
  return data.new_visitor_count;
}

// TESTING: Only runs if called directly from terminal
  getVisitorCount()
    .then(count => console.log(`Visitor count: ${count}`))
    .catch(err => console.error(`Error fetching visitor count:`, err));
