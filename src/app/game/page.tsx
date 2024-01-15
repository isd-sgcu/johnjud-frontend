import GamePage from "@/components/Game/GamePage";
import GameLayout from "@/layouts/GameLayout";
import { useEffect, useState } from "react";
import Storys from "@/components/Game/Story";
import Button from "@/components/Button";
import StoryCard from "@/components/Game/StoryCard";
import MultipleChoice from "@/components/Game/MultipleChoice";

const userTarotFirstpage = () => {
  const [currentComponent, setCurrentComponent] = useState(<GamePage onClick={() => setStart(true)} />);
  return (
    <>
      {currentComponent}
    </>
  );
};

export default userTarotFirstpage;

export const Layout = GameLayout;
