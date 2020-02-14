// @ts-ignore
import React from 'react'
import PizzaSelectForm from '../components/PizzaSelectForm'
import PizzaStatusDisplay from '../components/PizzaStatusDisplay'

const OrderPage = () => {
	return (
		<div>
			<h1>Velkommen til bLAN!</h1>
			<PizzaSelectForm />
			<PizzaStatusDisplay />
		</div>
	)
}

export default OrderPage
