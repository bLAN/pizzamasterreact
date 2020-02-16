import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core'
import PizzaAdminGroup from './tools/PizzaAdminGroup'

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 175,
	},
});

export interface PizzaCardProps{
	order: {id: number, name: string, pizzaType: string, pizzaId: number, status: number}
	isAdmin: boolean
}


const PizzaCard = ({ order, isAdmin }: PizzaCardProps) => {
	const classes = useStyles();

	const PizzaImg = ( pizzaId: number ) => {
		switch (pizzaId) {
			case 1:
				return '/images/grandiosa.png'
			case 2:
				return '/images/grandiosa-pepperoni.png'
			case 3:
				return '/images/bigone.png'
			case 4:
				return '/images/bigone-triplecheese.png'
		}
	}

	const AdminTools = (admin: boolean) => {
		if (admin) {
			return <PizzaAdminGroup status={order.status} />
		} else
			return null
	}

	return (
		<Card className={classes.root} style={{ margin: '10px auto', border: '1px solid orange', padding: '5px' }}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={PizzaImg(order.pizzaId)}
					title={order.pizzaType}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{order.name}
					</Typography>
					<Chip label={order.pizzaType} />
				</CardContent>
				{AdminTools(isAdmin)}
			</CardActionArea>
		</Card>
	);
}


export default PizzaCard
