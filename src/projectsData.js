import airportImgPath from './assets/airporttracker.png';

const airportImg = airportImgPath.startsWith('http')
  ? airportImgPath
  : `${import.meta.env.BASE_URL}${airportImgPath.replace(/^\//, '')}`;

console.log('Final image path:', airportImg);
export const projects = [
    {
        id: 1,
        title: "Airport Tracker",
        description: "Full stack web application to track and rate airport experiences with Node.JS, Express, and vanilla JavaScript",
        tags: ["node.js", "webdev", "frontend", "backend"],
        github: "https://github.com/mjc180501/AirportTracker",
        image: airportImg
    },
    {
        id: 2,
        title: "Personal Portfolio",
        description: "React.js powered personal portfolio website.",
        tags: ["react.js", "frontend", "webdev"],
        github: "https://github.com/mjc180501/Portfolio/",
        image: airportImg
    },
];