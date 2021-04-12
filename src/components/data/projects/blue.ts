import { IProject } from '../IProject'

const img1 = process.env.REACT_APP_IMAGE_URL + 'blender/donut2020-1.png'
const img2 = process.env.REACT_APP_IMAGE_URL + 'blender/donut2021-1.png'
const img3 = process.env.REACT_APP_IMAGE_URL + 'blender/cup2021-1.png'

export const blue: IProject = {
	title: 'Blue',
	photos: [
		{
			title: 'Donut',
			thumbnail: img1,
			img: img1,
			date: '2/3/20',
			info: {
				app: 'Blender',
				tutorial: 'https://www.youtube.com/watch?v=TPrnSACiTJ4&list=PLexwJr_iILK7IkuhEeAYeN7aLV5AAXKa-',
			},
		},
		{
			title: 'Donut',
			thumbnail: img2,
			img: img3,
			date: '3/23/21',
			info: {
				app: 'Blender',
				tutorial: 'https://www.youtube.com/watch?v=TPrnSACiTJ4&list=PLexwJr_iILK7IkuhEeAYeN7aLV5AAXKa-',
			},
		},
		{
			title: 'Cup',
			thumbnail: img3,
			img: img3,
			date: '3/24/21',
			info: {
				app: 'Blender',
				tutorial: 'https://www.youtube.com/watch?v=TPrnSACiTJ4&list=PLexwJr_iILK7IkuhEeAYeN7aLV5AAXKa-',
			},
		},
	],
}
