import { CodeIcon, Github, Globe, HomeIcon, NotebookIcon, Youtube } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';
import InstagramSvg from '$lib/imgs/instagram.svg';
import InstagramDarkSvg from '$lib/imgs/instagram-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

import SupernovaIMG from '$lib/imgs/supernovabr.jpg';
import ShopifyImg from '$lib/imgs/shopify.svg';
import NvidiaImg from '$lib/imgs/nvidia.png';
import SplunkImg from '$lib/imgs/splunk.svg';
import LimeImg from '$lib/imgs/lime.svg';
import MitreMediaImg from '$lib/imgs/mitremedia.png';
import IFsulImg from '$lib/imgs/ifsul_lajeado.jpg';
import WaterLooImg from '$lib/imgs/waterloo.png';
import LaurierImg from '$lib/imgs/laurier.png';
import IBImg from '$lib/imgs/ib.png';
import Avatar from '$lib/imgs/avatar.jpg';
import NovaFlow from '$lib/imgs/NovaFlow.png';
import NovaDocs from '$lib/imgs/NovaDocs.png';

// Your resume data
export let DATA = {
	name: 'Samuel Kotz',
	initials: 'SK',
	url: 'https://github.com/SamuelKotz',
	img: 'https://i.pinimg.com/736x/9e/dc/a6/9edca66eba199828bda2dbaf35642154.jpg',
	location: 'Lajeado, Brazil',
	locationLink: 'https://www.google.com/maps/place/lajeado',
	description:
		'Software Developer @SupernovaBR — coffee lover, gamer, and proud Christian.',
	summary:
		'My name is Samuel Kotz, I’m 18 years old, originally from Brasília, Brazil, and currently living in Lajeado. I’m a Software Developer at @SupernovaBR, a tech company based in São Paulo, and a student at IFSul studying Industrial Automation. I’m passionate about technology and love building everything from websites and backend systems to AI applications.',
	avatarUrl: Avatar,
	skills: [
		'Firebase',
		'Next.js',
		'Typescript',
		'Node.js',
		'Python',
		'PHP',
		'Laravel',
		'XAMPP',
		'Apache',
		'Vercel',
		'Insomnia',
		'C++',
		'MySQL',
		'noSQL',
		'AWS',
		'Git',
		'Github',
		'Javascript',
		'Shadcn UI',
		'HTML',
		'CSS',
		'Svelte',
		'AI',
		'TailwindCSS'
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '#projects', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		email: 'samuelkotz10@gmail.com',
		tel: '+5551984422249',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/SamuelKotz',
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/samuelkotz/',
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			X: {
				name: 'X',
				url: 'https://x.com/SKotz10',
				icon: TwitterSvg,
				navbar: true,
				dark_icon: TwitterDarkSvg
			},
			Instagram: {
				name: 'Instagram',
				url: 'https://www.instagram.com/samuel.kotz/',
				icon: InstagramSvg,
				navbar: true,
				dark_icon: InstagramDarkSvg
			},
			email: {
				name: 'Send Email',
				url: '#',
				icon: GmailSvg,
				navbar: false,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: 'SupernovaBR',
			href: 'https://supernovabr.com/',
			badges: [],
			location: 'Hybrid',
			title: 'Software Developer',
			logoUrl: SupernovaIMG,
			start: 'Sep 2024',
			end: 'At moment',
			description:
				'I am responsible for developing and maintaining a variety of systems, including chatbots, AI solutions, databases, and websites. My work spans from defining software scopes to implementation and delivery, as well as leading training sessions and presenting technological solutions to teams and clients.'
		}
	],
	education: [
		{
			school: 'IFSul - Campus Lajeado',
			href: 'https://www.lajeado.ifsul.edu.br/',
			degree: 'High SchoolIntegrated high school with a technical course in industrial automation',
			logoUrl: IFsulImg,
			start: '2023',
			end: '2026'
		}
	],
	certificates: [
		{},
		{},
		{},
		{},
		{},
		{},
		{}
	],
	languages: [
		{},
		{}
	],
	projects: [
		{
			title: 'Nova Flow',
			href: '',
			dates: 'Aug 25 - Oct 2025',
			active: true,
			description:
				'Nova Flow is a complete web application that simulates a Kanban board, allowing users to create boards, add lists (columns), and manage cards (tasks) with custom descriptions and checklists. Beyond task management, the project features an integrated CRM with modules for client information, health status, files, and meeting history — all enhanced with AI-powered features. It also includes a Custom Inventory system and a real-time Dashboard for monitoring customer service data.',
			technologies: [
				'Next.js',
				'React',
				'Firebase',
				'AI',
				'TailwindCSS',
				'Typescript',
				'Shadcn UI'
			],
			image: NovaFlow,
			video: ''
		},
		/* Fica pra usar dps{
			title: 'Magic UI',
			href: 'https://magicui.design',
			dates: 'June 2023 - Present',
			active: true,
			description: 'Designed, developed and sold animated UI components for developers.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Stripe',
				'Shadcn UI',
				'Magic UI'
			],
			links: [
				{
					type: 'Website',
					href: 'https://magicui.design',
					// icon: <Icons.globe className="size-3" />,
					icon: Globe
				},
				{
					type: 'Source',
					href: 'https://github.com/magicuidesign/magicui',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: '',
			video: 'https://cdn.magicui.design/bento-grid.mp4'
		},
		*/{
			title: 'Nova Docs',
			href: '',
			dates: 'Oct 25 - Nov 25',
			active: true,
			description:
				'Nova Docs is a complete documentation solution for software, services, and products. Fully flexible, it allows users to customize and control the content according to their needs. It features an authentication system with differentiated access for visitors, users, and administrators — who can edit and manage content directly within the platform.',
			technologies: [
				'Next.js',
				'Typescript',
				'Firebase',
				'TailwindCSS',
				'Shadcn UI',
				'React',
				'AI'
			],
			image: NovaDocs
		},
	],
	hackathons: []
};