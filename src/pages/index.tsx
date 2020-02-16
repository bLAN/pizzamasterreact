import React from 'react'
import PizzaSelectForm from '../components/PizzaSelectForm'
import PizzaStatusDisplay from '../components/PizzaStatusDisplay'
import Wrapper from '../components/Wrapper'

const Index = () => {
	return (
		<Wrapper>
			<h1>Velkommen til bLAN!</h1>
			<PizzaSelectForm />
			<PizzaStatusDisplay isAdmin={false} />
		</Wrapper>
	)
}

export default Index
