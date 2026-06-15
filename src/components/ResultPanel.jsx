function ResultPanel({ selectedAtoms }) {
  const getFormula = () => {
    if (selectedAtoms.length === 0) return "";

    const counts = {};

    selectedAtoms.forEach((atom) => {
      counts[atom.symbol] = (counts[atom.symbol] || 0) + 1;
    });

    const order = ["H", "C", "N", "O", "Na", "Cl"];

    return order
      .filter((symbol) => counts[symbol])
      .map((symbol) =>
        counts[symbol] > 1
          ? `${symbol}${counts[symbol]}`
          : symbol
      )
      .join("");
  };

  const formula = getFormula();

  const moleculeNames = {
    H2O: "Water",
    NaCl: "Salt",
    CO2: "Carbon Dioxide",
    NH3: "Ammonia",
  };

  const molecularWeights = {
    H2O: 18.015,
    NaCl: 58.44,
    CO2: 44.01,
    NH3: 17.03,
  };

  return (
    <div>
      <h2>Result Panel</h2>

      <p>
        Selected Atoms:{" "}
        {selectedAtoms.map((atom) => atom.symbol).join(" ")}
      </p>

      <h2>Molecule Formula</h2>
      <p>{formula}</p>

      <h2>Molecule Name</h2>
      <p>
        {moleculeNames[formula]
          ? moleculeNames[formula]
          : formula
          ? "Unknown Molecule"
          : ""}
      </p>

      <h2>Molecular Weight</h2>
      <p>
        {molecularWeights[formula]
          ? `${molecularWeights[formula]} g/mol`
          : formula
          ? "Not Available"
          : ""}
      </p>
    </div>
  );
}

export default ResultPanel;