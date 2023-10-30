import React,{useState} from 'react'
// import control_icon from "../../assets/control_icon.svg"
import { TiThList } from "react-icons/ti";
import {AiOutlineDown} from "react-icons/ai"
import "./Navbar.css"
function Navbar() {
  const [displayOnClick,setDisplayOnClick] = useState(false);
  return (
    <div className='nav'>
      <div className='displayButton'>
        <button className='btn-1'
        onClick={()=>setDisplayOnClick(!displayOnClick)}>
          {/* <img src = {control_icon} alt="control_icon" /> */}
          <TiThList className='dropDownIcon'/>
          Display
          <AiOutlineDown/>
        </button>
        {
          displayOnClick &&(
            <>
              <div className='boxOnClick'>
                <div className='selectGroup'>
                  Grouping
                  <select >
                    <option value= "status">Status</option>
                    <option value= "user">User</option>
                    <option value= "priority">Priority</option>

                  </select>
                </div>
                <div className='selectGroup'>
                  Ordering
                  <select >
                    <option value= "priority">Priority</option>
                    <option value = "title">Title</option>
                  </select>
                </div>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Navbar