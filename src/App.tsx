import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import  Login  from "./pages/Login";
import RegistrationPage from "./pages/RegistrationPage";
import ClientRegister from "./pages/ClientRegister";
import AgreementPage from "./pages/AgreementPage";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/clientlogin" element={<Login />} />      
          <Route path="/registration" element={<RegistrationPage />} /> 
          <Route path="/client/register" element={<ClientRegister />} />
          <Route path="/agreement" element={<AgreementPage />} />


          <Route path="*" element={<NotFound />} />
       

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
