/* eslint-disable */
import { useEffect, useState } from "react";

import { NextApiRequest, NextApiResponse } from "next";

const yelp = require("yelp-fusion");

const apiKey = process.env.NEXT_PUBLIC_YELP_API_KEY;
const client = yelp.client(apiKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { zipcode, longitude, latitude } = req.query;

  try {
    const response = await client.search({
      location: zipcode as string,
      categories: "halal",
    });

    const businesses = response.jsonBody.businesses as Array<any>;
    const halalBusinesses = businesses.filter((business: any) => {
      return business.categories.some((category: any) => {
        return category.alias === "halal";
      });
    });

    res.status(200).json(halalBusinesses);
  } catch (error: any) {
    console.error("Error retrieving halal food businesses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
