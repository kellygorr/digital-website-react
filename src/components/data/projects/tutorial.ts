import { IProject } from '../IProject'

const img1 = process.env.REACT_APP_IMAGE_URL + 'blender/donut2020-2.png'
const img2 = process.env.REACT_APP_IMAGE_URL + 'blender/donut2020-3.png'
const img3 = process.env.REACT_APP_IMAGE_URL + 'blender/donut2021-2.png'
const img4 = process.env.REACT_APP_IMAGE_URL + 'blender/donut2021-3.png'
const img5 = process.env.REACT_APP_IMAGE_URL + 'blender/cup2021-2.png'
const img6 = process.env.REACT_APP_IMAGE_URL + 'blender/cup2021-3.png'
const img7 = process.env.REACT_APP_IMAGE_URL + 'blender/diner2021-1.png'

export const tutorial: IProject = {
	title: 'Tutorial',
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
			img: img2,
			date: '2/3/20',
			info: {
				app: 'Blender',
				tutorial: 'https://www.youtube.com/watch?v=TPrnSACiTJ4&list=PLexwJr_iILK7IkuhEeAYeN7aLV5AAXKa-',
			},
		},
		{
			title: 'Donut',
			thumbnail: img3,
			img: img3,
			date: '3/24/21',
			info: {
				app: 'Blender',
				tutorial: 'https://www.youtube.com/watch?v=TPrnSACiTJ4&list=PLexwJr_iILK7IkuhEeAYeN7aLV5AAXKa-',
			},
		},
		{
			title: 'Donut',
			thumbnail: img4,
			img: img4,
			date: '3/24/21',
			info: {
				app: 'Blender',
				tutorial: 'https://www.youtube.com/watch?v=TPrnSACiTJ4&list=PLexwJr_iILK7IkuhEeAYeN7aLV5AAXKa-',
			},
		},
		{
			title: 'Cup',
			thumbnail: img5,
			img: img5,
			date: '3/25/21',
			info: {
				app: 'Blender',
				tutorial: 'https://www.youtube.com/watch?v=TPrnSACiTJ4&list=PLexwJr_iILK7IkuhEeAYeN7aLV5AAXKa-',
			},
		},
		{
			title: 'Cup',
			thumbnail: img6,
			img: img6,
			date: '3/25/21',
			info: {
				app: 'Blender',
				tutorial: 'https://www.youtube.com/watch?v=TPrnSACiTJ4&list=PLexwJr_iILK7IkuhEeAYeN7aLV5AAXKa-',
			},
		},
		{
			title: 'Diner',
			thumbnail: img7,
			img: img7,
			date: '3/26/21',
			info: {
				app: 'Blender',
				tutorial: 'https://www.youtube.com/watch?v=TPrnSACiTJ4&list=PLexwJr_iILK7IkuhEeAYeN7aLV5AAXKa-',
			},
		},
	],
}
