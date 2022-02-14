import { useEffect, useState } from "react";
import { api } from "./../services/api";
import { GenreResponseProps, SideBarProps } from "./types";
import { Button } from "./Button";

import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

export function SideBar({
  setSelectedGenreId,
  genres,
  selectedGenreId,
  setGenres,
}: SideBarProps) {
  const [expandSidebar, setExpandSideBar] = useState(true);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

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
        {genres.map((genre: GenreResponseProps) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
