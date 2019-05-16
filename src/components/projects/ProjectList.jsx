import React, { Component } from "react";
import ProjectSummery from "./ProjectSummery";

const ProjectList = () => {
  return (
    <div className="project-list section">
      <ProjectSummery />
      <ProjectSummery />
      <ProjectSummery />
      <ProjectSummery />
    </div>
  );
};

export default ProjectList;
