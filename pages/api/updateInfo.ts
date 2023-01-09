import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

export default async function updateInfo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.body.team === "") {
    req.body.team = uuidv4()
    await setDoc(doc(db, "teams", req.body.team), {
      logs: "",
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      members: [req.body.first + " " + req.body.last],
      name: "Untitled Team",
      prize: false,
      prizeLogs: "",
      status: "approved"
    });
  }
  await setDoc(doc(db, "users", req.body.email), req.body);
  res.status(200).json({});
}
