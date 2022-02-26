import { NextApiRequest, NextApiResponse } from "next";
import { cities } from "../../../lib/api/cities";
import { continents } from "../../../lib/api/continents";

export default function Continents(req: NextApiRequest, res: NextApiResponse) {
  const { continent: continentName } = req.query as { continent: string };

  const continentData = continents.find((continent) =>
    continent.name.toLowerCase().includes(continentName.toLowerCase())
  );

  const cityData = cities
    .map(
      (city) =>
        city.continent.toLowerCase().includes(continentName.toLowerCase()) && {
          city,
        }
    )
    .filter(Boolean);

  if (!continentData) {
    return res.status(404).end();
  }

  const continent = {
    ...continentData,
    plusCities: cityData.length,
    cities: cityData,
  };

  if (req.method === "GET") return res.status(200).json(continent);
}
