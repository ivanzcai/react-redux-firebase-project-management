import React from "react";

export default function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at
            commodi aspernatur culpa est. Eveniet atque illo numquam odio
            accusamus quia? Asperiores id impedit consequatur. Architecto quod
            commodi corporis nostrum.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Ivan</div>
          <div>2nd Semptember 2019</div>
        </div>
      </div>
    </div>
  );
}
