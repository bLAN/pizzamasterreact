import React from 'react'
import PizzaCard from './PizzaCard'
import Grid from './grids/Grid'
import styled from 'styled-components'

const orders = [
	{
		id: 1,
		name: 'Jon Fossheim',
		pizzaType: 'Grandiosa',
		pizzaId: 1,
		status: 1
	},
	{
		id: 2,
		name: 'Erviker',
		pizzaType: 'Big One',
		pizzaId: 3,
		status: 1
	},
	{
		id: 3,
		name: 'Markjen',
		pizzaType: 'Grandiosa Pepperoni',
		pizzaId: 2,
		status: 2
	},
	{
		id: 4,
		name: 'Tech Simen',
		pizzaType: 'Big One Triple Cheese',
		pizzaId: 4,
		status: 3
	}
]

const Col = styled.div`
	margin-right: 7px;
	margin-left: 7px;
	padding: 5px;
	text-align: center;
`


const inQueue = orders.map(order => {
		if (order.status === 1) {
			return <PizzaCard order={order} />
		}
		return null
	}
)
const inOven = orders.map(order => {
		if (order.status === 2) {
			return <PizzaCard order={order} />
		}
		return null
	}
)
const isFinished = orders.map(order => {
		if (order.status === 3) {
			return <PizzaCard order={order} />
		}
		return null
	}
)

const PizzaStatusDisplay = () => {
	return (
		<div>
			<h2>Pizza Status</h2>
			<Grid>
				<Col>
					<h3>I Kø</h3>
					{inQueue}
				</Col>
				<Col>
					<h3>I Ovn</h3>
					{inOven}
				</Col>
				<Col>
					<h3>Klar for Henting</h3>
					{isFinished}
				</Col>
			</Grid>
		</div>
	)
}

export default PizzaStatusDisplay
