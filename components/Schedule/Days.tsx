import React from "react";
import { Activity, Speaker, Workshop, Event, Time } from "./SchedBlocks";

export const Saturday = () => {
  return (
    <table className="table-fixed w-full border-collapse">
      <tbody>
        <th className="w-1/6" />
        <tr>
          <Time t="8:30 AM" />
        </tr>
        <tr>
          <Time t="9:00 AM" />
          <td rowSpan={4}>
            <Event
              title="Hacker Check-in"
              loc="MSE 116"
              min="120"
              time="9:00 AM - 11:00 AM"
            />
          </td>
        </tr>
        <tr>
          <Time t="9:30 AM" />
        </tr>
        <tr>
          <Time t="10:00 AM" />
        </tr>
        <tr>
          <Time t="10:30 AM" />
          <td rowSpan={1}>
            <Event
              title="Opening Ceremony"
              loc="MSE 116"
              min="30"
              time="10:30 AM - 11:00 AM"
            />
          </td>
        </tr>
        <tr>
          <Time t="11:00 AM" />
          <td rowSpan={1}>
            <Activity
              title="Icebreakers"
              loc="MSE 116"
              min="30"
              time="11:00 AM - 11:30 AM"
            />
          </td>
          <td rowSpan={2}>
            <Event
              title="Walk-ins Check-in"
              loc="Bytes"
              min="60"
              time="11:00 AM - 12:00 PM"
            />
          </td>
        </tr>
        <tr>
          <Time t="11:30 AM" />
          <td rowSpan={2}>
            <Workshop
              title="How to Hackathon"
              lead="Angelika Bermudez"
              loc="WCH 205/206"
              time="11:30 AM -12:30 PM"
            />
          </td>
        </tr>
        <tr>
          <Time t="12:00 PM" />
        </tr>
        <tr>
          <Time t="12:30 PM" />
          <td rowSpan={2}>
            <Event
              title="Lunch"
              loc="Bytes"
              min="60"
              time="12:30 PM - 1:30 PM"
            />
          </td>
        </tr>
        <tr>
          <Time t="1:00 PM" />
        </tr>
        <tr>
          <Time t="1:30 PM" />
          <td rowSpan={2}>
            <Speaker
              title="Artificial Intelligence"
              lead="Jack O'Grady"
              loc="Bourns A265"
              time="1:30 PM - 2:30 PM"
            />
          </td>
        </tr>
        <tr>
          <Time t="2:00 PM" />
        </tr>
        <tr>
          <Time t="2:30 PM" />
          <td rowSpan={2}>
            <Workshop
              title="UI/UX"
              lead="Trinah Maulion & Gabriela Alvarez"
              loc="WCH 205/206"
              time="2:30 PM - 3:30 PM"
            />
          </td>
        </tr>

        <tr>
          <Time t="3:00 PM" />
        </tr>
        <tr>
          <Time t="3:30 PM" />
          <td rowSpan={2}>
            <Speaker
              title="How to Publish a Project"
              lead="Nic Stone"
              loc="Bourns A265"
              time="3:30 PM - 4:30 PM"
            />
          </td>
        </tr>
        <tr>
          <Time t="4:00 PM" />
        </tr>
        <tr>
          <Time t="4:30 PM" />

          <td rowSpan={2}>
            <Workshop
              title="Intro to Game Dev"
              lead="Westin Montano"
              loc="WCH 205/206"
              time="4:30 PM - 5:30 PM"
            />
          </td>
        </tr>
        <tr>
          <Time t="5:00 PM" />
        </tr>
        <tr>
          <Time t="5:30 PM" />
          <td rowSpan={2}>
            <Workshop
              title="Intro to React"
              lead="Divyank Shah"
              loc="Bourns A265"
              time="5:30 PM - 6:30 PM"
            />
          </td>
        </tr>
        <tr>
          <Time t="6:00 PM" />
        </tr>
        <tr>
          <Time t="6:30 PM" />
          <td rowSpan={2}>
            <Workshop
              title="Intro to Arduino"
              lead="Joshua Candelaria"
              loc="Bourns A265"
              time="6:30 PM - 7:30 PM"
            />
          </td>
        </tr>
        <tr>
          <Time t="7:00 PM" />
        </tr>
        <tr>
          <Time t="7:30 PM" />
          <td rowSpan={2}>
            <Event
              title="Dinner"
              loc="Bytes"
              min="60"
              time="7:30 PM - 8:30 PM"
            />
          </td>
        </tr>
        <tr>
          <Time t="8:00 PM" />
          <td rowSpan={2}></td>
        </tr>
        <tr>
          <Time t="8:30 PM" />
          <td rowSpan={2}>
            <Event
              title="Intern Panel"
              loc="WCH 205/206"
              min="60"
              time="8:30 PM - 9:30 PM"
            />
          </td>
        </tr>
        <tr>
          <Time t="9:00 PM" />
        </tr>
        <tr>
          <Time t="9:30 PM" />
          <td rowSpan={2}>
            <Event
              title="MLH CTF Event"
              loc="Bourns A265"
              min="60"
              time="9:30 PM - 10:30 PM"
            />
          </td>
        </tr>
        <tr>
          <Time t="10:00 PM" />
          <td rowSpan={2}>
            <Workshop
              title="Resume Workshop"
              lead="Divyank Shah"
              loc="WCH 205/206"
              time="10:00 PM - 11:00 PM"
            />
          </td>
        </tr>
        <tr>
          <Time t="9:30 PM" />
        </tr>
        <tr>
          <Time t="10:00 PM" />
        </tr>
        <tr>
          <Time t="10:30 PM" />
        </tr>
        <tr>
          <Time t="11:00 PM" />
          <td rowSpan={2}>
            <Speaker
              title="Sustainability in Tech"
              lead="Samarth Srinivasa"
              loc="Bourns A265"
              time="11:00 PM - 12:00 AM"
            />
          </td>
        </tr>
        <tr>
          <Time t="11:30 PM" />
        </tr>
        <tr>
          <Time t="12:00 AM" />
        </tr>
      </tbody>
    </table>
  );
};

