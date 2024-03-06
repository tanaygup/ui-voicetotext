import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #333;
  color: #fff;
  padding: 20px;
  height: 100vh;
  position: relative;
  top: 100;
  left: 100;
`;

const SidebarHeading = styled.h2`
  margin-bottom: 20px;
  color: #fff;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarListItem = styled.li`
  margin-bottom: 10px;
`;

const SidebarLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeading>Menu</SidebarHeading>
      <SidebarList>
        <SidebarListItem>
          <SidebarLink>Conversations</SidebarLink>
        </SidebarListItem>
        <SidebarListItem>
          <SidebarLink>Channels</SidebarLink>
        </SidebarListItem>
        <SidebarListItem>
          <SidebarLink>Classes</SidebarLink>
        </SidebarListItem>
        {/* Add more items as needed */}
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;
