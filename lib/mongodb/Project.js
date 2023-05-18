import clientPromise from ".";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();
  console.log(db);

  //   const collection = db.collection("your-collection");
  //   const data = await collection.find().toArray();

  //   res.status(200).json(data);
}
