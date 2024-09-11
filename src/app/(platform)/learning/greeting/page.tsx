"use client";
import { useCurrentTime } from "@/utils/getters/date";

export default function Greeting() {
  const { hours, minutes, seconds } = useCurrentTime();
  const isMorning = Number(hours) >= 6 && Number(hours) < 12;
  const isAfternoon = Number(hours) >= 12 && Number(hours) < 18;
  const isNight = Number(hours) >= 18 || Number(hours) < 6;
  return (
    <div
      className={`flex flex-col justify-center items-center h-screen w-full bg-gradient-to-r ${isMorning && "from-indigo-400 to-cyan-400 text-white"} ${isAfternoon && "from-red-500 to-orange-500 text-white"} ${isNight && "from-gray-700 to-white"}`}
    >
      <p className="text-5xl">
        {hours}:{minutes}:{seconds}
      </p>
      {isMorning && "Good Morning😉"}
      {isAfternoon && "Good afternoon😁"}
      {isNight && "Good night😴"}
    </div>
  );
}
