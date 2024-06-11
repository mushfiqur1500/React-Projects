import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  const list = ["Fish", "Beets", "Legumes", "Almonds", "Vegetables", "Milk"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {list.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
      ;
    </>
  );
}

export default App;
