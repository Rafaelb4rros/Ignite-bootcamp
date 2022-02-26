import { NextApiRequest, NextApiResponse } from "next";
import { cities } from "../../../lib/api/cities";

export default function Cities(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") return res.status(200).json(cities);
}
