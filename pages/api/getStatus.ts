import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";

export default async function getStatus(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const snapshot = await getDoc(doc(db, "users", req.body.email));
    const result = snapshot.data()
    res.status(200).json(result!.status);
    res.end();
  } catch {
    res.status(201).json({});
    res.end();
  }
}
