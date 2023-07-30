"use client";
import { useTheme } from "next-themes";
import { CiDark } from "react-icons/ci";
import { TfiShine } from "react-icons/tfi";
const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "dark" ? (
        <TfiShine onClick={() => setTheme("light")} size={25} />
      ) : (
        <CiDark onClick={() => setTheme("dark")} size={25} />
      )}
    </div>
  );
};
export default ThemeChanger;
