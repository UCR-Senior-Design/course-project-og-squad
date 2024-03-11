export async function fetchProfile(username) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/fetchProfile?username=${username}`,
      {
        next: {
          revalidate: 0, // use 0 to opt out of using cache
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch profile!");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching profile:", error.message);
    return null; // Return null in case of error
  }
}
