import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";

export default async function addStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const snapshot = await getDoc(doc(db, "teams", req.body.id));
    if (snapshot.data() == null) {
      res.status(201).json(true);
      return;
    }
    if (snapshot.data()?.members.length < 4) {
      res.status(200).json(true);
      return;
    } else {
      res.status(202).json(false);
      return;
    }
  } catch {
    res.status(500).json({});
  }
}
