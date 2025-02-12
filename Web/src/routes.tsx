import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./app/Home"
import People from "./app/Persons"


export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/people" element={<People />} />
            </Routes>
        </Router>
    )
}
