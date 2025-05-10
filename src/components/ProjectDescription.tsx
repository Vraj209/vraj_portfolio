import React from "react";
import { useParams } from "react-router";

const ProjectDescription = () => {
  const { id } = useParams();
  return <div>project id is {id}</div>;
};

export default ProjectDescription;
