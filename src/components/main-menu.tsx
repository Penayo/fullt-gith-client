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
      <Navbar.Brand href="#">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          { repository.toUpperCase() }
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <div className="flex md:order-2">
        <Dropdown
          inline={true}
          label="Select Repository"
        >
          <Dropdown.Item onClick={() => onSelectRepo('fullt-gith-client')}>
            fullt-gith-client
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onSelectRepo('fullt-repo-admin')}>
            fullt-repo-admin
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}
