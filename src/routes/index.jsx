import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Importa Navigate

import AuthLayout from '../layout/auth';
import CustomerLayout from '../layout/admin';
import OperativeLayout from '../layout/Operative';

import AuthGuard from '../guards/AuthGuard';
import GuestGuard from '../guards/GuestGuard';

// project import
import LoginRoutes from './LoginRoutes';
import CustomerRoutes from './authRouth';
import OperativeRoutes from './OperativeRoutes';

// Función recursiva para renderizar rutas anidadas
const renderRoutes = routes => {
    return routes.map(route => {
        if (route.children) {
            return (
                <Route key={route.path} path={route.path} element={route.element}>
                    {renderRoutes(route.children)}
                </Route>
            );
        } else {
            return <Route key={route.path} path={route.path} element={route.element} />;
        }
    });
};

// ==============================|| ROUTING RENDER ||============================== //

const AppRoutes = () => {
    const customerRoles = "admin"
    const operativeRoles = "user"

    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas públicas (LoginRoutes) */}
                <Route
                    path={LoginRoutes.path}
                    element={
                        <GuestGuard>
                            <AuthLayout />
                        </GuestGuard>
                    }
                >
                    {renderRoutes(LoginRoutes.children)}
                </Route>

                {/* Rutas de cliente (CustomerRoutes) */}
                <Route
                    path={CustomerRoutes.path}
                    element={
                        <AuthGuard allowedRoles={customerRoles}>
                            <CustomerLayout />
                        </AuthGuard>
                    }
                >
                    {renderRoutes(CustomerRoutes.children)}
                </Route>

                {/* Rutas de operativa (OperativeRoutes) */}
                <Route
                    path={OperativeRoutes.path}
                    element={
                        <AuthGuard allowedRoles={operativeRoles}>
                            <OperativeLayout />
                        </AuthGuard>
                    }
                >
                    {renderRoutes(OperativeRoutes.children)}
                </Route>

                {/* Redirigir rutas no válidas a la página por defecto */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
