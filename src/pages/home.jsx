import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Interactive Periodic Table & Molecule Builder</h1>
      <p>React JS College Project</p>

      <button onClick={() => navigate("/builder")}>
        Open Molecule Builder
      </button>
    </div>
  );
}

export default Home;