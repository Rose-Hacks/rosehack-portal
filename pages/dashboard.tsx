import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import {
  data,
  grades,
  shirts,
  ages,
  majors,
  genders,
} from "../components/data/register";
import { schools } from "../components/data/schools";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { v4 as uuidv4 } from "uuid";
import { FaRegCopy, FaCheck, FaTimes, FaRegClock } from "react-icons/fa";
import Selector from "../components/Selector";
import Schools from "../components/Schools";

interface team_type {
  members: string[];
  name: string;
}

const Dashboard = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState<typeof data>(data);
  const [team, setTeam] = useState<team_type>();
  const [id, setId] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [create, setCreate] = useState(false);
  const [join, setJoin] = useState(false);
  const [inTeam, setInTeam] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [message, setMessage] = useState("");
  const [operation] = useState("view");
  const [info, setInfo] = useState(data);

  useEffect(() => {
    console.log(userData);
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState === null) router.push("/");
      else if (currentState.email !== null) {
        const response = await axios.post("/api/getUser", {
          email: currentState.email,
        });
        setUserData({ ...userData, email: currentState.email });
        if (response.data !== "") {
          setUserData(response.data);
          const teamResponse = await axios.post("/api/getTeam", {
            uid: response.data.team,
          });
          setTeam(teamResponse.data);
          if (teamResponse.data.name !== "Untitled Team") {
            setInTeam(true);
          }
        }
      }
    });
  }, []);

  const snackBar = () => {
    setShowSnackBar(true);
    setTimeout(() => {
      setShowSnackBar(false);
      setMessage("");
    }, 3000);
  };

  const copyToClipboard = (copyText: string) => {
    setMessage("ID Copied");
    navigator.clipboard.writeText(copyText);
    snackBar();
  };

  const joinTeam = async () => {
    if (id === "") {
      setMessage("Please enter a team ID");
      snackBar();
      return;
    }
    if (id === userData.team) {
      setMessage("You are already apart of the team you are trying to join!");
      snackBar();
      return;
    }

    const response = await axios.post("/api/verifyTeam", { id });

    if (response.status === 201) {
      setMessage("Invalid Team ID, please try again!");
      snackBar();
      return;
    } else if (response.status === 202) {
      setMessage("Team already has 4 members, please find another team!");
      snackBar();
      return;
    }

    await axios.post("/api/leaveTeam", {
      email: userData.email,
      team: userData.team,
      members: team?.members?.length,
      name: userData.first + " " + userData.last,
    });

    await axios.post("/api/updateTeam", {
      email: userData.email,
      team: id,
      name: userData.first + " " + userData.last,
    });

    setUserData({ ...userData, team: id });
    setTrigger(!trigger);
    setJoin(false);
    setInTeam(true);
    setId("");
  };
  const leaveTeam = async () => {
    if (team?.members?.length === 1) {
      setMessage(
        "You cannot leave your current team, since there is only 1 member!"
      );
      snackBar();
      return;
    }

    await axios.post("/api/leaveTeam", {
      email: userData.email,
      team: userData.team,
      members: team?.members?.length,
      name: userData.first + " " + userData.last,
    });

    const uuid = uuidv4();
    await axios.post("/api/newTeam", {
      email: userData.email,
      uuid,
      name: userData.first + " " + userData.last,
    });

    setUserData({ ...userData, team: uuid });
    setTeam({
      name: "Untitled Team",
      members: [userData.first + " " + userData.last],
    });
    setInTeam(false);
  };

  useEffect(() => {
    const getTeamData = async () => {
      const teamResponse = await axios.post("/api/getTeam", {
        uid: id,
      });
      setTeam(teamResponse.data);
    };

    getTeamData();
  }, [trigger]);

  const logOut = async () => {
    signOut(auth)
      .then(() => {
        console.log(user);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renameTeam = async () => {
    if (teamName === "Untitled Team") {
      setMessage("Please use a different name!");
      snackBar();
      return;
    }
    if (teamName === "") {
      setMessage("Please enter a team name!");
      snackBar();
      return;
    }
    await axios.post("/api/renameTeam", {
      name: teamName,
      team: userData.team,
    });
    setTeam({ ...team!, name: teamName });
    setTeamName("");
    setInTeam(true);
    setCreate(false);
  };

  const handleLogOut = async () => {
    await logOut();
  };

  // const handleEdit = () => {
  //   setInfo(userData);
  //   setOperation("edit");
  // };

  // const handleSave = () => {
  //   setOperation("view");
  //   axios.post("/api/updateInfo", info);
  //   setUserData(info);
  // };

  // const handleCancel = () => {
  //   setOperation("view");
  // };

  const handleTyping = (e: any) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleInput = (data: string, value: string) => {
    setInfo({ ...info, [data]: value });
    console.log(data, value);
  };

  const handleSchool = (school: string) => {
    setInfo({ ...info, school });
    console.log(school);
  };

  return (
    <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 flex flex-col justify-evenly items-center min-h-[90vh]">
      <a
        id="mlh-trust-badge"
        className="block max-w-[100px] min-w-[60px] fixed right-[50px] top-0 w-[10%] z-[1000000]"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=wh"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
          alt="Major League Hacking 2023 Hackathon Season"
          className="w-full"
        />
      </a>
      <div
        className={`${
          !showSnackBar ? "hidden" : "visible"
        } z-50 bg-black/60 text-white text-center p-2 fixed bottom-[30px] left-1/2 -translate-x-1/2`}
      >
        {message}
      </div>
      <p className="text-white font-lexend mt-16 p-0 text-3xl sm:text-5xl w-full text-center">
        {new Date().getHours() < 12 && new Date().getHours() > 5
          ? "Good Morning"
          : new Date().getHours() < 16 && new Date().getHours() >= 12
          ? "Good Afternoon"
          : new Date().getHours() < 20 && new Date().getHours() > 16
          ? "Good Evening"
          : "Good Night"}{" "}
        {userData.first} {userData.last}!
      </p>

      <Row className="flex justify-evenly items-stretch w-11/12 mt-4">
        <Col
          md={5}
          className="bg-white rounded-2xl flex flex-col items-center justify-start m-2"
        >
          <div className="h-8 w-10/12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-lexend text-base md:text-xl lg:text-2xl mt-4">
            <p>INFORMATION</p>
          </div>

          <div className="bg-gradient-to-r from-purple-400 to-pink-600 h-1 w-10/12" />
          <div className="font-lexend flex flex-col justify-evenly items-start p-4 w-full">
            <div className="text-base sm:text-lg">
              <p className="p-0 m-0 inline font-bold">Email: {user?.email}</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="p-0 m-0 inline font-bold text-base sm:text-lg">
                Status:
              </p>
              <div className="flex items-center ml-1 text-base sm:text-lg font-bold">
                {userData.status === "pending" ? (
                  <>
                    Pending
                    <FaRegClock className="text-yellow-500 ml-2 text-xl" />
                  </>
                ) : userData.status === "approved" ? (
                  <>
                    Approved
                    <FaCheck className="text-green-500 text-xl ml-2" />
                  </>
                ) : userData.status === "rejected" ? (
                  <>
                    Rejected
                    <FaTimes className="text-red-500 text-xl ml-2" />
                  </>
                ) : (
                  <>
                    Data not Available
                    <FaTimes className="text-red-500 text-xl ml-2" />
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <p className="p-0 m-0 inline font-bold text-base sm:text-lg">
                RSVP:
              </p>
              <div className="flex items-center ml-1 text-base sm:text-lg font-bold">
                {userData.rsvp === "yes" ? (
                  <>
                    Confirmed
                    <FaCheck className="text-green-500 text-xl ml-2" />
                  </>
                ) : userData.rsvp === "no" ? (
                  <>
                    Not Attending
                    <FaTimes className="text-red-500 text-xl ml-2" />
                  </>
                ) : (
                  <>
                    Data not Available
                    <FaTimes className="text-red-500 text-xl ml-2" />
                  </>
                )}
              </div>
            </div>
            <div className="text-base sm:text-lg flex whitespace-nowrap items-center justify-between w-full">
              <p className="p-0 m-0 inline font-bold">
                First Name: {userData.first}
              </p>
            </div>
            <div className="text-base sm:text-lg flex whitespace-nowrap items-center justify-between w-full">
              <p className="p-0 m-0 inline font-bold">
                Last Name: {userData.last}
              </p>
            </div>
            <div className="text-base sm:text-lg flex whitespace-nowrap items-center justify-between w-full">
              <p className="p-0 m-0 inline font-bold">
                Phone: {userData.phone}
              </p>
            </div>
            <div className="text-base sm:text-lg flex w-full my-1 items-start justify-between">
              <p className="p-0 m-0 inline font-bold">
                Grade: {userData.grade}
              </p>
            </div>
            <div className="text-base sm:text-lg flex w-full my-1 items-start justify-between">
              <p className="p-0 m-0 inline font-bold">
                School: {userData.school}
              </p>
            </div>

            <div className="text-base sm:text-lg flex w-full my-1 items-center justify-between">
              <p className="p-0 m-0 inline font-bold">
                Gender: {userData.gender}
              </p>
            </div>
            <div className="text-base sm:text-lg flex w-full my-1 items-center justify-between">
              <p className="p-0 m-0 inline font-bold">Age: {userData.age}</p>
            </div>
            <div className="text-base sm:text-lg flex w-full my-1 items-center justify-between">
              <p className="p-0 m-0 inline font-bold">
                Major: {userData.major}
              </p>
            </div>
            <div className="text-base sm:text-lg flex w-full my-1 items-center justify-between">
              <p className="p-0 m-0 inline font-bold">
                Shirt: {userData.shirt}
              </p>
            </div>
          </div>
        </Col>
        <Col
          md={6}
          className="bg-white rounded-2xl flex flex-col items-center justify-start m-2"
        >
          <div className="h-8 text-center w-10/12 text-transparent bg-clip-text bg-gradient-to-r from-[#64e8de] to-[#8a64eb] font-lexend text-md md:text-xl lg:text-2xl mt-4">
            TEAM
          </div>
          <div className="bg-gradient-to-r from-[#64e8de] to-[#8a64eb] h-1 w-10/12" />
          {create ? (
            <div className="flex flex-col justify-start items-center w-full">
              <div className="font-lexend text-lg font-bold mt-3">
                Team Name:
              </div>
              <input
                type="text"
                name="teamName"
                value={teamName}
                placeholder="New Team Name"
                className="border-2 font-lexend border-black w-10/12 p-1"
                onChange={(e) => {
                  setTeamName(e.target.value);
                }}
              />
              <div className="flex justify-evenly w-full m-3">
                <button
                  className="hover:scale-105 rounded-full bg-gradient-to-r from-pink-400 to-blue-300 text-lg font-lexend font-bold text-white text-center px-3 py-2"
                  onClick={async () => await renameTeam()}
                >
                  Create
                </button>
                <button
                  className="hover:scale-105 rounded-full bg-gradient-to-r from-[#64e8de] to-[#8a64eb] text-lg font-lexend font-bold text-white text-center px-3 py-2"
                  onClick={() => {
                    setCreate(false);
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          ) : join ? (
            <div className="flex flex-col justify-between items-center w-10/12">
              <div className="font-lexend font-bold text-lg mt-3">
                Enter a Team ID
              </div>
              <input
                type="text"
                name="id"
                value={id}
                placeholder="New Team ID"
                className="border-2 border-black w-full p-1 font-lexend"
                onChange={(e) => setId(e.target.value)}
              />
              <div className="flex justify-evenly w-full m-3">
                <button
                  className="hover:scale-105 rounded-full bg-gradient-to-r from-pink-400 to-blue-300 text-lg font-lexend font-bold text-white text-center px-3 py-2"
                  onClick={joinTeam}
                >
                  Join
                </button>
                <button
                  className="hover:scale-105 rounded-full bg-gradient-to-r from-[#64e8de] to-[#8a64eb] text-lg font-lexend font-bold text-white text-center px-3 py-2"
                  onClick={() => {
                    setJoin(false);
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          ) : inTeam ? (
            <div className="flex flex-col justify-center items-start w-11/12 p-4">
              <div>
                <p className="p-0 m-0 inline font-bold text-lg">Team Name:</p>{" "}
                {team?.name}
              </div>
              <div className="flex items-center justify-center">
                <p className="p-0 m-0 inline font-bold text-lg">Team ID:</p>
                <div className="flex items-center ml-1">
                  {userData.team}
                  <FaRegCopy
                    className="ml-2 text-blue-300 text-lg font-lexand hover:text-pink-400 hover:cursor-pointer"
                    onClick={() => {
                      copyToClipboard(userData.team);
                    }}
                  />
                </div>
              </div>
              <div className="font-lexend text-sm text-pink-400 text-start">
                Send this Team ID to your teammates to have them join your team!
              </div>
              <div className="flex flex-col">
                <div className="font-lexend text-lg my-2 font-bold">
                  Teammates:
                </div>
                {team?.members?.map((member, index) => (
                  <p className="font-lexend text-base mb-1" key={index}>
                    {member}
                  </p>
                ))}
              </div>
              <div className="font-lexend text-lg font-bold my-2">
                Rename your team:
              </div>
              <div className="w-full flex flex-row items-between justify-center">
                <input
                  type="text"
                  name="teamName"
                  value={teamName}
                  placeholder="New Team Name"
                  className="border-2 border-black w-2/3 p-1 font-lexend"
                  onChange={(e) => {
                    setTeamName(e.target.value);
                  }}
                />
                <button
                  className="w-1/4 ml-2 px-1 py-0 rounded-full bg-pink-400 text-white font-lexend font-bold text-lg hover:scale-105"
                  onClick={() => renameTeam()}
                >
                  Rename
                </button>
              </div>
              <div className="w-full flex justify-evenly items-center my-3">
                <button
                  className="hover:scale-105 rounded-full bg-gradient-to-r from-[#64e8de] to-[#8a64eb] text-lg font-lexend font-bold text-white text-center px-3 py-2"
                  onClick={leaveTeam}
                >
                  Leave Team
                </button>
                <button
                  className="hover:scale-105 rounded-full bg-gradient-to-r from-pink-400 to-blue-300 text-lg font-lexend font-bold text-white text-center px-3 py-2"
                  onClick={() => {
                    setJoin(true);
                  }}
                >
                  Join Team
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full">
              <div className="font-lexand text-center text-xl text-black font-bold w-full m-3">
                No Team
              </div>
              <div className="w-10/12 flex justify-evenly m-3">
                <button
                  className="hover:scale-105 rounded-full bg-gradient-to-r from-pink-400 to-blue-300 text-lg font-lexend font-bold text-white text-center px-3 py-2"
                  onClick={() => {
                    setJoin(true);
                  }}
                >
                  Join
                </button>
                <button
                  className="hover:scale-105 rounded-full bg-gradient-to-r from-[#64e8de] to-[#8a64eb] text-lg font-lexend font-bold text-white text-center px-3 py-2"
                  onClick={() => setCreate(true)}
                >
                  Create
                </button>
              </div>
            </div>
          )}
        </Col>
      </Row>
      <button
        onClick={() => handleLogOut()}
        className="hover:scale-105 rounded-full bg-gradient-to-r from-[#6ee2f5] to-[#6454f0] font-lexend font-bold text-md md:text-xl lg:text-3xl text-white text-center px-3 py-2 m-2"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
