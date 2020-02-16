import React from 'react'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DoneIcon from '@material-ui/icons/Done';

export interface PizzaAdminGroupProps {
	status: number
}

const PizzaAdminGroup = ({status}: PizzaAdminGroupProps) => {

	return (
		<div style={{display: 'flex', justifyContent: 'space-around'}}>
			{status > 1 &&
			<Button
				variant="contained"
				color="primary"
				startIcon={<ArrowBackIcon />}
			>
				Ned
			</Button>
			}

			<Button
				variant="contained"
				color="secondary"
				startIcon={<DeleteIcon />}
			>
				Del
			</Button>

			{status < 3 &&
			<Button
				variant="contained"
				color="primary"
				endIcon={<ArrowForwardIcon />}
			>
				Opp
			</Button>
			}
			{status === 3 &&
			<Button
				variant="contained"
				color="primary"
				endIcon={<DoneIcon />}
			>
				Ferdig
			</Button>
			}
		</div>
	)
}

export default PizzaAdminGroup
