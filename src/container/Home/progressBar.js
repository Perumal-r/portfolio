// import React, { useState, useEffect, useRef } from "react";
// import { ProgressBar } from "primereact/progressbar";
// // import { Toast } from 'primereact/toast';
// import "primereact/resources/themes/lara-light-cyan/theme.css";
// import ReactPlayer from "react-player";

// export default function Progress() {
//   const [value, setValue] = useState(0);
//   const [valueCss, setValueCss] = useState(0);
//   const [valueJs, setValueJs] = useState(0);
//   const [valueReact, setValueReact] = useState(0);
//   const [valueTailCss, setValueTailCss] = useState(0);
//   // const toast = useRef(null);
//   const interval = useRef(null);

//   useEffect(() => {
//     let _val = value;
//     let _valCss = valueCss;
//     let _valJs = valueJs;
//     let _valReact = valueReact;
//     let _valTailCss = valueTailCss;
//     interval.current = setInterval(() => {
//       _val += Math.floor(Math.random() * 10) + 1;
//       _valCss += Math.floor(Math.random() * 10) + 1;
//       _valJs += Math.floor(Math.random() * 10) + 1;
//       _valReact += Math.floor(Math.random() * 10) + 1;
//       _valTailCss += Math.floor(Math.random() * 10) + 1;
//       if (_val >= 100) {
//         _val = 100;
//         // toast.current.show({ severity: 'success', summary: 'Success', detail: 'Process Completed' });
//         clearInterval(interval.current);
//       }
//       if (_valCss >= 100) {
//         _valCss = 100;
//         // toast.current.show({ severity: 'success', summary: 'Success', detail: 'Process Completed' });
//         clearInterval(interval.current);
//       }
//       if (_valJs >= 80) {
//         _valJs = 80;
//         // toast.current.show({ severity: 'danger', summary: 'Success', detail: 'Process Completed' });
//         clearInterval(interval.current);
//       }
//       if (_valReact >= 85) {
//         _valReact = 85;
//         // toast.current.show({ severity: 'warning', summary: 'Success', detail: 'Process Completed' });
//         clearInterval(interval.current);
//       }
//       if (_valTailCss >= 75) {
//         _valTailCss = 75;
//         // toast.current.show({ severity: 'warning', summary: 'Success', detail: 'Process Completed' });
//         clearInterval(interval.current);
//       }

//       setValue(_val);
//       setValueCss(_valCss);
//       setValueJs(_valJs);
//       setValueReact(_valReact);
//       setValueTailCss(_valTailCss);
//     }, 500);

//     return () => {
//       if (interval.current) {
//         clearInterval(interval.current);
//         interval.current = null;
//       }
//     };
//   }, [value, valueCss, valueJs, valueReact, valueTailCss]);

