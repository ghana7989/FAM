import React, { useState } from 'react'
import { AiOutlineMail, AiOutlineLogin } from 'react-icons/ai'
import logo from '../../assets/favicon-32x32.png'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
	const [current, setCurrent] = useState('')

	const handleOnSelect = e => {
		console.log('e: ', e)
	}
	return (
		<Navbar
			collapseOnSelect
			onSelect={handleOnSelect}
			expand="lg"
			bg="dark"
			variant="dark">
			<Container>
				<LinkContainer to="/">
					<Navbar.Brand>
						<img
							src={logo}
							width="32"
							height="32"
							className="d-inline-block align-top"
							alt="logo"
						/>{' '}
						FAM
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse
					id="responsive-navbar-nav"
					style={{
						justifyContent: 'flex-end',
					}}>
					<Nav>
						<LinkContainer to="/login">
							<Nav.Link>
								Login <AiOutlineLogin size={20} />
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/register">
							<Nav.Link>
								Register <AiOutlineMail size={20} />
							</Nav.Link>
						</LinkContainer>
						<NavDropdown title="Username" id="collasible-nav-dropdown">
							<NavDropdown.Item>Action</NavDropdown.Item>
							<NavDropdown.Item>Another action</NavDropdown.Item>
							<NavDropdown.Item>Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item color="danger">Log Out</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
