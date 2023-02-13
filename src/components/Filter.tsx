import "./filter.css";

export const Filter = (props: {
  filter: number;
  handleFilter: (flt: number) => void;
  items: number;
}) => {
  const numbers = [10, 50, 100];

  return (
    <div className="filter-container">
      <div className="filter">
        <p>Select how many items show</p>
        <div className="filter-buttons">
          {numbers.map((fil) => {
            return (
              <button
                key={fil}
                className={fil === props.filter ? "selected" : ""}
                onClick={() => props.handleFilter(fil)}
              >
                {fil}
              </button>
            );
          })}
        </div>
      </div>
      <p>Items shown: <span className="yellow">{props.items}</span></p>
    </div>
  );
};
