/* eslint-disable */
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { FaChevronDown } from "react-icons/fa";

interface props {
  children?: any;
  style?: any;
  className?: any;
  "aria-labelledby"?: any;
}

interface props_toggle {
  children: any;
  onClick: any;
}

const CustomToggle = React.forwardRef(
  ({ children, onClick }: props_toggle, ref: any) => (
    <div className="flex flex-row items-center justify-between text-center w-full bg-transparent !border-2 border-solid border-black !rounded-full focus:border-black active:border-black py-0 px-2">
      <a
        className="!text-lg w-11/12 whitespace-nowrap !font-lexend flex justify-start items-center text-black no-underline overflow-hidden text-left text-base"
        href=""
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children}
      </a>
      <FaChevronDown className="text-xs" />
    </div>
  )
);

const CustomMenu = React.forwardRef(
  (
    { children, style, className, "aria-labelledby": labeledBy }: props,
    ref: any
  ) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        className={`${className} w-full `}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="focus:!ring-0 "
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled h-[20vh] overflow-y-scroll">
          {React.Children.toArray(children).filter(
            (child: any) =>
              !value ||
              child.props.children.toLowerCase().includes(value.toLowerCase())
          )}
        </ul>
      </div>
    );
  }
);

interface props {
  schools: Array<string>;
  school: string;
  handleSchool: Function;
}

const Schools = ({ schools, school, handleSchool }: props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {school}
      </Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu as any}>
        {schools.map((school, index) => (
          <Dropdown.Item
            key={index}
            eventKey={index}
            onClick={() => handleSchool(school)}
            className="hover:!bg-register-top hover:!text-white !whitespace-normal"
          >
            {school}
          </Dropdown.Item>
        ))}
        <Dropdown.Item>Hello</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Schools;
