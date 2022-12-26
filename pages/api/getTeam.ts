import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";

export default async function addStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req.body, req.body);
    const snapshot = await getDoc(doc(db, "teams", req.body.uid));
    res.status(200).json(snapshot.data());
    res.end();
  } catch {
    res.status(201).json({});
    res.end();
  }
}
