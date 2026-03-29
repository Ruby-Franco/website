"use client";
import { useState, useEffect } from "react";

const folders = [
  {
    id: "about",
    label: "About Me",
    color: "rgba(244, 241, 186, 1)",
    tabOffset: "5%",
  },
  {
    id: "portfolio",
    label: "Portfolio",
    color: "#f4bdbdff",
    tabOffset: "22%",
  },
  {
    id: "experience",
    label: "Experience",
    color: "#2d1a1a",
    labelColor: "#f5f0eb",
    tabOffset: "40%",
  },
  {
    id: "extras",
    label: "Extras",
    color: "#aeb770ff",
    tabOffset: "58%",
  },
];

export default function FolderDesktop() {
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const FOLDER_HEIGHT = isMobile ? 110 : 210;
  const OVERLAP = isMobile ? 45 : 75;
  const TAB_HEIGHT = isMobile ? 30 : 36;
  const TAB_WIDTH = isMobile ? 130 : 220;
  const FONT_SIZE = isMobile ? "0.85rem" : "1.5rem";

  return (
    <main
      className="relative w-full h-screen flex items-center justify-center"
      style={{ background: "#dce8f0" }}
    >
      <div
        className="relative w-full"
        style={{
          maxWidth: "1500px",
          paddingLeft: "16px",
          paddingRight: "16px",
          height: `${TAB_HEIGHT + FOLDER_HEIGHT + (folders.length - 1) * (FOLDER_HEIGHT - OVERLAP) + 50}px`,
        }}
      >
        {folders.map((folder, i) => {
          const isHovered = hovered === folder.id;
          const topBase = TAB_HEIGHT + i * (FOLDER_HEIGHT - OVERLAP);

          return (
            <div
              key={folder.id}
              className="absolute cursor-pointer"
              style={{
                left: "16px",
                right: "16px",
                width: "calc(100% - 32px)",
                top: isHovered ? topBase - 12 : topBase,
                zIndex: isHovered ? 20 : i + 1,
                transition: "top 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={() => setHovered(folder.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleClick(folder.id)}
            >
              {/* Rounded tab */}
              <div
                style={{
                  position: "absolute",
                  top: -TAB_HEIGHT,
                  left: folder.tabOffset,
                  width: `${TAB_WIDTH}px`,
                  maxWidth: "42%",
                  height: `${TAB_HEIGHT}px`,
                  backgroundColor: folder.color,
                  borderRadius: "12px 12px 0 0",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  filter: "brightness(0.88)",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                }}
                > 
                <span
                  style={{
                    fontFamily: "'Georgia', 'Times New Roman', serif",
                    fontStyle: "italic",
                    fontSize: FONT_SIZE,
                    color: folder.labelColor || "#2d1a1a",
                    letterSpacing: "0.02em",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {folder.label}
                </span>
              </div>

              {/* Folder strip */}
              <div
                style={{
                  position: "relative",
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
        className="absolute bottom-5 left-50 font-mono"
        style={{
          color: "#516e7dff",
          letterSpacing: "0.1em",
          fontSize: isMobile ? "0.8rem" : "1.3rem",
        }}
      >
        <span>~/</span>
        <span style={{ fontWeight: "bold" }}> Ruby Franco</span>
        <span> — software developer, LA based</span>
      </div>
    </main>
  );
}