//   return (
//     <div className="d-flex justify-content-between">
//       <div className="row  mx-lg-5 mx-md-5 mt-5 ">
//         <div className="col-lg-6 col-md-6 col-sm-12 " data-aos="fade-up">
//           <ReactPlayer
//             className="react-player"
//             url="videos/video1.mp4"
//             width="100%"
//             height="90%"
//             controls={true}
//             autoPlay={true}
//           />
//         </div>
//         <div
//           className="col-lg-6 col-md-6 col-sm-12 zInd mt-2"
//           data-aos="fade-up"
//         >
//           <div className="card text-black p-5">
//             <h4 className="text-center">Skills</h4>
//             {/* <Toast ref={toast}></Toast> */}
//             <h6 className="mb-0">Html: </h6>
//             <ProgressBar value={value}></ProgressBar>
//             <h6 className="mb-0 mt-2">Css: </h6>
//             {/* <Toast ref={toast}></Toast> */}
//             <ProgressBar value={valueCss}></ProgressBar>
//             <h6 className="mb-0 mt-2">JS: </h6>
//             {/* <Toast ref={toast}></Toast> */}
//             <ProgressBar value={valueJs}></ProgressBar>
//             <h6 className="mb-0 mt-2">React: </h6>
//             {/* <Toast ref={toast}></Toast> */}
//             <ProgressBar value={valueReact}></ProgressBar>
//             <h6 className="mb-0 mt-2">TaillWind: </h6>
//             {/* <Toast ref={toast}></Toast> */}
//             <ProgressBar value={valueTailCss}></ProgressBar>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const progressBar = () => {
  const projects = [
    {
      name: "Html",
      subtitle: "eCommerce",
      logo: <FaHtml5 />,
      progress: 95,
      color: "danger",
    },
    {
      name: "Css",
      subtitle: "App UI Kit",
      logo: <FaCss3Alt />,
      progress: 95,
      color: "primary",
    },
    {
      name: "JavaScript",
      subtitle: "Calendar App",
      logo: <FaNodeJs />,
      progress: 85,
      color: "success",
    },
    {
      name: "Bootstrap",
      subtitle: "Website",
      logo: <FaBootstrap />,
      progress: 90,
      color: "success",
    },
    {
      name: "Tailwind",
      subtitle: "Website Design",
      logo: <RiTailwindCssLine />,
      progress: 75,
      color: "warning",
    },
    {
      name: "React",
      subtitle: "Dashboard",
      logo: <FaReact />,
      progress: 80,
      color: "info",
    },
    {
      name: "Next.js",
      subtitle: "Next",
      logo: <SiNextdotjs />,
      progress: 50,
      color: "danger",
    },
  ];
  return (
    <>
      <div
        className="row justify-content-center mx-5 my-5"
        data-aos="fade-down"
      >
        {/* First Skill Percentage Card (4 items) */}
        <div className="col-xxl-6 col-md-6 my-5">
          <div className="card h-100">
            <div
              className="card-header d-flex justify-content-between"
              style={{ background: "#2B386C" }}
            >
              <div className="card-title mb-0 text-center">
                <h5 className="mb-1 text-white">Skill Percentage</h5>
              </div>
            </div>
            <div className="card-body">
              <ul className="list-unstyled m-0 p-0">
                {projects.slice(0, 4).map((project, index) => (
                  <li
                    className={`mb-2 d-flex ${
                      index === 3 ? "" : "border-bottom pb-2"
                    }`}
                    key={index}
                  >
                    <div className="d-flex w-50 align-items-center me-4">
                      <div className="me-3" style={{ fontSize: "24px" }}>
                        {project.logo}
                      </div>
                      <div>
                        <h6 className="mb-0">{project.name}</h6>
                      </div>
                    </div>
                    <div className="d-flex flex-grow-1 align-items-center">
                      <div
                        className="progress w-100 me-3"
                        style={{ height: "8px" }}
                      >
                        <div
                          className={`progress-bar bg-${project.color}`}
                          role="progressbar"
                          style={{ width: `${project.progress}%` }}
                          aria-valuenow={project.progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span className="text-muted">{project.progress}%</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Second Skill Percentage Card (3 items) */}
        <div className="col-xxl-6 col-md-6 my-5">
          <div className="card h-100">
            <div
              className="card-header d-flex justify-content-between"
              style={{ background: "#2B386C" }}
            >
              <div className="card-title mb-0 text-center">
                <h5 className="mb-1 text-white">Skill Percentage</h5>
              </div>
            </div>
            <div className="card-body">
              <ul className="list-unstyled m-0 p-0">
                {projects.slice(4, 7).map((project, index) => (
                  <li
                    className={`mb-2 d-flex ${
                      index === 2 ? "" : "border-bottom pb-2"
                    }`}
                    key={index + 4}
                  >
                    <div className="d-flex w-50 align-items-center me-4">
                      <div className="me-3" style={{ fontSize: "24px" }}>
                        {project.logo}
                      </div>
                      <div>
                        <h6 className="mb-0">{project.name}</h6>
                      </div>
                    </div>
                    <div className="d-flex flex-grow-1 align-items-center">
                      <div
                        className="progress w-100 me-3"
                        style={{ height: "8px" }}
                      >
                        <div
                          className={`progress-bar bg-${project.color}`}
                          role="progressbar"
                          style={{ width: `${project.progress}%` }}
                          aria-valuenow={project.progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span className="text-muted">{project.progress}%</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default progressBar;
