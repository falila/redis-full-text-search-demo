import { search } from "@/lib/redisClient";

const handler = async (req, res) => {
  const query = req.query.query;
  const bikes = await search(query);
  res.status(200).json({ bikes });
};

export default handler;