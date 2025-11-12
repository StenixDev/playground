function App() {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    console.log("clicked!");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <div>
      <form>
        <input type="text" onChange={handleChange} />

        <button onClick={handleClick}>click me</button>
      </form>
    </div>
  );
}
export default App;
