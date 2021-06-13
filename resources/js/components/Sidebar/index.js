import React from 'react';
import {ButtonGroup, DropdownButton} from "react-bootstrap";
import {useSelector} from "react-redux";
import {SidebarLink, SidebarList, SidebarWrapper} from "./styles";


const Sidebar = React.memo(() => {
    const lists = useSelector(({Sidebar}) => Sidebar.mainList)
    return (
        <SidebarWrapper >
            {
                lists.map((el) => (
                    <DropdownButton
                        as={ButtonGroup}
                        id={`dropdown-button-drop-right`}
                        drop='right'
                        variant="secondary"
                        title={el.name}
                    >
                        <SidebarList>
                            {
                                el.list.map((item) =>(
                                    <li>
                                        <SidebarLink to={item.link}>
                                            {item.name}
                                        </SidebarLink>
                                    </li>
                                ))
                            }
                        </SidebarList>
                    </DropdownButton>

                ))
            }

        </SidebarWrapper>
)})

export default Sidebar
