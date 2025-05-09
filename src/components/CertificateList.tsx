import { useCertificates } from "@/api/api";
import React from "react";
import { ErrorMessage } from "./ErrorMessage";
import { LoadingSpinner } from "./LoadingSpinner";
import CertificateCard from "./CertificateCard";

const CertificateList = () => {
  const { data: certificates, isLoading, error, refetch } = useCertificates();
  if (isLoading)
    return (
      <div className="flex justify-center items-center py-20">
        <LoadingSpinner size="lg" />
      </div>
    );

  if (error) {
    return (
      <div className="max-w-md mx-auto py-10">
        <ErrorMessage
          message="Failed to load certificates. Please try again later."
          retry={() => refetch()}
        />
      </div>
    );
  }

  if (!certificates || certificates.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No certificates found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            id={certificate.id}
            name={certificate.name}
            media={certificate.media}
            date={certificate.date}
            organization={certificate.organization}
            skills={certificate.skills}
          />
        ))}
      </div>
    </>
  );
};

export default CertificateList;
