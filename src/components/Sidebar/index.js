import React from 'react'
import {
  SidebarLinks,
  SideBtnWrap,
  Icon,
  CloseIcon,
  SidebarContainer,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
} from "./SidebarElements";
const Sidebar = (
    {isOpen, toggle}
) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon >
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLinks to='About' onClick={toggle}>
                            About
                        </SidebarLinks>
                        <SidebarLinks to='Workout'onClick={toggle}>
                            Workout
                        </SidebarLinks>
                        <SidebarLinks to='Timings'onClick={toggle}>
                            Timings
                        </SidebarLinks>
                        <SidebarLinks to='Packages'onClick={toggle}>
                            Packages
                        </SidebarLinks>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to = "/signin">Join Now</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar;
