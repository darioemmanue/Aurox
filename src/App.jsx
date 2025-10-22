import React from "react";
import { motion } from "framer-motion";
import {
	ChevronUp,
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
	Star,
} from "lucide-react";
import emailjs from "emailjs-com";
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
	visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const container = {
	hidden: { opacity: 1, scale: 0.95 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { delayChildren: 0.3, staggerChildren: 0.2 },
	},
};

const Footer = () => (
	<footer className="py-10 bg-gray-900 text-white text-center">
		<div className="max-w-7xl mx-auto px-6">
			<a
				href="#inicio"
				className="text-3xl font-extrabold text-sky-400 tracking-wider mb-3 block">
				Aurox
			</a>
			<p className="text-gray-300 mb-1">Tecnología local, resultados reales.</p>
			<p className="text-gray-500 text-sm mb-5">
				© 2025 Aurox Software. Todos los derechos reservados.
			</p>
			<div className="flex justify-center gap-8 text-sm">
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
			text: "Personalizado para tu rubro: almacén, ferretería o comercio.",
		},
		{
			icon: "🔒",
			title: "Seguridad local",
			text: "Tus datos quedan en tu entorno, sin depender de servidores externos.",
		},
		{
			icon: "👨‍💼",
			title: "Soporte cercano",
			text: "Capacitación y acompañamiento personalizado para cada cliente.",
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

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;
		const statusEl = document.getElementById("statusMessage");

		try {
			await emailjs.sendForm(
				"service_2gu3toa",
				"template_4qxc6bg",
				form,
				"2ZQUe3WecNCPsbLXq"
			);

			statusEl.textContent =
				"✅ Mensaje enviado correctamente. ¡Gracias por contactarnos!";
			statusEl.className = "text-green-600 font-medium mt-3";
			form.reset();

			setTimeout(() => (statusEl.textContent = ""), 4000);
		} catch (error) {
			statusEl.textContent =
				"❌ Error al enviar el mensaje. Intenta nuevamente.";
			statusEl.className = "text-red-600 font-medium mt-3";
		}
	};

	return (
		<div className="overflow-x-hidden font-inter bg-gray-50 text-gray-900 scroll-smooth">
			<Header />

			{/* HERO SECTION */}
			<section
				id="inicio"
				className="relative flex flex-col items-center justify-center text-center h-screen overflow-hidden bg-cover bg-center"
				style={{ backgroundImage: "url('/fondo.jpg')" }}>
				<div className="absolute inset-0 bg-black/50"></div>
				<motion.div
					className="relative z-10 px-6 max-w-3xl"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}>
					<h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-md">
						Control de Inventario Inteligente
					</h1>
					<p className="text-lg md:text-xl mb-10 text-sky-100 font-light">
						El software de gestión{" "}
						<span className="font-semibold text-sky-300">
							local y adaptable
						</span>{" "}
						que optimiza tu tiempo y maximiza resultados.
					</p>
					<div className="flex flex-col sm:flex-row gap-6 justify-center">
						<a
							href="#contacto"
							className="bg-sky-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-sky-600 transition transform hover:scale-105">
							Solicitar Demo
						</a>
						<a
							href="#funcionalidades"
							className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition transform hover:scale-105">
							Ver Funcionalidades
						</a>
					</div>
				</motion.div>
			</section>

			{/* SOBRE AUROX */}
			<section
				id="que-es-aurox"
				className="flex flex-col-reverse md:flex-row items-center justify-center py-24 gap-12 px-8 md:px-16 bg-white">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					className="w-full max-w-md h-[400px] md:h-[500px]">
					<ModeloAurox />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					className="text-center md:text-left max-w-xl">
					<span className="text-xs font-semibold uppercase tracking-widest text-sky-500 mb-2 block">
						SOBRE NOSOTROS
					</span>
					<h2 className="text-4xl font-extrabold mb-6 text-gray-900">
						Aurox: <span className="text-sky-600">Gestión Inteligente</span>
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						Aurox es un sistema diseñado para{" "}
						<span className="font-semibold">optimizar procesos</span> y brindar
						un control de inventario preciso en tiempo real.
					</p>
					<p className="text-sky-700 font-semibold italic border-l-4 border-sky-400 pl-4">
						Tu aliado tecnológico las 24 hs.
					</p>
				</motion.div>
			</section>

			{/* BENEFICIOS */}
			<section id="beneficios" className="py-24 bg-gray-50 text-center px-6">
				<h2 className="text-4xl font-extrabold mb-16 text-gray-900">
					Impacto en tu Negocio
				</h2>
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
					variants={container}
					initial="hidden"
					whileInView="visible">
					{beneficios.map((b, i) => {
						const Icon = iconMap[b.icon] || BarChart2;
						return (
							<motion.div
								key={i}
								className="p-8 bg-white shadow-xl rounded-xl border border-gray-100 hover:shadow-2xl hover:border-sky-300 transition"
								variants={cardVariants}>
								<div className="p-4 inline-block bg-sky-100 text-sky-600 rounded-full mb-4">
									<Icon size={32} />
								</div>
								<h3 className="font-bold text-2xl mb-3 text-gray-900">
									{b.title}
								</h3>
								<p className="text-gray-600">{b.text}</p>
							</motion.div>
						);
					})}
				</motion.div>
			</section>

			{/* FUNCIONALIDADES */}
			<section
				id="funcionalidades"
				className="py-24 bg text-white px-6"
				style={{ backgroundImage: "url('/fondo2.jpg')" }}>
				<h2 className="text-4xl font-extrabold mb-12 text-center">
					Todo el Poder que Necesitás
				</h2>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
					variants={container}
					initial="hidden"
					whileInView="visible">
					{funcionalidades.map((f, i) => {
						const Icon = f.icon;
						return (
							<motion.div
								key={i}
								className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
								variants={cardVariants}>
								<Icon size={24} className="text-sky-200 mt-1" />
								<p className="text-lg font-light">{f.text}</p>
							</motion.div>
						);
					})}
				</motion.div>
			</section>

			{/* CONTACTO */}
			<section
				id="contacto"
				className="py-24 bg-gradient-to-b from-white to-gray-100 text-center px-6">
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-4xl font-extrabold mb-10 text-gray-900">
					Pedí tu <span className="text-sky-600">Demo Personalizada</span>
				</motion.h2>

				<motion.form
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					onSubmit={handleSubmit}
					className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
					{/* Efecto de Luz Suave */}
					<div className="absolute inset-0 bg-gradient-to-tr from-sky-50 via-transparent to-white opacity-60 pointer-events-none"></div>

					{/* Campo: Nombre */}
					<div className="floating-group">
						<input
							name="name"
							type="text"
							required
							className="floating-input"
							placeholder=" "
						/>
						<label className="floating-label">Nombre y Apellido *</label>
					</div>

					{/* Campo: Empresa */}
					<div className="floating-group">
						<input
							name="empresa"
							type="text"
							className="floating-input"
							placeholder=" "
						/>
						<label className="floating-label">Empresa / Rubro</label>
					</div>

					{/* Campo: Email */}
					<div className="floating-group">
						<input
							name="email"
							type="email"
							required
							className="floating-input"
							placeholder=" "
							pattern="^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
							title="Ingresa un correo válido"
						/>
						<label className="floating-label">Correo electrónico *</label>
					</div>

					{/* Campo: Teléfono */}
					<div className="floating-group">
						<input
							name="telefono"
							type="tel"
							pattern="^[0-9()+\\s-]{6,20}$"
							title="Solo números y símbolos válidos"
							className="floating-input"
							placeholder=" "
						/>
						<label className="floating-label">Teléfono</label>
					</div>

					{/* Campo: Mensaje */}
					<div className="floating-group md:col-span-2">
						<textarea
							name="mensaje"
							rows="4"
							required
							className="floating-input resize-none"
							placeholder=" "></textarea>
						<label className="floating-label">Mensaje *</label>
					</div>

					{/* Botón Enviar */}
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						type="submit"
						className="md:col-span-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl">
						Enviar Mensaje
					</motion.button>

					<motion.p
						id="statusMessage"
						className="md:col-span-2 text-sm mt-3 text-gray-600"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4 }}></motion.p>
				</motion.form>
			</section>

			<Footer />

			<motion.a
				href="#inicio"
				className="fixed bottom-6 right-6 p-3 bg-sky-600 text-white rounded-full shadow-lg hover:bg-sky-700 transition"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}>
				<ChevronUp size={24} />
			</motion.a>
		</div>
	);
}

export default App;
