import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/25/solid";
import Logo from "@/assets/Logo.png";

type Props = {};

export default function Navbar({}: Props) {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="evogym logo" />
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <a href="#">
                  <li>Home</li>
                </a>
                <a href="#">
                  <li>Benefits</li>
                </a>
                <a href="#">
                  <li>Our Classes</li>
                </a>
                <a href="#">
                  <li>Contact Us</li>
                </a>
              </div>
              <div className={`${flexBetween} gap-8`}>
                <a href="#">
                  <li>Sign In</li>
                </a>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
