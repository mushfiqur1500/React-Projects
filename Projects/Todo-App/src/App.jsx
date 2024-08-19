import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import Todoitem from "./components/TodoItem";
// import Todoitem1 from "./components/TodoItem1";
import "./App.css";
import ListDisplay from "./components/ListDisplay";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="item-container">
        <ListDisplay />
        {/* <Todoitem></Todoitem>
        <Todoitem1></Todoitem1> */}
      </div>
    </center>
  );
}

export default App;
