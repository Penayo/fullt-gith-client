import React, { useState, useEffect } from 'react'
import { Sidebar, Spinner } from 'flowbite-react'
import { HiShoppingBag } from 'react-icons/hi' ;
import { useGetBranch } from '../services/github-api'
import { Branch } from '../models/Branch'

interface BranchesItemsProps {
  repository: string,
  onClickItem: any
}

function BranchesItems ({ repository, onClickItem }:BranchesItemsProps ) {
  const [key, setKey] = useState(0)
  const [loading, data, error] = useGetBranch(key, repository) ;

  useEffect(() => {
    console.log('Branches error', error)
  }, [error])

  useEffect(() => {
    console.log('Cambio de repo', repository)
  }, [repository])

  return (
    <>
      <Sidebar.Collapse
        icon={HiShoppingBag}
        label="Branches"
      >
      {
        loading &&
        <Sidebar.Item href="#" className="text-center">
          <Spinner aria-label="Default status" />
        </Sidebar.Item>
      }
      {
        !loading && (data as Branch[]).map((branch: any) => (
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
