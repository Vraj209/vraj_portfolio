import { fadeIn } from "@/motion/fadeIn";
import { motion } from "motion/react";
import { staggerContainer } from "@/motion/staggerContainer";
import CertificateList from "./CertificateList";

const CertificateSection = () => {
  return (
    <div className="container space-y-12">
      <div className="space-y-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tighter"
          variants={fadeIn}
        >
          Certificates
        </motion.h2>
        <motion.p
          className="text-muted-foreground md:text-lg max-w-2xl mx-auto"
          variants={fadeIn}
        >
          Professional certifications that validate my expertise and knowledge.
        </motion.p>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <CertificateList />
      </motion.div>
    </div>
  );
};

export default CertificateSection;
