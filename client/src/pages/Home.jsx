import React from "react";
import "../assets/styles/home.css";
import { Box, Button, ListItem, Typography } from "@mui/material";
import { LuArrowUpRight, LuHand } from "react-icons/lu";
import LogoLoop from "../components/home/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const Home = () => {
  const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  {text:"Designing", src: "", alt: "Designing", href: "https://company1.com" },
  {text:"Graphics", src: "", alt: "UI/UX", href: "https://company2.com" },
  {text:"Backend", src: "", alt: "System", href: "https://company3.com" },
];


  return (
   <>
    <Box
      className="main"
      sx={{
        backgroundColor: "#0a0b0c",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box className="inner-wrapper">
        <Typography
          variant="h1"
          sx={{
            fontSize: "16px",
            color: "#fff",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 1,
          }}
        >
          <LuHand
            className="hand-wave"
            size={20}
            style={{ color: "#b5fe6c" }}
          />{" "}
          Hey! It's me Harsh,
        </Typography>
        <Typography
          className="headline"
          variant="h1"
          sx={{
            fontSize: "72px",
            color: "#fff",
            width: "70%",
            lineHeight: "75px",
            marginTop: "2%",
            marginBottom: "4%",
          }}
        >
          Crafting{" "}
          <span style={{ color: "#b5fe6c" }}>purpose driven experiences</span>{" "}
          that inspire & engage.
        </Typography>
      </Box>

      <Box
        className="mobile-bottom"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          className="mobile-bottom-inner"
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            padding: "15px",
          }}
        >
          {/* LINK PAGE */}
          <Box sx={{ color: "#8c8c9d", display: "flex" }} className="all-links">
            <ListItem
              sx={{
                textTransform: "uppercase",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              LinkedIn <LuArrowUpRight size={20} />
            </ListItem>
            <ListItem
              sx={{
                textTransform: "uppercase",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              GitHub <LuArrowUpRight size={20} />
            </ListItem>
            <ListItem
              sx={{
                textTransform: "uppercase",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Benance <LuArrowUpRight size={20} />
            </ListItem>
            <ListItem
              sx={{
                textTransform: "uppercase",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Leetcode <LuArrowUpRight size={20} />
            </ListItem>
          </Box>

          {/* SHORT SLOGAN */}
          <Box
            className="short-slogan-box"
            sx={{
              width: "45%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: "16px", color: "#8c8c9d" }}
            >
              I work with brands globally to build pixel-perfect, engaging, and
              accessible digital experiences that drive results and achieve
              business goals.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              className="knowme-button"
            >
              Know Me Better
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Logos Animation Container */}
      <Box className="emp-space-divider"></Box>
    </Box>
     <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={100}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#0a0b0c"
        ariaLabel="Technology partners"
      />
   </>
  );
};

export default Home;
