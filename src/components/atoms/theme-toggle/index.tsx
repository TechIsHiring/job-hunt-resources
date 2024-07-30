"use client";

import * as React from "react";
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Icon } from "../icon";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <Button className="dark:bg-bgdarkmode" variant="outline" size="icon">
      <Icon
        icon={LuSun}
        iconAlt="Light mode Icon"
        onClick={() => setTheme("dark")}
        className="dark:hidden h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Icon
        icon={FaRegMoon}
        iconAlt="Dark Mode Icon"
        onClick={() => setTheme("light")}
        className="hidden dark:block absolute bg-transparent h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
