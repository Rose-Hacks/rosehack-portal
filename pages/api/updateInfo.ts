import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default async function updateInfo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await updateDoc(doc(db, "users", req.body.email), req.body);
  res.status(200).json({});
}
