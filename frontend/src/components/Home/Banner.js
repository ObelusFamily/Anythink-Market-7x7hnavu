import React, {useState} from "react";
import logo from "../../imgs/logo.png";
import { APPLY_TITLE_FILTER } from "../../constants/actionTypes";
import agent from "../../agent";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  ...state.itemList,
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (tab, pager, payload, searchValue) =>
    dispatch({ type: APPLY_TITLE_FILTER, tab, pager, payload, searchValue }),
});

const Banner = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(false);
  const placeholder = "What is it that you truly desire?";
  const handleSearch = async (e) => {
    setSearchValue(e.target.value);
    if (e.target.value.length >= 3) {
      agent.Items.search(e.target.value).then((result) => {
        props.onSearch("all", agent.Items.search, result, e.target.value);
      });
    }
  };
  return (
    <div style={{width: "100%"}} className="banner text-white">
      <div style={{width: "100%"}} className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div style={{width: "100%", gap: 4}} className="d-flex flex-row justify-content-center align-items-center">
          <span>A place to<span style={{cursor: "pointer"}} onClick={()=>setShow(!show)}> get</span></span>
          {show && (<span style={{width:"max-content", margin: 10, display: show ? "flex" : "none"}} className="input-group">  
      <input id="search-box" value={searchValue} onChange={handleSearch}
       type="search" style={{minWidth: placeholder.length * 10 }} className="p-3 rounded-sm" placeholder={placeholder} aria-describedby="button-addon5"/>  
        <button type="submit" className="btn btn-primary"><i className="bi bi-search"></i></button>  
    </span>)}  
          <span>the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);