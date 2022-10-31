import React, { useState, useEffect } from 'react'
import { Sidebar, Spinner, Alert } from 'flowbite-react'
import { HiShoppingBag, HiInformationCircle } from 'react-icons/hi' ;
import { BiGitBranch } from 'react-icons/bi';
import { useGetBranch } from '../services/github-api'
import { Branch } from '../models/Branch'

interface BranchesItemsProps {
  repository: string,
  onClickItem: any
}

function BranchesItems ({ repository, onClickItem }:BranchesItemsProps ) {
  const [key, setKey] = useState(0)
  const [loading, data, error] = useGetBranch(key, repository) ;

  return (
    <>
      <Sidebar.Collapse
        icon={BiGitBranch}
        label="Branches"
        collapsed
      >
      {
        error &&
        <Sidebar.Item href="#" className="text-center">
          <Alert color="failure" icon={HiInformationCircle}>
            <span>
              <span className="font-medium">
                Error!
              </span>
              {' '}The server is probably down!.
            </span>
          </Alert>
        </Sidebar.Item>
      }
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
