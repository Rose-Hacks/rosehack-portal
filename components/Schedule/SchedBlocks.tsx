import React, { useState } from "react";
import { WorkshopPopup, EventPopup, SpeakerPopup, ActPopup } from "./Modals";

interface EventProps {
  title: string;
  loc: string;
  min: string;
  time: string;
}

interface SpkProps {
  title: string;
  lead: string;
  loc: string;
  time: string;
}

interface ActProps {
  title: string;
  loc: string;
  min: string;
  time: string;
}

interface WorkshopProps {
  title: string;
  loc: string;
  lead: string;
  time: string;
}

interface TimeProps {
  t: string;
}

export function Time(props: TimeProps) {
  return (
    <div className="border-b-2 items-center bg-white/50 text-white font-lexend text-center md:px-4 pt-4 ">
      <p className="text-white text-base">{props.t}</p>
    </div>
  );
}

export function Workshop(props: WorkshopProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <a
      href="#!"
      className="service !no-underline"
      onClick={() => setIsOpen(true)}
    >
      <div className="border-2 border-white/50 h-48 md:h-28 text-center bg-white rounded mx-2 text-white font-lexend">
        <p className="text-rose-pink text-md md:text-xl pt-2">{props.title}</p>
        <div onClick={(e) => e.stopPropagation()}>
          <WorkshopPopup
            show={isOpen}
            onHide={() => setIsOpen(false)}
            title={props.title}
            lead={props.lead}
            loc={props.loc}
            time={props.time}
          />
        </div>
      </div>
    </a>
  );
}

export function Speaker(props: SpkProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <a
      href="#!"
      className="service !no-underline"
      onClick={() => setIsOpen(true)}
    >
      <div className="border-2 border-white/50 h-48 md:h-32 text-center bg-team-yellow rounded mx-2 text-white font-lexend">
        <p className="text-rose-pink text-md md:text-xl pt-2">{props.title}</p>
        <div onClick={(e) => e.stopPropagation()}>
          <SpeakerPopup
            show={isOpen}
            onHide={() => setIsOpen(false)}
            title={props.title}
            lead={props.lead}
            loc={props.loc}
            time={props.time}
          />
        </div>
      </div>
    </a>
  );
}

export function Activity(props: ActProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (props.min === "30") {
    return (
      <a
        href="#!"
        className="service !no-underline"
        onClick={() => setIsOpen(true)}
      >
        <div className="border-2 border-white/50  h-24 md:h-16 justify-center text-center items-center bg-rose-purple rounded mx-2 text-white font-lexend">
          <p className="text-md md:text-xl pt-1 mb-0 p-0">{props.title}</p>
          <div onClick={(e) => e.stopPropagation()}>
            <ActPopup
              show={isOpen}
              onHide={() => setIsOpen(false)}
              title={props.title}
              loc={props.loc}
              time={props.time}
            />
          </div>
        </div>
      </a>
    );
  }
  if (props.min === "60") {
    return (
      <a
        href="#!"
        className="service !no-underline"
        onClick={() => setIsOpen(true)}
      >
        <div className="border-2 border-white/50  h-48 md:h-32 justify-center text-center items-center bg-rose-purple rounded mx-2 text-white font-lexend">
          <p className="text-md md:text-xl pt-2 mb-0 p-0">{props.title}</p>
          <div onClick={(e) => e.stopPropagation()}>
            <ActPopup
              show={isOpen}
              onHide={() => setIsOpen(false)}
              title={props.title}
              loc={props.loc}
              time={props.time}
            />
          </div>
        </div>
      </a>
    );
  }
  return (
    <a
      href="#!"
      className="service !no-underline"
      onClick={() => setIsOpen(true)}
    >
      <div className=" border-2 border-white/50 h-[17rem] justify-center text-center items-center bg-rose-purple rounded mx-2 text-white font-lexend">
        <p className="text-md md:text-xl pt-2 mb-0 p-0">{props.title}</p>
        <div onClick={(e) => e.stopPropagation()}>
          <ActPopup
            show={isOpen}
            onHide={() => setIsOpen(false)}
            title={props.title}
            loc={props.loc}
            time={props.time}
          />
        </div>
      </div>
    </a>
  );
}

export function Event(props: EventProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (props.min === "30") {
    return (
      <a
        href="#!"
        className="service !no-underline"
        onClick={() => setIsOpen(true)}
      >
        <div className="border-2 border-white/50 h-24 md:h-16 justify-center text-center items-center bg-schedule-blue rounded mx-2 text-white font-lexend">
          <p className="text-md md:text-xl pt-2 mb-0 p-0">{props.title}</p>
          <div onClick={(e) => e.stopPropagation()}>
            <EventPopup
              show={isOpen}
              onHide={() => setIsOpen(false)}
              title={props.title}
              loc={props.loc}
              time={props.time}
            />
          </div>
        </div>
      </a>
    );
  }
  if (props.min === "120") {
    return (
      <a
        href="#!"
        className="service !no-underline"
        onClick={() => setIsOpen(true)}
      >
        <div className="border-2 border-white/50  h-[24rem] md:h-[17rem] justify-center text-center items-center bg-schedule-blue rounded mx-2 text-white font-lexend">
          <p className="text-md md:text-xl pt-2 mb-0 p-0">{props.title}</p>
          <div onClick={(e) => e.stopPropagation()}>
            <EventPopup
              show={isOpen}
              onHide={() => setIsOpen(false)}
              title={props.title}
              loc={props.loc}
              time={props.time}
            />
          </div>
        </div>
      </a>
    );
  }
  return (
    <a
      href="#!"
      className="service !no-underline"
      onClick={() => setIsOpen(true)}
    >
      <div className="border-2 border-white/50  h-48 md:h-32 justify-center text-center items-center bg-schedule-blue rounded mx-2 text-white font-lexend">
        <p className="text-md md:text-xl pt-2 mb-0 p-0">{props.title}</p>
        <div onClick={(e) => e.stopPropagation()}>
          <EventPopup
            show={isOpen}
            onHide={() => setIsOpen(false)}
            title={props.title}
            loc={props.loc}
            time={props.time}
          />
        </div>
      </div>
    </a>
  );
}
