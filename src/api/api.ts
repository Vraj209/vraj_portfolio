import { supabase } from "../supabase-client";
import { PROJECT_TYPE } from "../model/project.types";
import { useQuery } from "@tanstack/react-query";
import { CERTIFICATE_TYPE } from "../model/certificate.types";

// Fetch all projects
export const getProjects = async (): Promise<PROJECT_TYPE[]> => {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) throw new Error(error.message);
  if (!data) {
    console.warn("No data return from database");
    return [];
  }
  return data as PROJECT_TYPE[];
};

export const useProjects = () =>
  useQuery<PROJECT_TYPE[]>({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  // Fetch all certifcates
export const getCertificates = async (): Promise<CERTIFICATE_TYPE[]> => {
  const { data, error } = await supabase.from("certificates").select("*");
  if (error) throw new Error(error.message);
  if (!data) {
    console.warn("No data return from database");
    return [];
  }
  return data as CERTIFICATE_TYPE[];
};

export const useCertificates = () =>
  useQuery<CERTIFICATE_TYPE[]>({
    queryKey: ["certificates"],
    queryFn: getCertificates,
  });
