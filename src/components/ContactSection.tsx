import { fadeIn } from "@/motion/fadeIn";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ContactSection = () => {
  return (
    <div className="container">
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tighter"
            variants={fadeIn}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-muted-foreground md:text-lg"
            variants={fadeIn}
          >
            Feel free to reach out if you have any questions or want to work
            together.
          </motion.p>
        </div>
        <motion.div
          className="grid gap-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    Icon: Mail,
                    title: "Email",
                    value: "vrajpanchal0209@gmail.com",
                  },
                  {
                    Icon: Linkedin,
                    title: "LinkedIn",
                    value:
                      "https://www.linkedin.com/in/vraj-panchal-34034619b/",
                  },
                  {
                    Icon: Github,
                    title: "GitHub",
                    value: "https://github.com/Vraj209",
                  },
                  {
                    Icon: Twitter,
                    title: "Twitter",
                    value: "https://x.com/VrajPan55585626",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 0.5 },
                      }}
                    >
                      <item.Icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
