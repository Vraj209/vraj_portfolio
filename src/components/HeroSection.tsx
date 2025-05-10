import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Download, Mail, } from "lucide-react";
import { iconVariants } from "@/motion/iconVariants";
import { buttonVariants } from "@/motion/buttonVariants";
import { downloadButtonHandler } from "@/lib/Resume_Link";
import { Socials_links } from "@/lib/Social_Links";
const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tighter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm{" "}
          <motion.span
            className="text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Vraj Panchal
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A passionate Full Stack Developer specializing in building exceptional
          digital experiences.
        </motion.p>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <Button
              className="gap-2"
              onClick={() => {
                window.location.href = "mailto:vrajpanchal0209@gmail.com";
              }}
            >
              <motion.div variants={iconVariants}>
                <Mail className="h-4 w-4" />
              </motion.div>
              Contact Me
            </Button>
          </motion.div>
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <Button
              variant="outline"
              className="gap-2"
              onClick={downloadButtonHandler}
            >
              <motion.div variants={iconVariants}>
                <Download className="h-4 w-4" />
              </motion.div>
              Download CV
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {Socials_links.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
            >
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">Social Link</span>
                </Button>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        className="relative aspect-square"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.4 } }}
      >
        <img
          src="/profile_photo.jpeg?height=600&width=600"
          alt="Profile"
          width={600}
          height={600}
          className="object-cover rounded-full border-4 border-primary/20"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
