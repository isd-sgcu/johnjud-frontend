import { drawText } from "canvas-txt";
import { useEffect, useRef } from "react";

interface PetCanvasProps {
  petImage: string;
  petName: string;
  petText: string;
  className?: string;
}

const PetCanvas = (props: PetCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    console.log(ctx);
    if (ctx && canvas) {
      ctx.fillStyle = "#3D0D40";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(48, 48, canvas.width - 96, canvas.height - 96);

      const image = new Image();
      image.src = props.petImage;
      image.onload = () => {
        const centerX = (canvas.width - 540) / 2;
        ctx.drawImage(image, centerX, 96, 540, 960);
      };

      ctx.fillStyle = "#000000";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.font = "bold 72px 'Poppins'";
      ctx.fillText(props.petName, canvas.width / 2, 1152);
      drawText(ctx, props.petText, {
        x: (canvas.width - 888) / 2,
        y: 1270,
        width: 888,
        height: 1080,
        font: "Poppins",
        fontSize: 48,
        align: "center",
        vAlign: "top",
      });
    }
  }, [props.petImage, props.petName, props.petText]);

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
