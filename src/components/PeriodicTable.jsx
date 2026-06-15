import elements from "../data/elements";

function PeriodicTable({ addAtom }) {
  return (
    <div>
      <h2>Periodic Table</h2>

      {elements.map((element) => (
        <button
          key={element.symbol}
          className="element-button"
          onClick={() => addAtom(element)}
        >
          {element.symbol}
        </button>
      ))}
    </div>
  );
}

export default PeriodicTable;