import React, { useEffect, useState } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { QRCodeSVG } from "qrcode.react";

const ProfilePage = () => {
  const [data, setData] = useState({
    email: "",
    shirt: "",
    rsvp: "",
    first: "",
    last: "",
  });
  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        console.log(currentState.email);
        const response = await axios.post("/api/getUser", {
          email: currentState.email,
        });
        if (response.status === 200) {
          setData(response.data);
          console.log(response.data);
        }
      }
    });
  }, []);

  if (data?.rsvp === "yes") {
    return (
      <div className="flex justify-center items-center flex-col font-lexend bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 text-white h-[93vh]">
        <p className="text-4xl font-bold">{data?.first + " " + data?.last}</p>
        <p className="text-2xl">{data?.email}</p>
        <p className="text-2xl font-bold">Adult {data?.shirt}</p>
        <div className="w-full flex justify-center items-center">
          <QRCodeSVG value={data?.email} size={300} />
        </div>
      </div>
    );
  } else {
    return (
      <p className="p-4 font-lexend text-2xl text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 text-white h-[93vh]">
        You will need to first RSVP before checking into Rosehack 2023. Please
        navigate to the RSVP page and following the instructions. Once you have
        RSVP, you will be able to checkin. If you have additional questions, do
        not hestitate to reach out to one of the officers!
      </p>
    );
  }
};

export default ProfilePage;
