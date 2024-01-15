import GamePage from "@/components/Game/GamePage";
import GameLayout from "@/layouts/GameLayout";
import { useEffect, useState } from "react";
import Storys from "@/components/Game/Story";
import StoryCard from "@/components/Game/StoryCard";
import MultipleChoice from "@/components/Game/MultipleChoice";

const userTarotFirstpage = () => {
  const [start, setStart] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(<GamePage onClick={() => setStart(true)} />);
  const [storyIdx, setStoryIdx] = useState(0);

  useEffect(() => {
    if (start) {
      async function showStoryCards() {
        for (const story of Storys[0].storyTexts) {
          await new Promise((resolve) => {
            setCurrentComponent(<StoryCard text={story} />);
            setTimeout(resolve, 5000);
          });
        }
      }

      showStoryCards().then(() => {
        window.scrollTo(0,0);
        setCurrentComponent(<MultipleChoice
          index={storyIdx + 1}
          headerText={Storys[storyIdx].headerText}
          answers={Storys[storyIdx].answers}
        />);
      });
    }
  }, [start, storyIdx]);
  return (
    <>
      {currentComponent}
    </>
  );
};

export default userTarotFirstpage;

export const Layout = GameLayout;
