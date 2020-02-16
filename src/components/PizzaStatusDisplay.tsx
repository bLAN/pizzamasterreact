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
	},
	{
		id: 5,
		name: 'Kristine',
		pizzaType: 'Big One',
		pizzaId: 3,
		status: 2
	},
]

const Col = styled.div`
	margin-right: 7px;
	margin-left: 7px;
	padding: 5px;
	text-align: center;
`

export interface PizzaStatusDisplayProps {
	isAdmin: boolean
}

const inQueue = (isAdmin: boolean) =>  orders.map(order => {
		if (order.status === 1) {
			return <PizzaCard order={order} isAdmin={isAdmin} key={order.id} />
		}
		return null
	}
)
const inOven = (isAdmin: boolean) =>  orders.map(order => {
		if (order.status === 2) {
			return <PizzaCard order={order} isAdmin={isAdmin} key={order.id} />
		}
		return null
	}
)
const isFinished = (isAdmin: boolean) => orders.map(order => {
		if (order.status === 3) {
			return <PizzaCard order={order} isAdmin={isAdmin} key={order.id} />
		}
		return null
	}
)

const PizzaStatusDisplay = ({ isAdmin }: PizzaStatusDisplayProps) => {
	return (
		<div>
			<Grid>
				<Col>
					<h3>I Kø</h3>
					{inQueue(isAdmin)}
				</Col>
				<Col>
					<h3>I Ovn</h3>
					{inOven(isAdmin)}
				</Col>
				<Col>
					<h3>Klar for Henting</h3>
					{isFinished(isAdmin)}
				</Col>
			</Grid>
		</div>
	)
}

export default PizzaStatusDisplay
