import { list } from "../../data"

const ListDisplay = () => {
  return (
    <div className="container">
      {list.map((item)=>{
        return (<> <div className="row kg-row" key={item.id}>
          <div className="col-6">{item.name}</div>
          <div className="col-4">{item.date}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger button">
              Delete
            </button>
          </div>
        </div></>)
      })}
   
  </div>
  )
}

export default ListDisplay
