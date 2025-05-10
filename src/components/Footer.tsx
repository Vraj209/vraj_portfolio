import { Socials_links } from "@/lib/Social_Links";
import { Button } from "./ui/button";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-6">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Footer Text */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vraj Panchal. All rights reserved.
        </p>

        {/* Social Links */}
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
      </div>
    </footer>
  );
};

export default Footer;
