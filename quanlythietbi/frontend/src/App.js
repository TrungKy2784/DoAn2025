import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './dark_mod/theme-context';
import Index from "./front_end";
import {publicRoutes, FrontendRoute } from "./route/frontend";
import './front_end/assets/css/nucleo-icons.css';
import './front_end/assets/css/nucleo-svg.css';
import './front_end/assets/css/argon-dashboard-tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    {/* Public routes (không dùng layout chung) */}
                    {publicRoutes.map((route, index) => (
                        <Route
                            key={`public-${index}`}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                    {/* Main layout route */}
                    <Route path="/" element={<Index />}>
                        {/* Nested routes */}
                        {FrontendRoute.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={<route.component />}
                            />
                        ))}
                    </Route>

                    {/* Catch-all NotFound Route */}
                    <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;