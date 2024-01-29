const handleDownloadCanvas = (resultName: string) => {
  const canvas = document.querySelector("canvas");
  const a = document.createElement("a");
  a.setAttribute("download", `petHoro-${resultName}.jpg`);
  if (canvas) {
    a.setAttribute("href", canvas.toDataURL("image/jpg"));
  }
  a.click();
};

export { handleDownloadCanvas };
