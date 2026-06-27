const API_KEY = import.meta.env.VITE_THESPORTSDB_API_KEY

    console.log("API KEY:", API_KEY)

export async function getMatches() {
  const response = await fetch(
    `https://www.thesportsdb.com/api/v1/json/${API_KEY}/eventsseason.php?id=4429&s=2026`
  )

  const data = await response.json()

  return data.events || []
}