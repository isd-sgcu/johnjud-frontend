import GamePage from "@/components/Game/GamePage";
import MultipleChoice from "@/components/Game/MultipleChoice";
import ResultGame from "@/components/Game/ResultGame";
import StoryCard from "@/components/Game/StoryCard";
import GameLayout from "@/layouts/GameLayout";
import Results from "@/utils/Results";
import GameStorys from "@/utils/Storys";
import { useEffect, useState } from "react";
import lastStoryIcon from "../../assets/game/StoryIcons/7/2.png"

const GameFirstpage = () => {
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
    for (const story of GameStorys[storyIdx].story) {
      await new Promise((resolve) => {
        setCurrentComponent(<StoryCard text={story.text} icon={story.icon}/>);
        setTimeout(resolve, 3000);
      });
    }
    setStoryIdx(storyIdx + 1);
  }

  useEffect(() => {
    if (start) {
      if (storyIdx < GameStorys.length) {
        setCurrentComponent(
          <MultipleChoice
            index={storyIdx + 1}
            headerText={GameStorys[storyIdx].question}
            answers={GameStorys[storyIdx].answers}
            onClick={(index) => {
              setTotalScore(totalScore + GameStorys[storyIdx].answerScores[index]);
              showStoryCards();
            }}
          />
        );
      } else {
        setCurrentComponent(
          <StoryCard
            text="ไหนดูสิ ได้คำตอบว่าอะไร"
            icon={lastStoryIcon}
            lastStory={true}
            onClick={() =>
              {
                window.scrollTo(0,0);
                setCurrentComponent(
                <ResultGame
                  image={result.image}
                  infoHeader={result.role}
                  infoText={result.text}
                  handleOnClickSave={handleOnClickSave}
                  handleOnClickShare={handleOnClickShare}
                />
              )}
            }
          />
        );
      }
    }
  }, [start, storyIdx]);

  return <>{currentComponent}</>;
};

export default GameFirstpage;

export const Layout = GameLayout;
