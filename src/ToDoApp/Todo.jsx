// import React, { Fragment, useState } from 'react'

// const Todo = () => {
//     let [inputValue,setInputValue]=useState("");
//     let [listItems,setListItems]=useState([]);
//     let [editIndex,setEditIndex]=useState(null)

//     let handleChange=(e)=>{
//         setInputValue(e.target.value);

//     }
//     let handleSubmit=(e)=>{
//         e.preventDefault();
//         // console.log(inputValue);
//     }
//   let handleAdd=()=>{
//     if(inputValue!==""){
//         if(editIndex!==null){
//             listItems[editIndex]=inputValue;
//             setEditIndex(null)
//         }else{
//             setListItems([...listItems,inputValue])
//         }

//         setInputValue("")

//     }
//   }

//   let handleDelete=(id)=>{
//     let newList = listItems.filter((val,index)=>{
//         return index!==id
//     })
//     setListItems(newList)
//   }

//   let handleEdit=(id)=>{
//     setInputValue(listItems[id])
//     setEditIndex(id);

//   }

//   return (
//     <section className='container'>
//         <h1>TO-DO-APP</h1>
//          <form onSubmit={handleSubmit} autoComplete='off'>
//           <input type="text" name="inputValue" id="inputValue" value={inputValue} onChange={handleChange}/>
//           <button onClick={handleAdd}>{editIndex!==null?"Update Items":"Add Items"}</button>
//           </form>
//           <section className='ListContainer'>
//             {listItems.map((val,index)=>{
//                return (
//                 <article key={index}>
//                     <span>{val}</span>
//                     <div>
//                     <button className="edit" onClick={()=>handleEdit(index)}>Edit</button>
//                     <button className="delete" onClick={()=>handleDelete(index)}>Delete</button>
//                     </div>
//                 </article>
//                )
//             })}
//           </section>
//           <button className='clearAll' onClick={()=>setListItems([])}>Clear All</button>

//     </section>
//   )
// }

// export default Todo

import React, { Fragment, useState } from "react";

const Todo = () => {
  let [inputValue, setInputValue] = useState("");
  let [listItems, setListItems] = useState([]);
  let [editIndex, setEditIndex] = useState(null);

  let handleChange = (e) => {
    setInputValue(e.target.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputValue);
  };
  let handleAdd = () => {
    if (inputValue !== "") {
      if (editIndex !== null) {
        listItems[editIndex] = inputValue;
        setEditIndex(null);
      } else {
        setListItems([...listItems, inputValue]);
      }
      setInputValue("");
    }
  };

  let handleDelete = (id) => {
    let newList = listItems.filter((val, index) => {
      return index !== id;
    });
    setListItems(newList);
  };

  let handleEdit = (id) => {
    setInputValue(listItems[id]);
    setEditIndex(id);
  };
  return (
    <section className="container">
      <h1>TO-DO-APP</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="inputValue"
          id="inputValue"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>
          {editIndex !== null ? "Update Items" : "Add Items"}
        </button>
      </form>
      <section className="ListContainer">
        {listItems.map((val, index) => {
          return (
            <article key={index}>
              <span>{val}</span>
              <div>
                <button className="edit" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button className="delete" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>
            </article>
          );
        })}
      </section>
      <button className="clearAll" onClick={() => setListItems([])}>
        Clear All
      </button>
    </section>
  );
};

export default Todo;
