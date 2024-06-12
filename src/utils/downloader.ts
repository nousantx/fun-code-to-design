import html2canvas from "html2canvas";
const imageConfig = {
  name: "design.png",
  scale: 3,
  bg: null,
  timeout: 0
};
export default function GenerateImage(scale?: number) {
  html2canvas(document.getElementById("content") as HTMLElement, {
    scale: scale || imageConfig.scale,
    backgroundColor: imageConfig.bg,
    imageTimeout: imageConfig.timeout
  }).then(function (canvas) {
    // create download link
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png", 2.0);
    link.download = imageConfig.name;
    link.click();
  });
}
