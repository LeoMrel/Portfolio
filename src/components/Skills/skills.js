import React from "react"
import Layout from "../Layout/layout"
import react from "../../images/skills/frontend/react.svg"
import javascript from "../../images/skills/frontend/javascript.svg"
import html from "../../images/skills/frontend/html.svg"
import css from "../../images/skills/frontend/css.svg"
import sass from "../../images/skills/frontend/sass.svg"
import typescript from "../../images/skills/frontend/typescript.svg"
import tailwind from "../../images/skills/tools/tailwind.svg"
import graphql from "../../images/skills/tools/graphql.svg"
import nextjs from "../../images/skills/tools/next-js.svg"
import gatsby from "../../images/skills/tools/gatsby.svg"
import python from "../../images/skills/tools/python.svg"
import git from "../../images/skills/tools/git.svg"
import node from "../../images/skills/backend/nodejs.svg"
import express from "../../images/skills/backend/expressjs-icon.svg"
import redis from "../../images/skills/backend/redis.svg"
import mongodb from "../../images/skills/backend/mongodb.svg"
import mysql from "../../images/skills/backend/mysql.svg"

const Skills = () => {
  const skillList = [
    {
      title: "Frontend",
      skills: [
        { icon: react, label: "React" },
        { icon: javascript, label: "JavaScript" },
        { icon: typescript, label: "Typescript" },
        { icon: html, label: "HTML5" },
        { icon: css, label: "CSS3" },
        { icon: sass, label: "Sass" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { icon: graphql, label: "Graphql" },
        { icon: nextjs, label: "NextJs" },
        { icon: gatsby, label: "Gatsby" },
        { icon: tailwind, label: "TailwindCss" },
        { icon: git, label: "Git" },
        { icon: python, label: "Python" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { icon: node, label: "Nodejs" },
        { icon: express, label: "Express" },
        { icon: redis, label: "Redis" },
        { icon: mysql, label: "MySql" },
        { icon: mongodb, label: "MongoDB" },
      ],
    },
  ]

  return (
    <Layout id="skills" height="h-full">
      <div className="text-white w-full h-full flex flex-col my-5">
        <div className="w-full flex place-content-center">
          <h1>Skills</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-3 place-items-center justify-between py-14">
          <div className="w-full flex flex-col lg:flex-row justify-between place-items-center">
            {skillList.map((e, index) => {
              return (
                <div key={index} className="text-center">
                  <h1>{e.title}</h1>
                  <div className="grid grid-cols-3 mt-5 mb-14 gap-5">
                    {e.skills.map((skill, index) => {
                      return (
                        <div
                          key={index}
                          className="flex place-items-center flex-col gap-y-1"
                        >
                          <img
                            alt={skill.label}
                            src={skill.icon}
                            width="55px"
                            height="55px"
                          />
                          <p className="text-sm">{skill.label}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Skills
