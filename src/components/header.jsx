import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/header.css";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [hidden, setHidden] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const ignoreHideRef = useRef(false); // 👉 evita ocultar cuando se hace clic en un link

	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;
			setScrolled(currentScroll > 40);

			if (ignoreHideRef.current) return; // ⛔ no ocultar mientras hay scroll automático

			if (currentScroll > lastScrollY && currentScroll > 100) {
				setHidden(true); // hacia abajo → ocultar header
			} else {
				setHidden(false); // hacia arriba → mostrar header
			}
			setLastScrollY(currentScroll);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	// 🚀 Función para manejar clics en enlaces del header
	const handleHeaderClick = (e, target) => {
		e.preventDefault();
		ignoreHideRef.current = true; // Evita ocultar temporalmente
		const section = document.querySelector(target);
		if (section) {
			window.scrollTo({
				top: section.offsetTop - 80,
				behavior: "smooth",
			});
		}
		setTimeout(() => {
			ignoreHideRef.current = false; // Vuelve al comportamiento normal
		}, 1000);
	};

	return (
		<motion.header
			initial={{ y: -80 }}
			animate={{ y: hidden ? -90 : 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
				scrolled ? "bg-white/90 shadow-md backdrop-blur-lg" : "bg-transparent"
			}`}>
			<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
				{/* 🔷 LOGO */}
				<div className="flex items-center gap-3">
					<img
						src="/Aurox.png"
						alt="Aurox Logo"
						className="w-11 h-11 object-contain hover:scale-110 transition-transform duration-300 logo-glow"
					/>
					<h1
						className={`text-2xl font-extrabold tracking-tight ${
							scrolled ? "text-slate-900" : "text-white"
						}`}>
						Aurox
					</h1>
				</div>

				{/* 🧭 NAV - Desktop */}
				<nav className="hidden md:flex gap-10">
					{["Inicio", "Beneficios", "Funcionalidades", "Contacto"].map(
						(item, i) => (
							<motion.a
								whileHover={{ scale: 1.1 }}
								key={i}
								href={`#${item.toLowerCase()}`}
								onClick={(e) => handleHeaderClick(e, `#${item.toLowerCase()}`)}
								className={`relative text-sm font-medium tracking-wide transition-colors nav-link ${
									scrolled
										? "text-slate-800 hover:text-sky-600"
										: "text-white hover:text-sky-300"
								}`}>
								{item}
							</motion.a>
						)
					)}
				</nav>

				{/* 🔘 CTA Button */}
				<motion.button
					whileHover={{ scale: 1.08 }}
					whileTap={{ scale: 0.97 }}
					onClick={(e) => handleHeaderClick(e, "#inicio")}
					className={`hidden md:block relative px-7 py-2.5 rounded-full font-semibold transition-all duration-500 overflow-hidden button-modern ${
						scrolled
							? "bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white shadow-lg hover:shadow-blue-500/40"
							: "bg-transparent border-2 border-white text-white hover:bg-white/10"
					}`}>
					<span className="relative z-10">Empezar</span>
				</motion.button>

				{/* 📱 Mobile Menu Button */}
				<div className="md:hidden flex items-center">
					<motion.button
						whileTap={{ scale: 0.9 }}
						onClick={() => setMenuOpen(!menuOpen)}
						className={`${
							scrolled ? "text-slate-800" : "text-white"
						} focus:outline-none`}>
						{menuOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-7 w-7"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-7 w-7"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</motion.button>
				</div>
			</div>

			{/* 📱 Mobile Menu Dropdown */}
			<AnimatePresence>
				{menuOpen && (
					<motion.nav
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="md:hidden bg-white/95 backdrop-blur-md text-slate-900 flex flex-col items-center gap-6 py-6 shadow-lg border-t border-slate-300">
						{["Inicio", "Beneficios", "Funcionalidades", "Contacto"].map(
							(item, i) => (
								<a
									key={i}
									href={`#${item.toLowerCase()}`}
									onClick={(e) => {
										setMenuOpen(false);
										handleHeaderClick(e, `#${item.toLowerCase()}`);
									}}
									className="text-lg font-medium hover:text-sky-600 transition">
									{item}
								</a>
							)
						)}
						<button
							onClick={(e) => {
								setMenuOpen(false);
								handleHeaderClick(e, "#inicio");
							}}
							className="px-6 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-blue-500/40 transition-all">
							Empezar
						</button>
					</motion.nav>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default Header;
