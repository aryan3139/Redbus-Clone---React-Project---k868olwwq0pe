import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { DataAppContext } from './DataApp';

const Search = () => {
    const initialData = {
        username: '',
        password: '',
      }

      const navigate = useNavigate();
    //   const localContext = useContext(DataAppContext);
    //   const {appState, setAppState} = localContext;
    //   const {searchFrom, searchTo, searchDate} = appState;
    
      //method to update each key of state object
      const updateData = (e) => {
        console.log(e.target.id, e.target.value);
        let tempObj = {};
        tempObj[e.target.id] = e.target.value.trim();
        setFormdata({
          ...formdata, ...tempObj
        });
      }
    
      //state object for formdata
      const [formdata, setFormdata] = useState(initialData);
    
      const searchFn = () =>{
        if(!window.location.href.indexOf('list') >=0 ) {
            navigate('/list')
        }
        //set searchFrom, searchTo, searchDate in context varibale
      }

      
  return (
    <div className="Searchbtn">
        {/* Replace input type text with dropdown data - data slready stored in localstorage  -- for list of cities */}
        <div>From: <input type="text" id="from" onChange={updateData} value={formdata.from} /></div><br></br><br></br>
        <div>To: <input type="text" id="to" onChange={updateData} value={formdata.to} /></div><br></br><br></br>
       <div>Date: <input type="date" id="date" onChange={updateData} value={formdata.date} /></div><br></br><br></br>

       <div><button className="searchbs" onClick={searchFn}>Search Buses</button></div>
        <br></br>
        <br></br>
    </div>
  )
}

export default Search