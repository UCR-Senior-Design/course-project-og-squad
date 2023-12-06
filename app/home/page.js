async function getHomePageRecipes() {
  const res = await fetch("http://localhost:3000/api/homeRecipes", {
    next: { revalidate: 1000 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getHomePageRecipes();

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
