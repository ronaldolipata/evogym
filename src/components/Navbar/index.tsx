import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/25/solid";
import Logo from "@/assets/Logo.png";

type Props = {};

export default function Navbar({}: Props) {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}></div>
    </nav>
  );
}
