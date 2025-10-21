import React from "react";
import { motion } from "framer-motion";
import {
	Menu,
	X,
	Rocket,
	TrendingUp,
	Settings,
	Lock,
	Headset,
	BarChart2,
	Package,
	DollarSign,
	FileText,
	Bell,
	Users,
	CloudOff,
	Search,
	ChevronUp,
	Star,
} from "lucide-react";
import emailjs from "emailjs-com"; // <-- Import EmailJS
import Header from "./components/header";
import ModeloAurox from "./components/modeloAurox";
import "./css/App.css";

const iconMap = {
	"🚀": Rocket,
	"💰": TrendingUp,
	"🧩": Settings,
	"🔒": Lock,
	"👨‍💼": Headset,
	"📊": BarChart2,
};

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: "easeOut" },
	},
};

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { delayChildren: 0.3, staggerChildren: 0.2 },
	},
};

const Footer = () => (
	<footer className="py-12 bg-gray-900 text-white text-center">
		<div className="max-w-7xl mx-auto px-6">
			<a
				href="#inicio"
				className="text-3xl font-extrabold text-sky-400 tracking-wider mb-4 block">
				Aurox
			</a>
			<p className="font-semibold mb-3 text-gray-300">
				Tecnología local, resultados reales.
			</p>
			<p className="text-gray-500 mb-6">
				© 2025 Aurox Software. Todos los derechos reservados.
			</p>
			<div className="flex justify-center gap-8 text-lg">
				<a href="#contacto" className="hover:text-sky-400 transition">
					Contacto
				</a>
				<a href="#" className="hover:text-sky-400 transition">
					Privacidad
				</a>
				<a href="#" className="hover:text-sky-400 transition">
					Términos
				</a>
			</div>
		</div>
	</footer>
);

