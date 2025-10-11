"use client";

import { motion, useTime, useTransform } from "framer-motion";
import { Button } from "./ui/button";

export default function BorderBeamButton() {
  const time = useTime();

  // rotasi 0 → 360 derajat tiap 3 detik
  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });

  // buat conic-gradient dinamis
  const rotatingGradient = useTransform(rotate, (deg) =>
    `conic-gradient(from ${deg}deg,
      #ffffff,
      #c0c0c0,
      #00b4ff,
      #999999,
      #ffffff)`
  );

  return (
    <div className="flex items-center justify-center h-10  mt-10 text-white">
      <div className="relative group">
        {/* Lapisan efek border */}
        <motion.div
          style={{
            background: rotatingGradient,
          }}
          className="
            absolute -inset-[2px] rounded-xl opacity-70 blur-sm
            transition-all duration-500 group-hover:blur-md group-hover:opacity-90
          "
        />

        {/* Glow luar */}
        <motion.div
          style={{
            background: rotatingGradient,
            filter: "blur(30px)",
          }}
          className="
            absolute -inset-[10px] rounded-xl opacity-10
            group-hover:opacity-20 transition-all duration-500
          "
        />

        {/* Tombol utama */}
        <Button
          variant="outline"
          className="
            relative z-10 border border-white/20 bg-gradient-to-b from-neutral-900 to-black
            text-white font-medium px-8 py-3 rounded-xl
            transition-all duration-300 hover:scale-[1.03] hover:border-white/40
          "
        >
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            NOOB
          </span>
        </Button>
      </div>
    </div>
  );
}

