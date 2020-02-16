import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formControl: {
			margin: theme.spacing(3),
		},
	}),
);

export default function PizzaSelectForm() {
	const classes = useStyles();
	const [value, setValue] = React.useState('1');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};

	return (
		<div style={{ width: '100%', maxWidth: '1100px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', margin: '0 auto' }}>
			<FormControl component="fieldset" className={classes.formControl}>
				<FormLabel component="legend">Velg èn Pizza</FormLabel>
				<RadioGroup aria-label="pizza" name="pizza" value={value} onChange={handleChange}
							style={{ display: 'flex', flexDirection: 'row' }}>
					<FormControlLabel value="1" control={<Radio />} label="Grandiosa" />
					<FormControlLabel value="2" control={<Radio />} label="Grandiosa Pepperoni" />
					<FormControlLabel value="3" control={<Radio />} label="Big One" />
					<FormControlLabel value="4" control={<Radio />} label="Big One Triple Cheese" />

				</RadioGroup>
			</FormControl>
			<FormControl>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<TextField id="standard-basic" label="Ditt Navn" style={{ width: '300px', margin: '15px' }} />
					<Button variant="contained" color="primary" style={{ height: '3rem', marginTop: '15px' }}>
						Bestill
					</Button>
				</div>
			</FormControl>
		</div>
	);
}
