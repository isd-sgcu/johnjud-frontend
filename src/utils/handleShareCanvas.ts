const handleShareCanvas = async (resultName: string) => {
  const canvasElement = document.querySelector("canvas");
  const data = canvasElement?.toDataURL();
  const blob = await (await fetch(data!)).blob();
  const filesArray = [
    new File([blob], `petHoro-${resultName}.jpg`, {
      type: blob.type,
      lastModified: new Date().getTime(),
    }),
  ];
  const shareData = {
    files: filesArray,
  };
  navigator.share(shareData);
};

export { handleShareCanvas };
