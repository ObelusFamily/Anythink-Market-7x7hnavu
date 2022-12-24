import React from 'react';
import agent from "../../agent";

function Searchbox(props) {
  const placeholder = "What is it that you truly desire?";
  return (
    <span style={{width:"max-content"}} className="input-group">  
      <input id="search-box" onChange={(e)=> {
        const val = e.currentTarget.value;
        if (val.length > 3) {
            props.onTitleSearch(
              val,
              (page) => agent.Items.byTitle(val, page),
              agent.Items.byTitle(val)
            );
          } 
        }
      } type="search" style={{minWidth: placeholder.length * 10 }} className="p-3 rounded-sm" placeholder={placeholder} aria-describedby="button-addon5"/>  
        <button type="submit" className="btn btn-primary"><i className="bi bi-search"></i></button>  
    </span>  
  )
}

export default Searchbox;