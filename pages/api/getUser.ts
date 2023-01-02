import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";

export default async function addStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const snapshot = await getDoc(doc(db, "users", req.body.email));
    res.status(200).json(snapshot.data());
    res.end();
    return;
  } catch {
    res.status(500).json({});
    res.end();
  }
}
