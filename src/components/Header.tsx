import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { iconVariants } from "@/motion/iconVariants";
import { Link } from "react-router";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

  return (
    <motion.header
      className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      style={{ opacity: headerOpacity }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.span
            className="text-xl font-bold ml-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Vraj Panchal
          </motion.span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {["About", "Projects", "Certificates", "Contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
            >
              <Link
                to={`#${item.toLowerCase()}`}
                className="text-sm font-medium transition-colors hover:text-primary lg:text-base"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover="hover"
        >
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex gap-2 lg:gap-4 lg:px-6"
          >
            <motion.div variants={iconVariants}>
              <Download className="h-4 w-4 lg:h-5 lg:w-5" />
            </motion.div>
            Download CV
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
