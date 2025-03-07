import React from 'react'
import { useNavigate } from "react-router-dom";

function TryforFreeinHeader() {
    const Navigate = useNavigate();

    function  handleTryforFree(){
        Navigate("/error")
    }
  return (
    <button className="Tryitfree" onClick={handleTryforFree}>Try it free</button>
  )
}

export default TryforFreeinHeader