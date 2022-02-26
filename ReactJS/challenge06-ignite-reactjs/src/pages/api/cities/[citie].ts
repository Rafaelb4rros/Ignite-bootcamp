import { NextApiRequest, NextApiResponse } from "next";
import { cities } from "../../../lib/api/cities";

export default function Cities(req: NextApiRequest, res: NextApiResponse) {
  const { citie: citieName } = req.query as { citie: string };

  if (req.method === "GET")
    return res
      .status(200)
      .json(cities.find((citie) => citie.name === String(citieName)));
}
