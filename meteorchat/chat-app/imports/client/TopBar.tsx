import * as React from "react";
import { Nav, Navbar, NavItem,Modal,Button } from "react-bootstrap";
import AccountsUIWrapper from "./AccountsUIWrapper";
import { AddGroupDialog } from "./AddGroupDialog";
import { SetAvatarDialog } from "./SetAvatarDialog";

interface NavigationProperties {
    fixedTop?:boolean;
}
interface TopBarState {
    showAddGroupDialog:boolean;
    showSetAvatarDialog:boolean;
}
export class TopBar extends React.Component<NavigationProperties,TopBarState > {
    constructor(props:NavigationProperties) {
        super(props);
        this.state = {
            showAddGroupDialog: false,
            showSetAvatarDialog: false,
        }
    }
    render () {
        return (
            <Navbar fixedTop={this.props.fixedTop}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>

                    <Nav>
                        <NavItem onSelect={()=>this.setState({showAddGroupDialog:true})}>Add Group</NavItem>
                        <NavItem onSelect={()=>this.setState({showSetAvatarDialog:true})}>Change Avatar</NavItem>
                        <NavItem eventKey={1} href="#"><AccountsUIWrapper /></NavItem>
                    </Nav>
                </Navbar.Collapse>
                <AddGroupDialog show={this.state.showAddGroupDialog} close={()=>this.setState({showAddGroupDialog:false})}/>
                <SetAvatarDialog show={this.state.showSetAvatarDialog} close={()=>this.setState({showSetAvatarDialog:false})}/>

            </Navbar>
        );
    }
}
