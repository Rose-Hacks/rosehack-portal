import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default async function addStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await updateDoc(doc(db, "teams", req.body.team), {
    name: req.body.name,
  });
  res.status(200).json({});
}
