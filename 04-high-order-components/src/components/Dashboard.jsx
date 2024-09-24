import { withAuth } from "./HOCs/withAuth"

//Componente original
export const Dashboard = () => {
  return <h1>Bienvenido a tu panel de control 🤖</h1>
}

//Componente mejorado
export const ProtectedDashboard = withAuth(Dashboard)