export const Sunday = () => {
  return (
    <table className="table-fixed w-full border-collapse">
      <tbody>
        <th className="w-1/6" />
        <tr>
          <Time t="12:00 AM" />
          <td rowSpan={2}>
            <Activity
              title="Hot Choco & Snacks"
              loc="WCH127"
              min="60"
              time="12:00 AM - 1:00 AM"
            />
          </td>
          <td rowSpan={2}>
            <Activity
              title="Super Smash Bros Tournament"
              loc="WCH127"
              min="60"
              time="12:00 AM - 1:00 AM"
            />
          </td>
        </tr>
        <tr>
          <Time t="12:30 AM" />
        </tr>
        <tr>
          <Time t="1:00 AM" />
          <td rowSpan={4}>
            <Activity
              title="Movie Night"
              loc="WCH 205/206"
              min="120"
              time="1:00 AM - 3:00 AM"
            />
          </td>
        </tr>
        <tr>
          <Time t="1:30 AM" />
        </tr>
        <tr>
          <Time t="2:00 AM" />
        </tr>
        <tr>
          <Time t="2:30 AM" />
        </tr>
        <tr>
          <Time t="3:00 AM" />
          <td rowSpan={1}>
            <Activity
              title="Kahoot"
              loc="WCH 205/206"
              min="30"
              time="3:00 AM - 3:30 AM"
            />
          </td>
        </tr>
        <tr>
          <Time t="3:30 AM" />
          <td rowSpan={1}>
            <Activity
              title="TypeRacer Contest"
              loc="WCH 205/206"
              min="30"
              time="3:30 AM - 4:00 AM"
            />
          </td>
        </tr>
        <tr>
          <Time t="4:00 AM" />
        </tr>
        <tr>
          <Time t="4:30 AM" />
        </tr>
        <tr>
          <Time t="5:00 AM" />
        </tr>
        <tr>
          <Time t="5:30 AM" />
        </tr>
        <tr>
          <Time t="6:00 AM" />
        </tr>
        <tr>
          <Time t="6:30 AM" />
        </tr>
        <tr>
          <Time t="7:00 AM" />
        </tr>
        <tr>
          <Time t="7:30 AM" />
        </tr>
        <tr>
          <Time t="8:00 AM" />
        </tr>
        <tr>
          <Time t="8:30 AM" />
          <td rowSpan={2}>
            <Event
              title="Breakfast"
              loc="Bytes"
              min="60"
              time="8:30 AM - 9:30 AM"
            />
          </td>
        </tr>
        <tr>
          <Time t="9:00 AM" />
        </tr>
        <tr>
          <Time t="9:30 AM" />
        </tr>
        <tr>
          <Time t="10:00 AM" />
        </tr>
        <tr>
          <Time t="10:30 AM" />
        </tr>
        <tr>
          <Time t="11:00 AM" />
          <td rowSpan={1}>
            <Event title="Soft Deadline" loc="N/A" min="30" time="11:00 AM" />
          </td>
        </tr>
        <tr>
          <Time t="11:30 AM" />
          <td rowSpan={1}>
            <Event
              title="Deadline for Projects"
              loc="N/A"
              min="30"
              time="12 PM"
            />
          </td>
        </tr>
        <tr>
          <Time t="12:00 PM" />
        </tr>
        <tr>
          <Time t="12:30 PM" />
          <td rowSpan={2}>
            <Event
              title="Lunch"
              loc="Bytes"
              min="60"
              time="12:00 PM - 1:00 PM"
            />
          </td>
        </tr>
        <tr>
          <Time t="1:00 PM" />
          <td rowSpan={4}>
            <Event
              title="Judging"
              loc="WCH 205/206"
              min="120"
              time="1:00 PM - 3:00 PM"
            />
          </td>
        </tr>
        <tr>
          <Time t="1:30 PM" />
        </tr>
        <tr>
          <Time t="2:00 PM" />
        </tr>
        <tr>
          <Time t="2:30 PM" />
        </tr>
        <tr>
          <Time t="3:00 PM" />
          <td rowSpan={2}>
            <Event
              title="Closing Ceremony"
              loc="MSE 116"
              min="60"
              time="3:00 PM - 4:00 PM"
            />
          </td>
        </tr>
        <tr>
          <Time t="3:30 PM" />
        </tr>
        <tr>
          <Time t="4:00 PM" />
        </tr>
      </tbody>
    </table>
  );
};
