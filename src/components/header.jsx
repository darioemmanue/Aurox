import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/header.css";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [hidden, setHidden] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const ignoreHideRef = useRef(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;
			setScrolled(currentScroll > 40);

			if (ignoreHideRef.current) return;
			if (currentScroll > lastScrollY && currentScroll > 100) {
				setHidden(true);
			} else {
				setHidden(false);
			}
			setLastScrollY(currentScroll);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	const handleHeaderClick = (e, target) => {
		e.preventDefault();
		ignoreHideRef.current = true;
		const section = document.querySelector(target);
		if (section) {
			window.scrollTo({
				top: section.offsetTop - 80,
				behavior: "smooth",
			});
		}
		setTimeout(() => (ignoreHideRef.current = false), 1000);
	};

	return (
		<motion.header
			initial={{ y: -80 }}
			animate={{ y: hidden ? -90 : 0 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
			className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${
				scrolled ? "bg-white/90 shadow-md backdrop-blur-lg" : "bg-transparent"
			}`}>
			<div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
				{/* LOGO */}
				<div className="flex items-center gap-3">
					<img
						src="/Aurox.png"
						alt="Aurox Logo"
						className="w-10 h-10 sm:w-11 sm:h-11 object-contain hover:scale-110 transition-transform duration-300 logo-glow"
					/>
					<h1
						className={`text-xl sm:text-2xl font-extrabold tracking-tight ${
							scrolled ? "text-slate-900" : "text-white"
						}`}>
						Aurox
					</h1>
				</div>

				{/* NAV (Desktop) */}
				<nav className="hidden md:flex gap-8 lg:gap-10">
					{["Inicio", "Beneficios", "Funcionalidades", "Contacto"].map(
						(item) => (
							<motion.a
								whileHover={{ scale: 1.1 }}
								key={item}
								href={`#${item.toLowerCase()}`}
								onClick={(e) => handleHeaderClick(e, `#${item.toLowerCase()}`)}
								className={`relative text-sm font-medium tracking-wide nav-link ${
									scrolled
										? "text-slate-800 hover:text-sky-600"
										: "text-white hover:text-sky-300"
								}`}>
								{item}
							</motion.a>
						)
					)}
				</nav>

				{/* CTA (solo desktop) */}
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.97 }}
					onClick={(e) => handleHeaderClick(e, "#inicio")}
					className={`hidden md:block px-6 py-2.5 rounded-full font-semibold transition-all button-modern ${
						scrolled
							? "bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-md hover:shadow-blue-400/40"
							: "border-2 border-white text-white hover:bg-white/10"
					}`}>
					Empezar
				</motion.button>

				{/* Botón Hamburguesa */}
				<div className="md:hidden">
					<motion.button
						whileTap={{ scale: 0.9 }}
						onClick={() => setMenuOpen(!menuOpen)}
						className={`transition-colors ${
							scrolled ? "text-slate-800" : "text-white"
						}`}>
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

			{/* MENU LATERAL (slide desde la derecha) */}
			<AnimatePresence>
				{menuOpen && (
					<>
						{/* Overlay */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.5 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
							onClick={() => setMenuOpen(false)}
						/>
						{/* Panel */}
						<motion.nav
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "spring", stiffness: 80 }}
							className="fixed top-0 right-0 w-3/4 sm:w-2/5 h-full bg-white text-slate-900 shadow-2xl flex flex-col items-center justify-center gap-6 z-50">
							{["Inicio", "Beneficios", "Funcionalidades", "Contacto"].map(
								(item, i) => (
									<motion.a
										key={i}
										initial={{ opacity: 0, x: 40 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: i * 0.1 }}
										whileHover={{ scale: 1.1 }}
										href={`#${item.toLowerCase()}`}
										onClick={(e) => {
											setMenuOpen(false);
											handleHeaderClick(e, `#${item.toLowerCase()}`);
										}}
										className="text-lg font-medium hover:text-sky-600 transition">
										{item}
									</motion.a>
								)
							)}
							<motion.button
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5 }}
								whileHover={{ scale: 1.05 }}
								onClick={(e) => {
									setMenuOpen(false);
									handleHeaderClick(e, "#inicio");
								}}
								className="mt-6 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full font-semibold shadow-md hover:shadow-blue-400/30 transition">
								Empezar
							</motion.button>
						</motion.nav>
					</>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default Header;
