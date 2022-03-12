import { memo, useCallback, useState } from "react";
import { Button } from "./Button";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useMovies } from "../contexts/MovieContext";

function SideBarComponent() {
  const { genres, setSelectedGenreId, selectedGenreId } = useMovies();
  const [expandSidebar, setExpandSideBar] = useState(true);

  return (
    <nav className={`sidebar ${expandSidebar && "expanded"}`}>
      <div
        title='Menu'
        className='sidebar_expand-btn'
        onClick={() => setExpandSideBar(!expandSidebar)}
      >
        {expandSidebar ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
      </div>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => setSelectedGenreId(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}

export const SideBar = memo(SideBarComponent);
