const handleDownloadCanvas = (resultName: string) => {
  const canvas = document.querySelector("canvas");
  const a = document.createElement("a");
  a.setAttribute("download", `petHoro-${resultName}.jpg`);
  if (canvas) {
    a.setAttribute("href", canvas.toDataURL("image/jpeg"));
  }
  a.click();
};

export { handleDownloadCanvas };
