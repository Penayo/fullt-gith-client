import React from 'react';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';

interface MainMenuProps {
  repository: string,
  onSelectRepo: any
}

export function MainMenu ({ repository, onSelectRepo }:MainMenuProps) {
  return (
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          { repository }
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label="Repository"
        >
          <Dropdown.Item onClick={() => onSelectRepo('fullt-gith-client')}>
            Gith-API-client
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onSelectRepo('fullt-repo-admin')}>
            Gith-API-backend
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}
