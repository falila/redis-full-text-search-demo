import createMotoBike from "@/lib/redisClient";

const  handler= async (req, res) => {
  const newBike = await createMotoBike(req.body);
  res.status(200).json({ newBike });
}

export default handler;
