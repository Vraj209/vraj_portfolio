import React from "react";
import { useParams } from "react-router";

const CertificateDescription = () => {
  const { id } = useParams();
  return <div>Certificate id is: {id}</div>;
};

export default CertificateDescription;
