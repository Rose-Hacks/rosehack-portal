import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export default async function addStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await updateDoc(doc(db, "users", req.body.email), {
    team: req.body.team,
  });
  await updateDoc(doc(db, "teams", req.body.team), {
    members: arrayUnion(req.body.name),
  });
  res.status(200).json({});
}
