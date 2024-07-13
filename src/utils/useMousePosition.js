import { useState, useEffect } from "react";

export default function useMousePosition() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event) => {
			const newPosition = { ...mousePosition };
			newPosition.x = event.clientX;
			newPosition.y = event.clientY;
			setMousePosition(newPosition);
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return mousePosition;
}
