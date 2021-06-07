import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Toast from '../../components/Toast'
import Spacer from 'react-spacer'
import { auth } from '../../firebase'
console.log('auth: ', auth)

const Register = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [toastMessage, setToastMessage] = useState('')
	const handleFormSubmit = async e => {
		e.preventDefault()
		const config = {
			handleCodeInApp: true,
			url: 'http://localhost:3000/register/complete',
		}
		await auth.sendSignInLinkToEmail(email, config)
		setToastMessage(
			`Email sent to ${email}. Click on the link to complete your registration.`,
		)
		// Save user email to local storage
    window.localStorage.setItem(
      'emailForRegistration',
      JSON.stringify( email ) )
		setEmail('')
		setTimeout(() => {
			setToastMessage('')
		}, 3100)
	}
	const registerForm = () => {
		return (
			<>
				{toastMessage && <Toast message={toastMessage} />}
				<Form onSubmit={handleFormSubmit}>
					<Form.Group controlId="email">
						<Form.Label>Email Address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email address"
							value={email}
							onChange={({ target: { value } }) => setEmail(value)}
							autoFocus
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Spacer height="30px" />
					<Button type="submit" variant="primary">
						Register
					</Button>
				</Form>
			</>
		)
	}
	return (
		<Container>
			<Spacer height={60} />
			<Row>
				<Col xs={12} md={6}>
					<h3>Register</h3>
					{registerForm()}
				</Col>
			</Row>
		</Container>
	)
}

export default Register
