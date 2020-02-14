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
	const [value, setValue] = React.useState('female');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};

	return (
		<div>
			<FormControl component="fieldset" className={classes.formControl} style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
				<FormLabel component="legend">Velg èn Pizza</FormLabel>
				<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} style={{ display: 'flex', flexDirection: 'row' }}>
					<FormControlLabel value="Grandiosa" control={<Radio />} label="Grandiosa" />
					<FormControlLabel value="Grandiosa Pepperoni" control={<Radio />} label="Grandiosa Pepperoni" />
					<FormControlLabel value="Big One" control={<Radio />} label="Big One" />
					<FormControlLabel value="Big One Tripple Cheese" control={<Radio />} label="Big One Tripple Cheese" />
					<FormControlLabel
						value="disabled"
						disabled
						control={<Radio />}
						label="(Disabled option)"
					/>
				</RadioGroup>
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
