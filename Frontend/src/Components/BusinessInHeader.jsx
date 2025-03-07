import React from 'react'
import { useNavigate } from "react-router-dom";

function BusinessInHeader() {
    const Navigate = useNavigate();

    function  handleTryforFree(){
        Navigate("/Addbusiness")
    }
  return (
    <button className="Tryitfree" onClick={handleTryforFree}>Add Business</button>
  )
}

export default BusinessInHeader