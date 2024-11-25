
import DroneSwarm from "@/public/projects/droneswarm/drones attraction42.png";
import Kickstarter from "@/public/projects/kickstarter/keybanger.jpg";
import ArduinoGame from "@/public/projects/Arduino-Game/arduino-game.png";
import LowTechWearable from "@/public/projects/Low-Tech-Project/low-tech-project.jpg";
// import ArduinoLamp from "@/public/projects/arduino/lamp-project.png";
// import ArduinoPCB from "@/public/projects/arduino/pcb-module.png";
// import ArduinoDrone from "@/public/projects/arduino/arduino-drone.png";
// import ImageClassification from "@/public/projects/ai/image-classification.png";
// import GPTTextGen from "@/public/projects/ai/gpt-text-gen.png";
// import VelomaxDB from "@/public/projects/velomax/velomax-db.png";

export const projects = [
	{
		title: "Drone Swarm Behaviour Simulation",
		desc: "Simulated and controlled virtual clones of Crazyflie drones using Unity. The drones exhibit boid-like behavior to avoid obstacles and respond to attraction points, allowing flexible control of the swarm and easy transition to real-world drone usage.",
		year: "2024",
		tech: "Unity, Boid Algorithms, Drone Control, Real-time Communication",
		bg: DroneSwarm,
		slug: "drone-swarm-behaviour",
		category: 1,
	},
	{
		title: "Key Starter (Kickstarter Crowdfunding Project)",
		desc: "Led the Key Starter crowdfunding project, focusing on product design, team project management, and business development to successfully launch on Kickstarter.",
		year: "2023",
		tech: "Team Management, Design, Business Development",
		bg: Kickstarter,
		slug: "key-starter",
		category: 1,
	},
	{
		title: "Arduino Multiplayer Game",
		desc: "Developed a multiplayer game using custom-built PCBs with ESP32 modules. The game features retro-style graphics on OLED displays and uses UDP for real-time multiplayer communication.",
		year: "2023",
		tech: "ESP32, C++, UDP Networking",
		bg: ArduinoGame,
		slug: "arduino-multiplayer-game",
		category: 1,
	},
	{
		title: "Low-Tech Wearable Interaction System",
		desc: "A wearable system designed to interact with digital content through body movements. Users can control various functions such as play/pause and volume by touching or sliding fingers using handmade sensors.",
		year: "2023",
		tech: "Handmade Sensors, Wearable Technology, Interaction Design",
		bg: LowTechWearable,
		slug: "low-tech-wearable",
		category: 1,
	},
		// {
	// 	title: "Arduino Drone",
	// 	desc: "Built an FPV drone using an ESP32 board, featuring IMU sensors, motor controllers, and PID loops for stable flight. Controlled via Wi-Fi with a custom 3D-printed frame.",
	// 	year: "2023",
	// 	tech: "ESP32, IMU Sensors, PID Control",
	// 	bg: ArduinoDrone,
	// 	slug: "arduino-drone",
	// 	category: 1,
	// },
	// {
	// 	title: "Arduino Lamp Project",
	// 	desc: "A creative project featuring a joystick-controlled lamp inspired by arcade controls. The lamp’s position is adjusted via strings connected to servos, making it both interactive and visually appealing.",
	// 	year: "2023",
	// 	tech: "Arduino, Servos, Joystick Control",
	// 	bg: ArduinoLamp,
	// 	slug: "arduino-lamp-project",
	// 	category: 1,
	// },
	// {
	// 	title: "Custom Arduino PCB Module",
	// 	desc: "Designed and built a custom ESP32 module with KiCad, featuring battery recharging, sound, and LED components. Involved both PCB design and hands-on assembly.",
	// 	year: "2023",
	// 	tech: "ESP32, KiCad, PCB Design",
	// 	bg: ArduinoPCB,
	// 	slug: "arduino-pcb-module",
	// 	category: 1,
	// },
	// {
	// 	title: "Image Classification with Convolutional Neural Network",
	// 	desc: "Built a convolutional neural network in PyTorch to classify images as cats or dogs. The project includes a user interface for image transformation and real-time classification.",
	// 	year: "2023",
	// 	tech: "PyTorch, Image Classification, User Interface",
	// 	bg: ImageClassification,
	// 	slug: "image-classification-cnn",
	// 	category: 1,
	// },
	// {
	// 	title: "GPT Text Generator",
	// 	desc: "Created a simplified GPT model in PyTorch trained on children’s stories. The model generates text based on user input, producing coherent sentence-like structures.",
	// 	year: "2023",
	// 	tech: "PyTorch, GPT, Text Generation",
	// 	bg: GPTTextGen,
	// 	slug: "gpt-text-generator",
	// 	category: 1,
	// },
	// {
	// 	title: "VéloMax Database Project",
	// 	desc: "Developed a database management system for a fictional bike company using SQL Server. Managed clients, sales, and inventory operations to provide a comprehensive business tracking solution.",
	// 	year: "2023",
	// 	tech: "SQL Server, Database Management",
	// 	bg: VelomaxDB,
	// 	slug: "velomax-database",
	// 	category: 1,
	// },
];
