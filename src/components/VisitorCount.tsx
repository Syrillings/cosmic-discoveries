import React from 'react'
import { useState, useEffect } from "react";
 
 const Counter = () => {
  
   const [visitorCount, setVisitorCount] = useState(0);
   useEffect(() => {
     setVisitorCount(Math.floor(Math.random() * 1000) + 100);
   }, []);



  return (
     <div className="hidden md:block">
            <div className="text-white bg-cosmic-accent/20 px-6 py-1 rounded-full">
              <span className="text-sm">Visitors: {visitorCount}</span>
            </div>
          </div>
  )
}

export default Counter;