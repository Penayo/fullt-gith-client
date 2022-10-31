import React, { useState, useEffect } from 'react'
import { Sidebar, Spinner } from 'flowbite-react'
import { HiShoppingBag } from 'react-icons/hi' ;
import { useGetBranch } from '../services/github-api'
import { Branch } from '../models/Branch'

interface BranchesItemsProps {
  onClickItem: any
}

function BranchesItems ({ onClickItem }:BranchesItemsProps ) {
  const [key, setKey] = useState(0)
  const [loading, data, error] = useGetBranch(key) ;

  useEffect(() => {
    console.log('Branches error', error)
  }, [error])

  return (
    <>
      <Sidebar.Collapse
        icon={HiShoppingBag}
        label="Branches"
      >
      {
        loading &&
        <Sidebar.Item href="#">
          <Spinner aria-label="Default status" />
        </Sidebar.Item>
      }
      {
        (data as Branch[]).map((branch: any) => (
          <Sidebar.Item key={branch.name} href="#" onClick={() => onClickItem(`commits/${branch.name}`)}>
            { branch.name }
          </Sidebar.Item>
        ))
      }
      </Sidebar.Collapse>
    </>
  )
}

export default BranchesItems
