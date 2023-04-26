import { IProduct } from '../interfaces';

const filterByTypeResult: IProduct[] = [
	{
		id: '467',
		imgUrl: 'image2',
		title: 'B',
		types: ["Средство для стирки"],
		subtypes: ["Гель"],
		typeSize: 'мл',
		size: '450',
		barcode: '457567568667',
		manufacturer: 'BIMAX',
		brand: 'BIMAX',
		description: 'Lorem ipsum, dolor sit amet consectetur',
		price: '250'
	},
	{
		id: '434',
		imgUrl: 'image3',
		title: 'A',
		types: ["Средство для стирки", "Средство для мытья посуды"],
		subtypes: ["Порошок"],
		typeSize: 'г',
		size: '500',
		barcode: '457567546667',
		manufacturer: 'ARIEL',
		brand: 'ARIEL',
		description: 'Lorem ipsum, dolor sit amet consectetur',
		price: '220'
	}
];

export default filterByTypeResult;
