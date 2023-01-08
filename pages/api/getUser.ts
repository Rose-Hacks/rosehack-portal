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

    return;
  } catch {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    const email =
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      req.body.email.charAt(0).toUpperCase() + req.body.email.slice(1);
    try {
      const snapshot = await getDoc(doc(db, "users", email));
      res.status(200).json(snapshot.data());
      res.end();
    } catch {
      res.status(500).json({});
      res.end();
    }
  }
}
