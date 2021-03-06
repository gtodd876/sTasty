import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDb } from "../../db/database";
import { nanoid } from "nanoid";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDb();
  const { title, keywords, notes, imageData, user } = req.body;
  const result = await db.collection("screenshots").insertOne({
    _id: nanoid(),
    title,
    keywords,
    imageData,
    notes: notes,
    createdBy: user.id,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  });

  res.json(result);
};
