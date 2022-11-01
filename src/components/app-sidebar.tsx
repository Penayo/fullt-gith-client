import React, { useEffect } from 'react' ;
import { Sidebar } from 'flowbite-react' ;
import { HiChartPie, HiShoppingBag, HiInbox } from 'react-icons/hi' ;
import { SiSwagger } from 'react-icons/si'
import { useNavigate } from 'react-router-dom';
import BranchesItems from './branches-items'

interface AppSidebarProps {
  repository: string
}

export function AppSidebar ({ repository }:AppSidebarProps) {
  const navigate = useNavigate()

  function openUrl (url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function goTo (path: string) {
    navigate(path)
  }

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <BranchesItems repository={repository} onClickItem={(path: string) => goTo(path)} />
          <Sidebar.Item
            href="#"
            icon={SiSwagger}
            onClick={() => openUrl('http://localhost:8000/swagger')}
          >
            Swagger API Doc.
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiInbox}
            onClick={() => openUrl('http://localhost:8000/documentation')}
          >
            API Project Doc.
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
