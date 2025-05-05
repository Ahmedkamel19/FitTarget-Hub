import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/lib/auth-context";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import PlansPage from "./pages/PlansPage";
import NutritionPlan from "./pages/NutritionPlan";
import WorkoutPlan from "./pages/WorkoutPlan";
import AllInOnePlan from "./pages/AllInOnePlan";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQPage from "./pages/FAQPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NutritionDashboard from "./pages/NutritionDashboard";
import WorkoutDashboard from "./pages/WorkoutDashboard";
import AllInOneDashboard from "./pages/AllInOneDashboard";
import YourPlan from "./pages/YourPlan";
import FitnessProfile from "./pages/FitnessProfile";
import CaloriesCalculator from "./pages/CaloriesCalculator";
import FoodAlternativeCalculator from "./pages/FoodAlternativeCalculator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/plans/nutrition" element={<NutritionPlan />} />
            <Route path="/plans/workout" element={<WorkoutPlan />} />
            <Route path="/plans/all-in-one" element={<AllInOnePlan />} />
            <Route path="/your-plan" element={<YourPlan />} />
            <Route
              path="/fitness-profile"
              element={
                <ProtectedRoute>
                  <FitnessProfile />
                </ProtectedRoute>
              }
            />
            <Route path="/tools/calories-calculator" element={<CaloriesCalculator />} />
            <Route path="/tools/food-alternative-calculator" element={<FoodAlternativeCalculator />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/dashboard/nutrition"
              element={
                <ProtectedRoute>
                  <NutritionDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/workout"
              element={
                <ProtectedRoute>
                  <WorkoutDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/all-in-one"
              element={
                <ProtectedRoute>
                  <AllInOneDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
