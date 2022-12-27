import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";
import { arrayRemove, doc, updateDoc, deleteDoc } from "firebase/firestore";

export default async function addStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await updateDoc(doc(db, "users", req.body.email), {
    team: "",
  });

  if (req.body.members === 1) {
    await deleteDoc(doc(db, "teams", req.body.team));
  } else {
    await updateDoc(doc(db, "teams", req.body.team), {
      members: arrayRemove(req.body.name),
    });
  }

  res.status(200).json({});
}
