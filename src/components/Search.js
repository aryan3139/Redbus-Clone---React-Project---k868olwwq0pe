import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { DataAppContext } from './DataApp';
import Form from 'react-bootstrap/Form';

const Search = () => {
    const initialData = {
        username: '',
        password: '',
      }

      const navigate = useNavigate();
      const localContext = useContext(DataAppContext);
      const {appState, setAppState} = localContext;
      const {searchFrom, searchTo, searchDate} = appState;
    
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
        setAppState({
          ...appState,
          searchFrom: formdata.from,
          searchTo: formdata.to
        })
        //set searchFrom, searchTo, searchDate in context varibale
      }

      useEffect(() => {
        console.log('form data - ', formdata);
      })

      
  return (
    <div className='Homefn'>
        {/* Replace input type text with dropdown data - data slready stored in localstorage  -- for list of cities */}
        From: 
        <Form.Select id="from" onChange={updateData}>
          <option value="jaipur">Jaipur</option>
          <option value="chandigarh">Chandigarh</option>
          <option value="pune">Pune</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
          <option value="chennai">Chennai</option>
          <option value="hyderabad">Hyderabad</option>
        </Form.Select>
        {/* <input type="text" id="from" onChange={updateData} value={formdata.from} /><br></br> */}
        To: 
        <Form.Select id="to" onChange={updateData}>
          <option value="jaipur">Jaipur</option>
          <option value="chandigarh">Chandigarh</option>
          <option value="pune">Pune</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
          <option value="chennai">Chennai</option>
          <option value="vijayawada">Vijayawada</option><br></br><br></br>
        </Form.Select>
        {/* <input type="text" id="to" onChange={updateData} value={formdata.to} /><br></br> */}
        Date: <input type="date" id="date" onChange={updateData} value={formdata.date} /><br></br><br></br>

        <button className="btn btn-danger" onClick={searchFn}>Search Buses</button>
        <br></br>
        <br></br>
    </div>
  )
}

export default Search