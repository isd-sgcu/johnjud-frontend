import GamePage from "@/components/Game/GamePage";
import MultipleChoice from "@/components/Game/MultipleChoice";
import ResultGame from "@/components/Game/ResultGame";
import StoryCard from "@/components/Game/StoryCard";
// import PetCanvas from "@/components/Pets/PetCanvas";
import GameLayout from "@/layouts/GameLayout";
import Results from "@/utils/Results";
import GameStorys from "@/utils/Storys";
import { handleDownloadCanvas } from "@/utils/handleDownloadCanvas";
import { handleShareCanvas } from "@/utils/handleShareCanvas";
import { useEffect, useState } from "react";
import lastStoryIcon from "../../assets/game/StoryIcons/7/2.png";

const GameFirstpage = () => {
  const [start, setStart] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(
    <GamePage onClick={() => setStart(true)} />
  );
  const [storyIdx, setStoryIdx] = useState(0);

  const [totalScore, setTotalScore] = useState(0);

  async function showStoryCards() {
    for (const story of GameStorys[storyIdx].story) {
      await new Promise((resolve) => {
        setCurrentComponent(<StoryCard text={story.text} icon={story.icon} />);
        setTimeout(resolve, 3000);
      });
    }
    setStoryIdx(storyIdx + 1);
  }

  function getResult() {
    if (totalScore >= 25) return Results[6];
    else if (totalScore >= 22) return Results[5];
    else if (totalScore >= 19) return Results[4];
    else if (totalScore >= 16) return Results[3];
    else if (totalScore >= 13) return Results[2];
    else if (totalScore >= 10) return Results[1];
    else return Results[0];
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
              setTotalScore(
                totalScore + GameStorys[storyIdx].answerScores[index]
              );
              showStoryCards();
            }}
          />
        );
      } else {
        const result = getResult();
        setCurrentComponent(
          <StoryCard
            text="ไหนดูสิ ได้คำตอบว่าอะไร"
            icon={lastStoryIcon}
            lastStory={true}
            onClick={() => {
              window.scrollTo(0, 0);
              setCurrentComponent(
                  <ResultGame
                    image={result.image}
                    role={result.role}
                    text={result.text}
                    handleOnClickSave={() => handleDownloadCanvas(result.role)}
                    handleOnClickShare={() => handleShareCanvas(result.role)}
                  />
                //   <PetCanvas
                //     petImage={result.image}
                //     petName={result.role}
                //     petText={result.text}
                //     border="game"
                //   />
                // </>
              );
            }}
          />
        );
      }
    }
  }, [start, storyIdx]);

  return <>{currentComponent}</>;
};

export default GameFirstpage;

export const Layout = GameLayout;
