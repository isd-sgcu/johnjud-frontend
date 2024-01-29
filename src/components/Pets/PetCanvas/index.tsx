import { drawText } from "canvas-txt";
import { useEffect, useRef } from "react";

interface PetCanvasProps {
  petImage: string;
  petName: string;
  petText: string;
  border: "horo" | "game";
  className?: string;
}

const PetCanvas = (props: PetCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    console.log(ctx);
    if (ctx && canvas) {
      const colorBorder = props.border === "game" ? "#08878E" : "#3D0D40";
      ctx.fillStyle = colorBorder;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(48, 48, canvas.width - 96, canvas.height - 96);

      const image = new Image();
      image.src = props.petImage;

      const scale = 0.7;
      const Iheight = image.height * scale;
      const Iwidth = image.width * scale;

      image.onload = () => {
        const centerX = (canvas.width - Iwidth) / 2;
        ctx.drawImage(image, centerX, 96, Iwidth, Iheight);
      };

      ctx.fillStyle = "#000000";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      const font = props.border == "game" ? "IBM Plex Sans Thai" : "Poppins";
      ctx.font = "bold 80px " + font;
      ctx.fillText(props.petName, canvas.width / 2, 96 + Iheight + 96);
      drawText(ctx, props.petText, {
        x: (canvas.width - 888) / 2,
        y: 96 + Iheight + 96 + 72 + 18,
        width: 888,
        height: 888,
        font: "IBM Plex Sans Thai",
        fontSize: 32,
        align: "center",
        vAlign: "top",
      });
    }
  }, [props.petImage, props.petName, props.petText, props.border]);

  return (
    <canvas
      ref={canvasRef}
      width={1080}
      height={1980}
      style={{ display: "none" }}
    ></canvas>
  );
};

export default PetCanvas;
