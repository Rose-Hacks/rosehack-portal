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
    <Dropdown className="!font-lexend !flex justify-center items-center text-black bg-transparent !border-2 border-solid border-black !rounded-full px-2 grow-0 !w-full">
      <Dropdown.Toggle
        variant=""
        id=""
        className="!w-full after:!hidden overflow-hidden text-left !font-lexend !flex justify-start items-center text-black bg-transparent !border-0 focus:border-0 p-0 text-base"
      >
        <p className="p-0 m-0">{user[field]}</p>
        <FaChevronDown className="pl-2" />
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
