import React from 'react' ;
import { Sidebar } from 'flowbite-react' ;
import { HiChartPie, HiShoppingBag, HiInbox } from 'react-icons/hi' ;
import { useNavigate } from 'react-router-dom';

export function AppSidebar () {
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
          <Sidebar.Item
            href="#"
            icon={HiChartPie}
          >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse
            icon={HiShoppingBag}
            label="Branches"
          >
            <Sidebar.Item href="#" onClick={() => goTo('commits/master')}>
              master
            </Sidebar.Item>
            <Sidebar.Item href="#" onClick={() => goTo('commits/develop')}>
              develop
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item
            href="#"
            icon={HiInbox}
          >
            Issues
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiInbox}
            onClick={() => openUrl('http://localhost:8000/swagger')}
          >
            Swagger API Doc
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiInbox}
          >
            Development Doc.
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
