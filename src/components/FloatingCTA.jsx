import { useLocation } from "react-router-dom";

export default function FloatingCTA() {
    const location = useLocation();

    // Hide on homepage (/) and contact page (/contact)
    if (location.pathname === "/" || location.pathname === "/contact" || location.pathname === "/thank-you") {
        return null; // don’t render button
    }

    return (
        <a href="/contact" className="floating-cta">
            Schedule Tour
        </a>
    );
}
