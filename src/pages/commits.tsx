import React from 'react'
import { useParams } from "react-router-dom";

function Commits () {
  const params = useParams() ;

  return (
    <div>{params.branchName}'s Commits List</div>
  )
}

export default Commits
