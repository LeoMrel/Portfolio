import sortingapp from "../../images/thumbnails/sortingapp.jpg"
import pathfindingapp from "../../images/thumbnails/pathfindingapp.jpg"
import movieapp from "../../images/thumbnails/movieapp.jpg"
import todolistapp from "../../images/thumbnails/todolistapp.jpg"
import react from "../../images/skills/frontend/react.svg"
import tailwind from "../../images/skills/tools/tailwind.svg"
import typescript from "../../images/skills/frontend/typescript.svg"
import nextjs from "../../images/skills/tools/next-js.svg"
import javascript from "../../images/skills/frontend/javascript.svg"
import firebase from "../../images/skills/tools/firebase.svg"

export const projectsList = [
  {
    title: "Sorting Visualizer",
    quote: {
      quote:
        "Many computer scientists consider sorting to be the most fundamental problem in the study of algorithms.",
      from: "—Introduction to Algorithms 3rd edition.",
    },
    description: `Sorting algorithms were my introduction to the field,
      and as such, I decided to code a sorting visualizer to test my knowledge and understanding.
      Also took on the oportunity to learn Typescript!`,
    covers: [
      "Bubble Sort",
      "Insertion Sort",
      "Selection Sort",
      "Merge Sort",
      "Quick Sort",
    ],
    image: sortingapp,
    site: "https://leomrel.github.io/Sorting-Visualizer/",
    repo: "https://github.com/LeoMrel/Sorting-App",
    stack: [
      {
        icon: react,
        label: "React",
      },
      {
        icon: tailwind,
        label: "Tailwind",
      },
      {
        icon: typescript,
        label: "Typescript",
      },
    ],
  },
  {
    title: "Pathfinder Visualizer",
    description: `A search algorithms visualizer. 
      Users are able to visualize various searching algorithms, create walls, mazes and drag nodes all around the grid.`,
    warning: "This project is not supported on mobile devices.",
    covers: [
      "Dijkstra's Algorithm",
      "A* Algorithm",
      "Breadth First Search Algorithm",
      "Depth First Search Algorithm",
      "Random Maze Generation",
      "Recursive Maze Generation",
    ],
    image: pathfindingapp,
    site: "https://search-algos-visualizer.vercel.app/",
    repo: "https://github.com/LeoMrel/SearchAlgosVisualizer",
    stack: [
      {
        icon: react,
        label: "React",
      },
      {
        icon: tailwind,
        label: "Tailwind",
      },
    ],
  },
  {
    title: "NTMDB (Not The Movie Database)",
    description: `A movie, tv show and people search application inspired
      by The Movie Database.`,
    covers: [
      "Client & Server Side Rendering",
      "Static & Incremental Static Site Generation",
      "Data fetching (SWR library)",
      "Search queries",
      "& more!",
    ],
    image: movieapp,
    site: "https://ntmdb-nu.vercel.app/",
    repo: "https://github.com/LeoMrel/movieapp",
    stack: [
      {
        icon: nextjs,
        label: "Next.Js",
      },
      { icon: tailwind, label: "Tailwind" },
      { icon: javascript, label: "Javascript" },
    ],
  },
  {
    title: "Full-stack Todo List",
    description: `A fullstack todo list application in which users can register, sign in 
      and submit simple todo's into their personal lists.`,
    covers: [
      "C.R.U.D operations using Google's Firestore",
      "User creation & authenticathion with Google's Cloud Services",
      "Use of additional Google's Firebase APIs",
      "Use of localStorage to save user preferences",
    ],
    image: todolistapp,
    site: "https://todolist-prod.vercel.app/",
    repo: "https://github.com/LeoMrel/TodoList",
    stack: [
      {
        icon: react,
        label: "React",
      },
      {
        icon: tailwind,
        label: "Tailwind",
      },
      {
        icon: firebase,
        label: "Firebase",
      },
    ],
  },
]
