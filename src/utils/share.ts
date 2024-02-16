const share = async (img: string, resultName: string) => {
  if (!navigator.canShare) {
    return;
  }
  const shareData = {
    title: `${resultName}!`,
    text: "Come and check your result at JohnJud!",
    url: img,
  };
  console.log("Clicked!");
  try {
    await navigator.share(shareData);
  } catch (error) {
    console.error("Error sharing", error);
  }
};

export { share };
