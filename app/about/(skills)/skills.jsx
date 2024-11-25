export default function Skills() {
	return (
		<section className="grid gap-8 md:gap-12">
			<div className="text-center space-y-2">
				<h2 className="text-3xl font-bold mt-3 text-black">
					Skills and Expertise
				</h2>
				<p className="text-muted-foreground max-w-[800px] mx-auto">
					Explore some skills I&apos;m proficient in to deliver high-quality
					solutions.
				</p>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
				<div className="flex flex-col items-center gap-2">
					<ActivityIcon className="w-12 h-12" />
					<div className="font-medium">Machine Learning</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<ElectronicPrototypingIcon className="w-12 h-12" />
					<div className="font-medium">Electronic Prototyping</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<CodepenIcon className="w-12 h-12" />
					<div className="font-medium">Web Development</div>
				</div>
				{/* <div className="flex flex-col items-center gap-2">
					<WebhookIcon className="w-12 h-12" />
					<div className="font-medium">REST API</div>
				</div> */}
				
				{/* <div className="flex flex-col items-center gap-2">
					<MobileIcon className="w-12 h-12" />
					<div className="font-medium">Mobile Development</div>
				</div> */}
				{/* <div className="flex flex-col items-center gap-2">
					<CloudIcon className="w-12 h-12" />
					<div className="font-medium">Cloud Computing</div>
				</div> */}
				{/* <div className="flex flex-col items-center gap-2">
					<BarChartIcon className="w-12 h-12" />
					<div className="font-medium">Data Analysis</div>
				</div> */}
				{/* <div className="flex flex-col items-center gap-2">
					<ComputerIcon className="w-12 h-12" />
					<div className="font-medium">Cybersecurity</div>
				</div> */}
				<div className="flex flex-col items-center gap-2">
					<PackageIcon className="w-12 h-12" />
					<div className="font-medium">Product Management</div>
				</div>
			</div>
		</section>
	);
}

function ActivityIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
		</svg>
	);
}
function CodepenIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
			<line x1="12" x2="12" y1="22" y2="15.5" />
			<polyline points="22 8.5 12 15.5 2 8.5" />
			<polyline points="2 15.5 12 8.5 22 15.5" />
			<line x1="12" x2="12" y1="2" y2="8.5" />
		</svg>
	);
}


function BarChartIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<line x1="12" x2="12" y1="20" y2="10" />
			<line x1="18" x2="18" y1="20" y2="4" />
			<line x1="6" x2="6" y1="20" y2="16" />
		</svg>
	);
}

function CloudIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
		</svg>
	);
}

function ComputerIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<rect width="14" height="8" x="5" y="2" rx="2" />
			<rect width="20" height="8" x="2" y="14" rx="2" />
			<path d="M6 18h2" />
			<path d="M12 18h6" />
		</svg>
	);
}

function PackageIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="m7.5 4.27 9 5.15" />
			<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
			<path d="m3.3 7 8.7 5 8.7-5" />
			<path d="M12 22V12" />
		</svg>
	);
}

function ProjectorIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M5 7 3 5" />
			<path d="M9 6V3" />
			<path d="m13 7 2-2" />
			<circle cx="9" cy="13" r="3" />
			<path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
			<path d="M16 16h2" />
		</svg>
	);
}

function TypeIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<polyline points="4 7 4 4 20 4 20 7" />
			<line x1="9" x2="15" y1="20" y2="20" />
			<line x1="12" x2="12" y1="4" y2="20" />
		</svg>
	);
}

function WebhookIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
			<path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
			<path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
		</svg>
	);
}

function MobileIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
			<line x1="12" x2="12" y1="18" y2="18" />
		</svg>
	);
}

function ElectronicPrototypingIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 122.88 121.2"
			fill="black"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M11.27,0h100.34c3.1,0,5.92,1.27,7.96,3.31c2.04,2.04,3.31,4.86,3.31,7.96v98.66c0,3.14-1.6,5.94-3.94,7.96 c-2.37,2.04-5.58,3.31-8.64,3.31H11.27c-3.1,0-5.92-1.27-7.96-3.31C1.27,115.85,0,113.03,0,109.93V11.27 c0-3.09,1.27-5.91,3.31-7.95l0.01-0.01C5.36,1.27,8.18,0,11.27,0L11.27,0z M61.22,52.51c2.84,0,5.41,1.15,7.26,3.01 c1.86,1.86,3.01,4.43,3.01,7.26c0,2.84-1.15,5.41-3.01,7.26c-1.19,1.19-2.67,2.09-4.32,2.58v42.19h16.23V78.13 c0-0.88,0.38-1.66,0.99-2.2l9.47-9.72c-0.73-1.41-1.15-3.02-1.15-4.73c0-2.84,1.15-5.41,3.01-7.26c1.86-1.86,4.43-3.01,7.26-3.01 c2.84,0,5.41,1.15,7.27,3.01c1.86,1.86,3.01,4.43,3.01,7.26c0,2.84-1.15,5.41-3.01,7.27c-1.86,1.86-4.43,3.01-7.27,3.01 c-1.83,0-3.56-0.48-5.05-1.32l-8.65,8.88v35.51h24.02c1.55,0,3.21-0.68,4.48-1.77c1.03-0.88,1.72-1.99,1.72-3.12V11.27 c0-1.34-0.55-2.56-1.44-3.45c-0.89-0.89-2.11-1.44-3.45-1.44H84.7v9.96c1.65,0.49,3.13,1.39,4.32,2.58 c1.86,1.86,3.01,4.43,3.01,7.27c0,2.84-1.15,5.41-3.01,7.26c-1.86,1.86-4.43,3.01-7.26,3.01c-2.84,0-5.41-1.15-7.26-3.01 c-1.86-1.86-3.01-4.43-3.01-7.26c0-2.84,1.15-5.41,3.01-7.27l0.16-0.15c1.16-1.11,2.58-1.96,4.16-2.43V6.38H57.91v22.98 c0,1.63-1.32,2.94-2.94,2.94H47.4c-0.47,1.77-1.41,3.36-2.66,4.62c-1.86,1.86-4.43,3.01-7.26,3.01c-2.84,0-5.41-1.15-7.26-3.01 c-1.86-1.86-3.01-4.43-3.01-7.26c0-2.84,1.15-5.41,3.01-7.26c1.86-1.86,4.43-3.01,7.26-3.01c2.84,0,5.41,1.15,7.26,3.01 c1.12,1.12,1.98,2.49,2.49,4.03h4.8V6.38H11.27c-1.35,0-2.57,0.55-3.46,1.43C6.93,8.7,6.38,9.92,6.38,11.27v98.66 c0,1.34,0.55,2.56,1.44,3.45c0.89,0.89,2.11,1.44,3.45,1.44h24.99V91.61l-4.56-4.22c-1.43,0.75-3.05,1.18-4.78,1.18 c-2.84,0-5.41-1.15-7.26-3.01c-1.86-1.86-3.01-4.43-3.01-7.26c0-2.84,1.15-5.41,3.01-7.26c1.86-1.86,4.43-3.01,7.26-3.01 c2.84,0,5.41,1.15,7.26,3.01c1.86,1.86,3.01,4.43,3.01,7.26c0,1.82-0.47,3.52-1.3,5l5.08,4.7c0.71,0.54,1.17,1.39,1.17,2.35v24.48 h16.13V72.63c-1.65-0.49-3.13-1.39-4.32-2.58c-1.86-1.86-3.01-4.43-3.01-7.26c0-2.84,1.15-5.41,3.01-7.26 C55.82,53.66,58.39,52.51,61.22,52.51L61.22,52.51z M41.18,25.95c-0.95-0.95-2.26-1.54-3.71-1.54c-1.45,0-2.76,0.59-3.71,1.54 c-0.95,0.95-1.54,2.26-1.54,3.71c0,1.45,0.59,2.76,1.54,3.71s2.26,1.54,3.71,1.54c1.45,0,2.76-0.59,3.71-1.54 c0.95-0.95,1.54-2.26,1.54-3.71C42.72,28.21,42.13,26.9,41.18,25.95L41.18,25.95z M85.47,22.47c-0.95-0.95-2.26-1.54-3.71-1.54 c-1.4,0-2.67,0.54-3.61,1.43l-0.1,0.11c-0.95,0.95-1.54,2.26-1.54,3.71c0,1.45,0.59,2.76,1.54,3.71c0.95,0.95,2.26,1.54,3.71,1.54 c1.45,0,2.76-0.59,3.71-1.54c0.95-0.95,1.54-2.26,1.54-3.71C87,24.73,86.42,23.42,85.47,22.47L85.47,22.47z M26.92,73.04 c-1.45,0-2.76,0.59-3.71,1.54c-0.95,0.95-1.54,2.26-1.54,3.71c0,1.45,0.59,2.76,1.54,3.71c0.95,0.95,2.26,1.54,3.71,1.54 c1.45,0,2.76-0.59,3.71-1.54c0.95-0.95,1.54-2.26,1.54-3.71c0-1.45-0.59-2.76-1.54-3.71C29.68,73.63,28.37,73.04,26.92,73.04 L26.92,73.04z M103.69,57.77c-0.95-0.95-2.26-1.54-3.71-1.54c-1.45,0-2.76,0.59-3.71,1.54c-0.95,0.95-1.54,2.26-1.54,3.71 c0,1.45,0.59,2.76,1.54,3.71c0.95,0.95,2.26,1.54,3.71,1.54c1.45,0,2.76-0.59,3.71-1.54c0.95-0.95,1.54-2.26,1.54-3.71 C105.22,60.03,104.64,58.72,103.69,57.77L103.69,57.77z M64.93,59.08c-0.95-0.95-2.26-1.54-3.71-1.54c-1.45,0-2.76,0.59-3.71,1.54 c-0.95,0.95-1.54,2.26-1.54,3.71c0,1.45,0.59,2.76,1.54,3.71c0.95,0.95,2.26,1.54,3.71,1.54c1.45,0,2.76-0.59,3.71-1.54 c0.95-0.95,1.54-2.26,1.54-3.71C66.47,61.34,65.88,60.03,64.93,59.08L64.93,59.08z"/>
		</svg>
	);
}


