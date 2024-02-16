const shareWeb = async () => {
  if (!navigator.canShare) {
    return;
  }
  const shareData = {
    title: "JohnJud Minigame!",
    text: "Come and check your result at JohnJud!",
    url: window.location.href,
  };
  try {
    await navigator.share(shareData);
  } catch (error) {
    console.error("Error sharing", error);
  }
};

export { shareWeb };
