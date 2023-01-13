import React, { useState, useEffect } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import {
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (currentState) => {
      if (currentState !== null) void router.push("/dashboard");
    });
  }, []);

  const handleReset = () => {
    if (email === "") {
      setMessage("Please enter an email!");
      snackBar();
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then((response) => {
        setMessage("Please check your email for a reset link!");
        snackBar();
      })
      .catch(() => {
        setMessage("Please ensure you have a valid email!");
        snackBar();
      });
  };

  const snackBar = () => {
    setShowSnackBar(true);
    setTimeout(() => {
      setShowSnackBar(false);
      setMessage("");
    }, 1000);
  };

  const logIn = async () => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      return signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          void router.push("/dashboard");
        })
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            setMessage("Email not found");
            snackBar();
          } else if (error.code === "auth/wrong-password") {
            setMessage("wrong password");
            snackBar();
          } else {
            alert(error.message);
          }
        });
    });
  };
  const handleSubmit = async (email: string, password: string) => {
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
      setMessage("Please enter a valid email address");
      snackBar();
      return;
    }
    if (password === "") {
      setMessage("Please enter your password");
      snackBar();
      return;
    }
    const response = await logIn();
    console.log(response);
  };
  return (
    <div className="flex justify-center items-center flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 w-full min-h-screen">
      <div className="flex flex-col justify-center items-center h-11/12 w-10/12 md:w-1/3  bg-white rounded-lg">
        <p className="h-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-lexend font-bold text-3xl lg:text-4xl text-center m-4">
          Login
        </p>
        <label className="text-left font-lexend font-bold text-xl text-black w-10/12">
          email
        </label>
        <input
          type="text"
          name="email"
          maxLength={50}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email address"
          className="rounded-md font-lexend text-gray-700 p-2 w-10/12 bg-transparent border-2 border-gray-500 focus:outline-0"
        />
        <div className="flex flex-row w-10/12 items-center justify-start mt-4">
          <label className="text-left font-lexend text-xl text-black font-bold mr-2">
            password
          </label>
          {visible ? (
            <FaEye
              className="text-2xl text-black hover:cursor-pointer hover:!text-pink-400"
              onClick={() => setVisible(false)}
            />
          ) : (
            <FaEyeSlash
              className="text-2xl text-black hover:cursor-pointer hover:!text-pink-400"
              onClick={() => setVisible(true)}
            />
          )}
        </div>
        <input
          type={visible ? "text" : "password"}
          name="password"
          maxLength={50}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="rounded-md font-lexend text-gray-700 p-2 w-10/12 bg-transparent border-2 border-gray-500 focus:outline-0"
        />
        <div className="w-10/12 flex justify-end items-center">
          <p
            className="font-lexend text-base hover:text-pink-400 hover:cursor-pointer"
            onClick={handleReset}
          >
            Forgot Password?
          </p>
        </div>

        <button
          // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/promise-function-async
          onClick={() => handleSubmit(email, password)}
          className="hover:scale-105 rounded-xl m-5 bg-gradient-to-r from-purple-400 to-pink-600 font-lexend font-bold text-2xl lg:text-4xl text-white text-center px-3 py-2"
        >
          Submit
        </button>
        <div
          className={`${
            !showSnackBar ? "hidden" : "visible"
          } z-50 bg-black/60 text-white text-center p-2 fixed bottom-[30px] left-1/2 -translate-x-1/2`}
        >
          {message}
        </div>
      </div>
    </div>
  );
}
