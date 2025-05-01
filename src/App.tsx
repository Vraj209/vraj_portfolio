import "./App.css";
import { useProjects } from "./api/api";

function App() {
  const { data: projects, isLoading } = useProjects();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div>
        {projects?.map((project) => (
          <div key={project.id}>
            <p>{project.github_link}</p>
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "300px", height: "300px" }}
            />
            <div>
              {project.images.map((image) => (
                <img src={image} style={{ width: "300px", height: "300px" }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
