import GamePage from "@/components/Game/GamePage";
import GameLayout from "@/layouts/GameLayout";
import { useEffect, useState } from "react";
import Storys from "@/components/Game/Story";
import StoryCard from "@/components/Game/StoryCard";
import MultipleChoice from "@/components/Game/MultipleChoice";
import ResultGame from "@/components/Game/ResultGame";
import Results from "@/components/Game/Result";

const userTarotFirstpage = () => {
  const [start, setStart] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(<GamePage onClick={() => setStart(true)} />);
  const [storyIdx, setStoryIdx] = useState(0);

  const result = Results[0];
  const [totalScore, setTotalScore] = useState(0);

  const handleOnClickSave = () => { };
  const handleOnClickShare = () => { };

  async function showStoryCards() {
    for (const story of Storys[storyIdx].storyTexts) {
      await new Promise((resolve) => {
        setCurrentComponent(<StoryCard text={story} />);
        setTimeout(resolve, 3000);
      });
    }
    setStoryIdx(storyIdx + 1);
  }

  useEffect(() => {
    if (start) {
      if (storyIdx < Storys.length) {
        window.scrollTo(0, 0);
        setCurrentComponent(
          <MultipleChoice
            index={storyIdx + 1}
            headerText={Storys[storyIdx].headerText}
            answers={Storys[storyIdx].answers}
            onClick={(index) => {
              setTotalScore(totalScore + Storys[storyIdx].answerScores[index]);
              showStoryCards();
            }}
          />
        )
      } else {
        setCurrentComponent(
          <ResultGame
            header={result.header}
            image={result.image}
            infoHeader={result.infoHeader}
            infoText={result.infoText}
            handleOnClickSave={handleOnClickSave}
            handleOnClickShare={handleOnClickShare}
          />
        )
      }
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
