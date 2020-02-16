import React from 'react';
import MaterialTable, { Column } from 'material-table';

interface Row {
	item: string;
	itemId: number;
	stock: number;
}

interface TableState {
	columns: Array<Column<Row>>;
	data: Row[];
}

export default function DatabaseManagement() {
	const [state, setState] = React.useState<TableState>({
		columns: [
			{ title: 'Item', field: 'item' },
			{ title: 'Item ID', field: 'itemId', type: 'numeric' },
			{ title: 'Stock', field: 'stock', type: 'numeric' },
		],
		data: [
			{ item: 'Grandiosa', itemId: 1, stock: 43 },
			{ item: 'Grandiosa Pepperoni', itemId: 2, stock: 64, },
			{ item: 'Big One', itemId: 3, stock: 13, },
			{ item: 'Big One Triple Cheese', itemId: 4, stock: 61, },
		],
	});

	return (
		<MaterialTable
			title="Ikkje kødd med denne om du ikkje veit ka du gjer! :)"
			columns={state.columns}
			data={state.data}
			editable={{
				onRowAdd: newData =>
					new Promise(resolve => {
						setTimeout(() => {
							resolve();
							setState(prevState => {
								const data = [...prevState.data];
								data.push(newData);
								return { ...prevState, data };
							});
						}, 600);
					}),
				onRowUpdate: (newData, oldData) =>
					new Promise(resolve => {
						setTimeout(() => {
							resolve();
							if (oldData) {
								setState(prevState => {
									const data = [...prevState.data];
									data[data.indexOf(oldData)] = newData;
									return { ...prevState, data };
								});
							}
						}, 600);
					}),
				onRowDelete: oldData =>
					new Promise(resolve => {
						setTimeout(() => {
							resolve();
							setState(prevState => {
								const data = [...prevState.data];
								data.splice(data.indexOf(oldData), 1);
								return { ...prevState, data };
							});
						}, 600);
					}),
			}}
		/>
	);
}
