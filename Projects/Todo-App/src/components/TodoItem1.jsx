function Todoitem1 (){
let TodoName = "Got to College";
let todoDate = "11/06/2024";
return (
  <div className="container ">
    <div className="row kg-row">
      <div className="col-6">{TodoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger button">
          Delete
        </button>
      </div>
    </div>
  </div>
);

}

export default Todoitem1;