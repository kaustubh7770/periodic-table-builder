import { useState } from "react";
import PeriodicTable from "../components/PeriodicTable";
import ResultPanel from "../components/ResultPanel";
import "../styles/buldier.css";

function Builder() {
  const [selectedAtoms, setSelectedAtoms] = useState([]);
  const [savedMolecules, setSavedMolecules] = useState([]);

  const handleElementClick = (element) => {
    setSelectedAtoms([...selectedAtoms, element]);
  };

  const saveMolecule = () => {
    if (selectedAtoms.length === 0) return;

    const counts = {};

    selectedAtoms.forEach((atom) => {
      counts[atom.symbol] = (counts[atom.symbol] || 0) + 1;
    });

    const order = ["H", "C", "N", "O", "Na", "Cl"];

    const formula = order
      .filter((symbol) => counts[symbol])
      .map((symbol) =>
        counts[symbol] > 1
          ? `${symbol}${counts[symbol]}`
          : symbol
      )
      .join("");

    setSavedMolecules([...savedMolecules, formula]);
  };

  const deleteMolecule = (indexToDelete) => {
    setSavedMolecules(
      savedMolecules.filter(
        (_, index) => index !== indexToDelete
      )
    );
  };

  return (
    <div className="builder-container">
      <h1>Molecule Builder Page</h1>

      <PeriodicTable addAtom={handleElementClick} />

      <br />

      <button
        className="action-button"
        onClick={() => setSelectedAtoms([])}
      >
        Clear Molecule
      </button>

      <button
        className="action-button"
        onClick={() =>
          setSelectedAtoms(selectedAtoms.slice(0, -1))
        }
      >
        Undo Last Atom
      </button>

      <button
        className="action-button"
        onClick={saveMolecule}
      >
        Save Molecule
      </button>

      <ResultPanel selectedAtoms={selectedAtoms} />

      <div className="molecule-card">
        <h2>Saved Molecules</h2>

        {savedMolecules.length === 0 ? (
          <p>No saved molecules</p>
        ) : (
          <div>
            {savedMolecules.map((molecule, index) => (
              <div
                key={index}
                className="saved-molecule"
              >
                {molecule}

                <button
                  className="delete-button"
                  onClick={() => deleteMolecule(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Builder;