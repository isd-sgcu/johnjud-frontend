import GamePage from "@/components/Game/GamePage";
import MultipleChoice from "@/components/Game/MultipleChoice";
import ResultGame from "@/components/Game/ResultGame";
import StoryCard from "@/components/Game/StoryCard";
import GameLayout from "@/layouts/GameLayout";
import Results from "@/utils/Results";
import Storys from "@/utils/Storys";
import { useEffect, useState } from "react";

const userTarotFirstpage = () => {
  const [start, setStart] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(
    <GamePage onClick={() => setStart(true)} />
  );
  const [storyIdx, setStoryIdx] = useState(0);

  const result = Results[0];
  const [totalScore, setTotalScore] = useState(0);

  const handleOnClickSave = () => { };
  const handleOnClickShare = () => { };

  async function showStoryCards() {
    for (let i = 0; i < Storys[storyIdx].storyTexts.length; i++) {
      const text = Storys[storyIdx].storyTexts[i];
      await new Promise((resolve) => {
        setCurrentComponent(<StoryCard text={text} />);
        setTimeout(resolve, 3000);
      });
    }
    setStoryIdx(storyIdx + 1);
  }

  useEffect(() => {
    if (start) {
      if (storyIdx < Storys.length) {
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
        );
      } else {
        setCurrentComponent(
          <StoryCard
            text="ไหนดูสิ ได้คำตอบว่าอะไร"
            lastStory={true}
            onClick={() =>
              setCurrentComponent(
                <ResultGame
                  image={result.image}
                  infoHeader={result.infoHeader}
                  infoText={result.infoText}
                  handleOnClickSave={handleOnClickSave}
                  handleOnClickShare={handleOnClickShare}
                />
              )
            }
          />
        );
      }
    }
  }, [start, storyIdx]);

  return <>{currentComponent}</>;
};

export default userTarotFirstpage;

export const Layout = GameLayout;
