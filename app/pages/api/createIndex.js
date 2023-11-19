import { createIndex } from "@/lib/redisClient";

const handler = async (req, res) => {
    await createIndex();
    res.status(200).send("OK");
 };

 export default handler;