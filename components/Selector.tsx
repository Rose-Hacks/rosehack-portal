import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FaChevronDown } from "react-icons/fa";

interface props {
  options: string[];
  user: any;
  field: string;
  handleInput: Function;
}

const Selector = ({ options, user, field, handleInput }: props) => {
  return (
    <Dropdown className="w-full">
      <Dropdown.Toggle
        variant=""
        id=""
        className="!font-lexend !flex justify-center items-center text-black after:!hidden w-full bg-transparent !border-4 border-solid border-black !rounded-xl"
      >
        {user[field]}
        <FaChevronDown className="mx-2" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-full font-lexend active:bg-white">
        {options.map((option, index) => (
          <Dropdown.Item
            className="font-lexend text-black hover:!bg-register-top hover:!text-white !whitespace-normal"
            key={index}
            onClick={() => handleInput(field, option)}
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Selector;
