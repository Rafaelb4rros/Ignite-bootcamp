import { NextApiRequest, NextApiResponse } from "next";
import { continents } from "../../../lib/api/continents";

export default function Continents(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") return res.status(200).json(continents);
}
