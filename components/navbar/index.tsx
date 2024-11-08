"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../global/navbar-dashboard"; // Adjust the path as necessary
import { cn } from "@/lib/utils";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
       <div className="flex items-center justify-between mb-4 border-solid border-2 bg-gradient-to-t from-transparent via-violet-700 to-transparent rounded-full">
        <span className="px-10">
        <p className='font-extrabold' style={{ fontSize: 24 }}>fécond</p>
        </span>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Nodes">
          {/* Empty for now */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Knotes">
          {/* Empty for now */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Retro">
          {/* Empty for now */}
        </MenuItem>
      </Menu>
      </div>
    </div>
  );
};

export default Navbar;