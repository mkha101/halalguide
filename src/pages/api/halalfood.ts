import { string } from "zod";

const apiKey = "YOUR_YELP_API_KEY";

const searchHalalFood = async (zipCode: string) => {
  const apiKey = "YOUR_YELP_API_KEY";
  const url = `https://api.yelp.com/v3/businesses/search?term=halal&location=${zipCode}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const data = response.json();
    const businesses = data.choices[0].text.trim();
    return businesses;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to search for businesses.");
  }
};

export default async function handler(req, res) {
  const { zipCode } = req.body;

  if (req.method === "POST") {
    try{
      const businesses = await searchHalalFood(zipCode)
    }
  }
}
