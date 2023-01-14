import React from "react";
import Modal from "react-bootstrap/Modal";

interface WorkshopProps {
  title: string;
  loc: string;
  lead: string;
  time: string;
  show: boolean;
  onHide: any;
}

interface SpkProps {
  title: string;
  loc: string;
  lead: string;
  time: string;
  show: boolean;
  onHide: any;
}

interface EventProps {
  title: string;
  loc: string;
  time: string;
  show: boolean;
  onHide: any;
}

export function WorkshopPopup(props: WorkshopProps) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <div className="items-center text-center bg-white/75 ">
        <p className="text-rose-pink font-bold text-3xl m-2">{props.title}</p>
        <div className="text-rose-pink/75 text-xl">
          <p className="text-sm m-2"> {props.time}</p>
          <p className="text-xl font-bold m-0">Location:</p>
          <p className="mb-4">{props.loc}</p>
          <p className="font-lexend text-xl font-bold m-0">Workshop Host:</p>
          <p>{props.lead}</p>
        </div>
      </div>
    </Modal>
  );
}

export function SpeakerPopup(props: SpkProps) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <div className="items-center text-center bg-team-yellow/75 ">
        <p className="text-rose-pink font-bold text-3xl m-2">{props.title}</p>
        <div className="text-rose-pink/75  text-xl">
          <p className="text-sm m-2"> {props.time}</p>
          <p className="text-xl font-bold m-0">Location:</p>
          <p className="mb-4">{props.loc}</p>
          <p className="font-lexend text-xl font-bold m-0">Speaker:</p>
          <p>{props.lead}</p>
        </div>
      </div>
    </Modal>
  );
}

export function EventPopup(props: EventProps) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <div className="items-center text-center bg-schedule-blue/75 ">
        <p className="font-bold text-white text-3xl m-2">{props.title}</p>
        <div className="text-slate-200 text-xl">
          <p className="text-sm m-2"> {props.time}</p>
          <p className="text-xl font-bold m-0">Location:</p>
          <p className="mb-4">{props.loc}</p>
        </div>
      </div>
    </Modal>
  );
}

export function ActPopup(props: EventProps) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <div className="items-center text-center bg-schedule-purple/75 ">
        <p className="font-bold text-white text-3xl m-2">{props.title}</p>
        <div className="text-slate-200 text-xl">
          <p className="text-sm m-2"> {props.time}</p>
          <p className="text-xl font-bold m-0">Location:</p>
          <p className="mb-4">{props.loc}</p>
        </div>
      </div>
    </Modal>
  );
}
