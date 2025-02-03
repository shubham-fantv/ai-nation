"use client";

import { Button } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { openLink } from "../utils/common";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const KeyboardSimulator = () => {
  const [text, setText] = useState("");
  const router = useRouter();
  const [currentKey, setCurrentKey] = useState("");
  const [started, setStarted] = useState(false);
  const fullText = "Welcome to Agent Nation";
  const audioRef = useRef(null);

  const keys = [
    ["esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "+"],
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"],
    ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
    ["caps lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', "return"],
    ["shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "shift"],
    ["fn", "control", "option", "command", "space", "command", "option", "←", "↑", "→"],
  ];

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio("/audio/key-press.mp3");
    audioRef.current.volume = 0.3;
  }, []);

  const playKeySound = () => {
    if (audioRef.current) {
      const sound = audioRef.current.cloneNode();
      sound.play().catch((error) => {
        console.log("Audio playback failed:", error);
      });
    }
  };

  // Typing effect
  useEffect(() => {
    if (!started) return;

    let index = 0;
    const typeNextCharacter = () => {
      if (index < fullText.length) {
        const char = fullText[index];
        setCurrentKey(char.toUpperCase());
        playKeySound();
        setText((prev) => prev + char);
        index++;
        setTimeout(() => setCurrentKey(""), 200);
        setTimeout(typeNextCharacter, 300);
      } else {
        Cookies.set("isLaunched", "true", { expires: 360 });
        router.push("/");
      }
    };

    typeNextCharacter();
  }, [started]);

  const getKeyWidth = (key) => {
    switch (key) {
      case "+":
        return "w-32";
      case "space":
        return "w-[214px]";
      case "caps lock":
        return "w-36";
      case "shift":
        return "w-[173px]";
      case "tab":
        return "w-32";
      case "delete":
        return "w-32";
      case "return":
        return "w-32";
      case "control":
        return "w-28";
      case "option":
        return "w-24";
      case "command":
        return "w-28";
      default:
        return "w-16";
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/bg1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {started ? (
        <div>
          <div className="w-full pt-10 min-h-screen flex flex-col items-center justify-center">
            <div
              style={{ fontFamily: "Tiny" }}
              className="mb-12 h-16 flex items-center justify-center text-7xl font-bold text-white uppercase"
            >
              {text}
              {/* <span className="animate-pulse">|</span> */}
            </div>

            <div className="space-y-2" style={{ boxShadow: "0px 0px 84px 0px #0000001A" }}>
              {keys.map((row, rowIndex) => (
                <div key={rowIndex} className="flex space-x-2 justify-center">
                  {row.map((key, keyIndex) => {
                    const isActive = key.toUpperCase() === currentKey;
                    const width = getKeyWidth(key);

                    return (
                      <div
                        key={`${rowIndex}-${keyIndex}`}
                        style={{
                          border: "1px solid #4B4A4A",
                          background:
                            "linear-gradient(1deg, #4B4A4A 0%, rgba(255, 255, 255, 0) 100%)",
                        }}
                        className="rounded-lg"
                      >
                        <div
                          className={`${width} h-16 flex items-center justify-center transition-all duration-150 ${
                            isActive
                              ? "bg-[#5A5A5A] text-4xl opacity-100 text-white rounded-lg"
                              : "text-[#FFF] opacity-70  text-sm  border border-[#242424] rounded-lg"
                          }`}
                        >
                          {key}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <Button
            variant="contained"
            className={`text-sm font-bold text-black rounded-xl`}
            style={{
              fontWeight: "500",
              fontSize: "16px",
              fontFamily: "Nohemi",
              borderRadius: "12px",
              border: "1px solid #FFF",
              alignItems: "center",
              justifyContent: "center",
              height: "40px",
              cursor: "pointer",
              background: "#FFF",
              color: "#000000",
              paddingInline: "100px",
              boxShadow: "0px 0px 36px 0px #FFFFFFD9",
            }}
            onClick={() => setStarted(true)}
          >
            Launch App
          </Button>
        </div>
      )}
    </div>
  );
};

export default KeyboardSimulator;
