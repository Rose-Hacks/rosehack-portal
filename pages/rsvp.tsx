import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import axios from "axios";

const RSVP = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState === null) void router.push("/");
      else if (currentState !== null) {
        const response = await axios.post("/api/getUser", {
          email: currentState.email,
        });
        if (response.status === 200) {
          setUser(response.data.email);
        }
      }
    });
  }, []);

  const handleButton = async (state: string) => {
    const response = await axios.post("/api/updateRSVP", { user, state });
    if (response.status === 200) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  };

  if (user.email !== "") {
    return (
      <div className="flex justify-start items-center flex-col min-h-[93vh] pt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 text-white">
        <div
          className={`${
            !visible ? "hidden" : "visible"
          } z-50 bg-black/60 text-white text-center p-2 fixed bottom-[30px] left-1/2 -translate-x-1/2`}
        >
          Thank you for your response!
        </div>
        <div className="w-10/12 flex justify-start items-center flex-col">
          <p className="text-4xl font-lexend">RSVP CHECK IN FORM</p>
          <p className="font-lexend text-xl text-center">
            With Rosehack right around the corner, the Rosehack operations team
            would like to guage the number of participants who will be attending
            Rosehack in person at the University of California, Riverside.
            Unfortunately, there will be no virtual or hybrid option for this
            hackathon. If you are able to attend the event in person, please
            RSVP &quot;YES&quot; or &quot;NO&quot; if you are unable to attend
            the event. If you have additional questions, do not hestitate to ask
            us at rosehackucr@gmail.com
          </p>
          <p className="font-lexend text-2xl text-center">
            Will you be attending Rosehack 2023 in person from January 14 - 15th
            at University of California, Riverside?
          </p>
          <div className="flex">
            <button
              className="font-lexend text-3xl px-4 py-2 bg-green-500 mx-4 rounded hover:scale-110"
              onClick={() => handleButton("yes")}
            >
              Yes
            </button>
            <button
              className="font-lexend text-3xl px-4 py-2 bg-red-500 mx-4 rounded hover:scale-110"
              onClick={() => handleButton("no")}
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default RSVP;
