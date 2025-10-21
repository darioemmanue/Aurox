import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	OrbitControls,
	useGLTF,
	// Environment, // Eliminamos Environment para un fondo blanco puro
} from "@react-three/drei";

function Modelo() {
	// Carga del modelo 3D
	const { scene } = useGLTF("/Aurox.glb");
	const ref = useRef();

	// Pequeña animación de rotación continua del modelo mismo (eje Y)
	useFrame(() => {
		if (ref.current) {
			ref.current.rotation.y += 0.002; // Rotación sutil del modelo
		}
	});

	return (
		<primitive
			ref={ref}
			object={scene}
			scale={4} // Ajustamos la escala para que sea un poco más grande
			position={[0, -3, 0]} // IMPORTANTE: Centramos el modelo en el origen para que gire sobre el centro de la cámara
		/>
	);
}

export default function ModeloAurox() {
	return (
		<div
			className="w-full h-full" // Ocupa todo el alto y ancho disponible del padre
		>
			<Canvas
				// Configuración de la cámara
				camera={{
					// Posición de la cámara: Derecha y sin inclinación (X=0, Y=0)
					position: [0, 0, 10],
					// Campo de visión: Reducido para simular zoom sin perspectiva
					fov: 38,
				}}
				gl={{ antialias: true }}>
				{/* Luces */}
				<ambientLight intensity={3.0} />{" "}
				{/* Aumentamos la luz ambiental para una iluminación uniforme y muy brillante */}
				<directionalLight position={[5, 10, 5]} intensity={1} />
				<Suspense fallback={null}>
					<Modelo />
				</Suspense>
				{/* Controles: Todos deshabilitados excepto la rotación del modelo en useFrame */}
				<OrbitControls
					enableZoom={false} // Deshabilitar zoom
					enablePan={false} // Deshabilitar paneo
					enableRotate={true} // Deshabilitar la rotación manual del usuario
					autoRotate={false} // Desactivar la rotación automática de la CÁMARA
				/>
			</Canvas>
		</div>
	);
}
