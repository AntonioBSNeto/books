import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";


export default function Router() {
  return (
    <BrowserRouter future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}