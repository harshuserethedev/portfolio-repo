import { Typography, Box, Button } from "@mui/material";
import { LuSparkle } from "react-icons/lu";
import React from "react";
import '../../assets/styles/myprojects.css'

const projects = [
  {
    title: "Aora",
    tag: "Development",
    year: "2024",
    link: "projects/aora",
    bg: "rgba(254 243 199)",
    img: "/_next/image?url=%2Fprojects%2Faora.webp&w=1200&q=100",
    margin:"0%"
  },
  {
    title: "Code Screenshot",
    tag: "Development & Design",
    year: "2024",
    link: "projects/code-screenshot",
    bg: "rgba(251 207 232)",
    img: "/_next/image?url=%2Fprojects%2Fcodescreenshot.webp&w=1200&q=100",
    margin:"10%"
  },
  {
    title: "iPhone 15 Pro",
    tag: "Development & Design",
    year: "2024",
    link: "projects/iphone",
    bg: "rgba(231 229 228)",
    img: "/_next/image?url=%2Fprojects%2Fiphone.webp&w=1200&q=100",
    margin:"0%"
  },
  {
    title: "Ochi Design",
    tag: "Development & Design",
    year: "2024",
    link: "projects/ochi-design",
    bg: "rgba(187 247 208)",
    img: "/_next/image?url=%2Fprojects%2Fochidesign.webp&w=1200&q=100",
    margin:"10%"
  }
];

const MyProjects = () => {
  return (
    <>
      {/* SECTION HEADER */}
      <Box sx={{ backgroundColor: "#0a0b0c", padding: "90px", paddingTop: "150px" }}>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <LuSparkle color="greenyellow" />
          <Typography
            sx={{
              color: "greenyellow",
              fontSize: "16px",
              textTransform: "uppercase",
            }}
          >
            My Work
          </Typography>
        </Box>

        <Typography
          variant="h3"
          sx={{ color: "#fff", fontSize: "48px", marginTop: "10px" }}
        >
          Selected Projects
        </Typography>

        <Typography sx={{ color: "#8c8c9d", marginTop: "5px" }}>
          Here's a curated selection showcasing my expertise and the achieved results.
        </Typography>
      </Box>

      {/* PROJECT GRID */}
      <Box sx={{pl:8,pr:8,pb:8, backgroundColor:"#0a0b0c"}} className="projects-wrapper py-md grid grid-cols-1 grid-rows-[masonry] gap-y-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-0 px-10">

        {projects.map((p, index) => (
          <div
            key={index}
            className="opacity-container-child group h-fit w-full cursor-pointer sm:even:mt-14"
            
          >
            <a href={p.link} className="h-fit w-full">
              <div
                style={{ backgroundColor: "#0a0b0c", padding:"25px", marginTop: p.margin }}
                className="aspect-3/2 w-full overflow-hidden rounded-3xl prj-cards"
              >
               <div style={{backgroundColor:p.bg, width:"100%", height:"100%", borderRadius:"25px"}}>
                 <img
                  alt={p.title}
                  src={p.img}
                  style={{width:"100%", height:"100%", objectFit:"cover"}}
                />
               </div>
              </div>

              {/* TEXT SECTION */}
              <div className="mt-4 space-y-2">
                <h5 className="text-white text-xl">{p.title}</h5>

                <div className="flex justify-between">
                  <div className="flex flex-wrap gap-2">
                    <p className="text-sm text-text-secondary text-gray-400">{p.tag}</p>
                  </div>

                  <p className="text-sm text-text-secondary text-gray-400">{p.year}</p>
                </div>
              </div>
            </a>
          </div>
        ))}

      </Box>
      
    </>
  );
};

export default MyProjects;