function App() {
	const beneficios = [
		{
			icon: "🚀",
			title: "Eficiencia operativa",
			text: "Ahorra horas de trabajo automatizando registros y actualizaciones de stock.",
		},
		{
			icon: "💰",
			title: "Mayor rentabilidad",
			text: "Reduce pérdidas y optimiza tus compras con análisis precisos.",
		},
		{
			icon: "🧩",
			title: "Adaptabilidad total",
			text: "Personalizado para tu rubro: almacén, ferretería, distribuidora o comercio.",
		},
		{
			icon: "🔒",
			title: "Seguridad local",
			text: "Tus datos quedan en tu entorno, sin depender de servidores externos.",
		},
		{
			icon: "👨‍💼",
			title: "Soporte cercano",
			text: "Acompañamiento y capacitación personalizada para cada cliente.",
		},
		{
			icon: "📊",
			title: "Decisiones inteligentes",
			text: "Accedé a reportes automáticos y métricas en tiempo real.",
		},
	];

	const funcionalidades = [
		{ icon: Package, text: "Control de inventario en tiempo real" },
		{ icon: DollarSign, text: "Gestión de ventas y facturación integrada" },
		{ icon: FileText, text: "Reportes automáticos y visuales" },
		{ icon: Bell, text: "Alertas de stock mínimo o vencimiento" },
		{ icon: Users, text: "Manejo de múltiples usuarios y roles" },
		{ icon: CloudOff, text: "Funciona sin conexión constante (Offline Ready)" },
		{ icon: Search, text: "Búsqueda avanzada y seguimiento histórico" },
		{ icon: Star, text: "Integración con lectores de código de barras" },
	];

	// ------------------- EMAILJS -------------------
	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_2gu3toa", // <--- reemplaza con tu Service ID
				"template_4qxc6bg", // <--- reemplaza con tu Template ID
				e.target,
				"2ZQUe3WecNCPsbLXq" // <--- reemplaza con tu Public Key
			)
			.then(
				(result) => {
					alert("Mensaje enviado correctamente, nos contactaremos pronto!");
					e.target.reset();
				},
				(error) => {
					alert("Error al enviar el mensaje, intenta nuevamente.");
					console.error(error.text);
				}
			);
	};
	// -----------------------------------------------

	return (
		<div className="overflow-x-hidden font-inter bg-gray-50 text-gray-900">
			<Header />

			<section
				id="inicio"
				className="relative flex items-center justify-center text-center h-screen overflow-hidden">
				<div className="absolute inset-0">
					<img
						src="/fondo.jpg"
						alt="Fondo"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/50"></div>
				</div>

				<motion.div
					className="relative z-10 px-6 max-w-4xl flex flex-col items-center"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}>
					<h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg leading-tight">
						Control de Inventario Inteligente
					</h1>

					<p className="text-lg md:text-xl mb-10 text-sky-200 max-w-3xl font-light">
						El software de gestión de stock{" "}
						<span className="font-semibold">local y adaptable</span> que elimina
						los errores manuales, aumenta la rentabilidad y te da precisión en
						tiempo real.
					</p>

					<div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
						<a
							href="#contacto"
							className="bg-sky-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-sky-500/50 hover:bg-sky-600 transition duration-300 transform hover:scale-105">
							Solicitar Demo Gratuita
						</a>
						<a
							href="#funcionalidades"
							className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition duration-300 transform hover:scale-105">
							Ver Funcionalidades
						</a>
					</div>
				</motion.div>
			</section>

			<section
				id="que-es-aurox"
				className="relative py-24 bg-white flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-20 px-8 md:px-16 overflow-hidden">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 1.2 }}
					className="w-full max-w-md h-[400px] md:h-[500px] relative z-10">
					<ModeloAurox />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 1.2 }}
					className="text-center md:text-left max-w-xl relative z-10 self-center">
					<span className="text-xs font-semibold uppercase tracking-widest text-sky-500 mb-2 block">
						SOBRE NOSOTROS
					</span>
					<h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
						Aurox: La Evolución de la{" "}
						<span className="text-sky-600">Gestión de Stock</span>
					</h2>
					<p className="text-lg text-gray-700 leading-relaxed mb-6">
						Aurox es un software de gestión diseñado para{" "}
						<span className="font-semibold">
							optimizar procesos, reducir costos
						</span>{" "}
						y ofrecer un control de inventario preciso en tiempo real.
					</p>
					<p className="text-sky-700 font-semibold text-lg border-l-4 border-sky-400 pl-4 italic">
						No es solo un sistema, es tu socio tecnológico que trabaja 24/7.
					</p>
				</motion.div>
			</section>

			<section id="beneficios" className="py-24 bg-gray-50 text-center px-6">
				<span className="text-xs font-semibold uppercase tracking-widest text-sky-500 mb-2 block">
					VALOR AGREGADO
				</span>
				<h2 className="text-4xl sm:text-5xl font-extrabold mb-16 text-gray-900">
					Impacto en tu Negocio
				</h2>

				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}>
					{beneficios.map((b, i) => {
						const IconComponent = iconMap[b.icon] || BarChart2;
						return (
							<motion.div
								key={i}
								className="p-8 bg-white shadow-xl rounded-xl border border-gray-100 transition duration-500 transform hover:shadow-2xl hover:border-sky-300"
								variants={cardVariants}>
								<div className="p-4 inline-block bg-sky-100 text-sky-600 rounded-full mb-4">
									<IconComponent size={32} />
								</div>
								<h3 className="font-bold text-2xl mb-3 text-gray-900">
									{b.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">{b.text}</p>
							</motion.div>
						);
					})}
				</motion.div>
			</section>

			<section
				id="funcionalidades"
				className="py-24 bg-sky-600 text-white px-6">
				<div className="max-w-7xl mx-auto text-center">
					<span className="text-xs font-semibold uppercase tracking-widest text-sky-200 mb-2 block">
						CARACTERÍSTICAS CLAVE
					</span>
					<h2 className="text-4xl sm:text-5xl font-extrabold mb-16">
						Todo el Poder que Necesitas
					</h2>

					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left"
						variants={container}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}>
						{funcionalidades.map((f, i) => {
							const IconComponent = f.icon;
							return (
								<motion.div
									key={i}
									className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
									variants={cardVariants}>
									<IconComponent
										size={24}
										className="text-sky-200 mt-1 flex-shrink-0"
									/>
									<p className="text-lg font-light">{f.text}</p>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
			</section>

			<section id="contacto" className="py-24 bg-white text-center px-6">
				<span className="text-xs font-semibold uppercase tracking-widest text-sky-500 mb-2 block">
					EMPECEMOS HOY
				</span>
				<h2 className="text-4xl font-extrabold mb-12 text-gray-900">
					Pedí tu <span className="text-sky-600">Demo Personalizada</span>
				</h2>
				<p className="max-w-xl mx-auto text-lg text-gray-600 mb-10">
					Contanos un poco sobre tu negocio y te contactaremos para coordinar
					una presentación gratuita de Aurox.
				</p>

				<form
					onSubmit={handleSubmit}
					className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-gray-50 rounded-xl shadow-lg">
					<input
						type="text"
						name="name"
						placeholder="Nombre y Apellido"
						className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 transition"
					/>
					<input
						type="text"
						name="empresa"
						placeholder="Empresa / Rubro"
						className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 transition"
					/>
					<input
						type="email"
						name="email"
						placeholder="Email de Contacto"
						className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 transition"
					/>
					<input
						type="tel"
						name="telefono"
						placeholder="Teléfono (Ej: +54 11 XXXX XXXX)"
						className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 transition"
					/>
					<textarea
						name="mensaje"
						placeholder="Mensaje: ¿Cuál es tu mayor desafío de stock hoy?"
						rows="4"
						className="p-4 border border-gray-300 rounded-lg md:col-span-2 focus:ring-2 focus:ring-sky-500 transition"></textarea>
					<button
						type="submit"
						className="bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg md:col-span-2 hover:bg-sky-700 transition duration-300 transform hover:scale-[1.01] shadow-lg shadow-sky-500/30">
						Quiero mi Demo de Aurox
					</button>
				</form>

				<div className="mt-12 text-gray-700">
					<p className="mb-2">📍 Morón Norte, Buenos Aires, Argentina</p>
					<p className="mb-2">
						📞{" "}
						<a
							href="tel:+5411xxxxxxxx"
							className="text-sky-600 hover:underline">
							WhatsApp: +54 11 XXXX XXXX
						</a>
					</p>
					<p>
						📧{" "}
						<a
							href="mailto:contacto@aurox.com.ar"
							className="text-sky-600 hover:underline">
							contacto@aurox.com.ar
						</a>
					</p>
				</div>
			</section>

			<Footer />

			<motion.a
				href="#inicio"
				className="fixed bottom-6 right-6 p-3 bg-sky-600 text-white rounded-full shadow-lg hover:bg-sky-700 transition z-50"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				aria-label="Volver al inicio">
				<ChevronUp size={24} />
			</motion.a>
		</div>
	);
}

export default App;
