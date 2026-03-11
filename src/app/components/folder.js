"use client";
import { useState } from "react";

const folders = [
  {
    id: "about",
    label: "About Me",
    color: "rgba(244, 241, 186, 1)",
    tabOffset: "6%",
  },
  {
    id: "portfolio",
    label: "Portfolio",
    color: "#f4bdbdff",
    tabOffset: "25%",
  },
  {
    id: "blog",
    label: "Blog",
    color: "#2d1a1a",
    labelColor: "#f5f0eb",
    tabOffset: "43%",
  },
  {
    id: "opensource",
    label: "Open Source",
    color: "#aeb770ff",
    tabOffset: "54%",
  },
];

const FOLDER_HEIGHT = 210;
const OVERLAP = 75;

export default function FolderDesktop() {
  const [hovered, setHovered] = useState(null);

  return (
    <main
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "#dce8f0" }}
    >
      {/* Filing cabinet stack */}
      <div
        className="relative w-full px-8"
        style={{
          maxWidth: "1500px",
          height: `${FOLDER_HEIGHT + (folders.length - 1) * (FOLDER_HEIGHT - OVERLAP) + 30}px`,
        }}
      >
        {folders.map((folder, i) => {
          const isHovered = hovered === folder.id;
          const topBase = i * (FOLDER_HEIGHT - OVERLAP);

          return (
            <div
              key={folder.id}
              className="absolute w-full cursor-pointer"
              style={{
                left: "32px",
                right: "32px",
                width: "calc(100% - 50px)",
                top: isHovered ? topBase - 12 : topBase,
                zIndex: isHovered ? 20 : i + 1,
                transition: "top 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={() => setHovered(folder.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => console.log("navigate to:", folder.id)}
            >
              {/* Rounded tab */}
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  left: folder.tabOffset,
                  width: "220px",
                  height: "33px",
                  backgroundColor: folder.color,
                  borderRadius: "12px 12px 0 0",
                  zIndex: 1, 
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                > 
                <span
                  style={{
                    fontFamily: "'Georgia', 'Times New Roman', serif",
                    fontStyle: "italic",
                    fontSize: "1.5rem",
                    color: folder.labelColor || "#2d1a1a",
                    letterSpacing: "0.02em",
                  }}
                >
                  {folder.label}
                </span>
              </div>

              {/* Folder strip */}
              <div
                style={{
                  position: "relative",
                  marginTop: "10px",
                  width: "100%",
                  height: `${FOLDER_HEIGHT}px`,
                  backgroundColor: folder.color,
                  borderRadius: "8px",
                  boxShadow: isHovered
                    ? "0 10px 36px rgba(0,0,0,0.2)"
                    : "0 3px 12px rgba(0,0,0,0.10)",
                  transition: "box-shadow 0.3s ease",
                  zIndex: 2,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Name label */}
      <div
        className="absolute bottom-5 left-15 font-mono text-lg"
        style={{ color: "#516e7dff", letterSpacing: "0.08em" }}
      >
        <span >~/</span>
        <span style={{ fontWeight: "bold" }}> Ruby Franco</span>
        <span> — software developer</span>
      </div>
    </main>
  );
}