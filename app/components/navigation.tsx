"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navdata = ["about", "protfolio", "contact", "github"];

const Navigation = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const togglehandler = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="flex justify-between">
      <div>
        <h1>logo</h1>
      </div>
      <ul className="flex">
        {navdata.map((item, index) => (
          <li key={index} className="mx-2">
            <Link href={item}>{item} </Link>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
