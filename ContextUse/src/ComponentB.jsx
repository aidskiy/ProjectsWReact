import React, { useState } from 'react'
import ComponentRef from './ComponentC'

function ComponentB() {


  return (
    <div className = "box">
        <h1>Component B</h1>
        <ComponentRef/>
    </div>
  );
}

export default ComponentB