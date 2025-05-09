import { CERTIFICATE_TYPE } from "@/model/certificate.types";
import { motion } from "motion/react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const CertificateCard = ({
  id,
  name,
  media,
  date,
  organization,
  skills = [],
}: CERTIFICATE_TYPE) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden h-full ">
        <CardContent className="p-0">
          {/* Certificate header */}
          <div className="p-3 text-center">
            <div className="flex justify-center mb-1">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <Award className="h-8 w-8 text-gray-800 dark:text-gray-200" />
              </motion.div>
            </div>
            <h3 className="text-base font-semibold tracking-tight">{name}</h3>
            <div className="mt-1 text-xs text-muted-foreground flex items-center justify-center gap-1">
              <span>{organization}</span> • <Calendar className="h-3 w-3" />{" "}
              <span>{date}</span>
            </div>
          </div>

          {/* Certificate image */}
          <div className="px-3">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md border border-muted bg-muted/20">
              <motion.div
                initial={{ scale: 1.05 }}
                animate={{ scale: isHovered ? 1.1 : 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={media || "/placeholder.svg"}
                    alt={name}
                    className="object-cover w-full h-full rounded-sm"
                  />
                </div>
              </motion.div>

              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <a href={`/certificates/${id}`}>
                  <Button variant="secondary" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Certificate
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Skills preview (if available) */}
          {skills.length > 0 && (
            <div className="p-3 pt-2">
              <div className="flex flex-wrap gap-1 justify-center">
                {skills.slice(0, 3).map((skill, index) => (
                  <motion.span
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
                {skills.length > 3 && (
                  <motion.span
                    className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    +{skills.length - 3} more
                  </motion.span>
                )}
              </div>
            </div>
          )}

          {/* Decorative line */}
          <div className="px-3 pb-3">
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          </div>
        </CardContent>
      </Card>

      {/* Decorative shadow */}
      <motion.div
        className="absolute -bottom-2 left-1/2 h-3 w-3/4 -translate-x-1/2 rounded-full bg-black/20 blur-md"
        initial={{ opacity: 0.3, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 0.5 : 0.3,
          scale: isHovered ? 0.9 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default CertificateCard;
