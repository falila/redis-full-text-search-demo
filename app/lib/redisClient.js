import { Schema, Repository } from "redis-om";
import { createClient } from "redis";

async function redisClient() {
  const redis = createClient({ url: process.env.NEXT_PUBLIC_REDIS_URL });
  redis.on("error", (err) => console.log("Redis Client Error", err));
  redis.on("ready", () =>
    console.log("Connected to Redis server successfully")
  );
  redis.connect();
  return redis;
}
const client = await redisClient();

let motoBikeSchema = new Schema(
  "MotoBike",
  {
    make: { type: "string" },
    model: { type: "string" },
    image: { type: "string" },
    description: { type: "text" },
  },
  { dataStructure: "JSON" }
);

const createMotoBike = async (data) => {
  //const client = await redisClient();
  const motoBikeRepository = new Repository(motoBikeSchema, client);
  const id = await motoBikeRepository.save(data);
  return id;
};

export const createIndex = async () => {
  //const client = await redisClient();
  const motoBikeRepository = new Repository(motoBikeSchema, client);
  await motoBikeRepository.createIndex();
};

export const search = async (query) => {
  //const client = await redisClient();
  const motoBikeRepository = new Repository(motoBikeSchema, client);
  const motoBikes = await motoBikeRepository
    .search()
    .where("make")
    .equals(query)
    .or("model")
    .equals(query)
    .or("description")
    .matches(query)
    .return.all();

  return motoBikes;
};

export default createMotoBike;
