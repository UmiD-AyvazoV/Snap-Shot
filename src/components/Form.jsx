
function Form({ handleFilter }) {
  return (
    <>
      <div className="cont">
        <h1 className="h1">Snap Shot</h1>
        <input type="text" placeholder="Search..." onChange={(e) => handleFilter(e.target.value)} />
      </div>
      <div className="btn-group">
        <button onClick={() => handleFilter("mountain")}>Mountain</button>
        <button onClick={() => handleFilter("beach")}>Beach</button>
        <button onClick={() => handleFilter("bird")}>Bird</button>
        <button onClick={() => handleFilter("food")}>Food</button>
      </div>
    </>
  );
}

export default Form;
