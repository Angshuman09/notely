import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import { Profile } from "./pages/Profile";
import { useGetUser } from "./hooks/user";
const Home = lazy(() =>
  import("./pages/Home").then((m) => ({ default: m.Home })),
);

function App() {
  const user = useGetUser();
  return (
    <div className="w-full h-screen">
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center bg-background">
            <div
              className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent"
              aria-hidden
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          {user.data?.user ? (
            <Route path="/profile" element={<Profile />} />
          ) : (
            <Route path="/" element={<Home />} />
          )}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
