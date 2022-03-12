import { SideBar } from "./components/SideBar";
import { MovieProvider } from "./contexts/MovieContext";
import { MovieDetails } from "./components/MovieDetails";

import "./styles/global.scss";
import "./styles/sidebar.scss";
import "./styles/content.scss";

export function App() {
  return (
    <MovieProvider>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <MovieDetails />
      </div>
    </MovieProvider>
  );
}
