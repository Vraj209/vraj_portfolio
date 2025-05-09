import { motion } from "motion/react";
import { fadeIn } from "@/motion/fadeIn";
import { staggerContainer } from "@/motion/staggerContainer";
import { cardVariants } from "@/motion/cardVariants";
import { buttonVariants } from "@/motion/buttonVariants";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useProjects } from "@/api/api";
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorMessage } from "./ErrorMessage";

const ProjectSection = () => {
  const {
    data: projects,
    isLoading: projectsLoading,
    error: projectsError,
    refetch: refetchProjects,
  } = useProjects();

  return (
    <div className="container space-y-12">
      <div className="space-y-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tighter"
          variants={fadeIn}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="text-muted-foreground md:text-lg max-w-2xl mx-auto"
          variants={fadeIn}
        >
          Here are some of my recent projects that showcase my skills and
          expertise.
        </motion.p>
      </div>

      {projectsLoading ? (
        <div className="flex justify-center items-center py-20">
          <LoadingSpinner size="lg" />
        </div>
      ) : projectsError ? (
        <div className="max-w-md mx-auto py-10">
          <ErrorMessage
            message="Failed to load projects. Please try again later."
            retry={() => refetchProjects()}
          />
        </div>
      ) : (
        <>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects?.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={project.banner_image || "/placeholder.svg"}
                        alt={project.name}
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.tech_stack.map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * index }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="p-2 bg-gray-500 text-white rounded">{tech}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <motion.div
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonVariants}
                    >
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={`/projects/${project.id}`}
                          className="flex items-center gap-2"
                        >
                          View Details
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex justify-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <Button variant="outline">View All Projects</Button>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ProjectSection;
