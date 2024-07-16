import jsQR from "jsqr";
import { ChangeEvent, useState } from "react";

const readQRFromImage = async (file: File) => {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader: any = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.readAsDataURL(file);
  });
  const data = await base64EncodedDataPromise;

  const image = new Image();
  image.src = `data:${file.type};base64,` + data;

  await new Promise((resolve) => image.addEventListener("load", resolve));

  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  const context: any = canvas.getContext("2d");

  context.imageSmoothingEnabled = false;
  context.drawImage(image, 0, 0);
  const imageData = await context.getImageData(0, 0, image.width, image.height);

  const code: any = jsQR(imageData.data, image.width, image.height);
  return code ? code.data : null;
};

const ReadQRFromImageExample = () => {
  const [data, setData] = useState("");

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const data = await readQRFromImage(e.target.files[0]);
      setData(data);
    }
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <p>
        Data: <span style={{ fontWeight: 600 }}>{data}</span>
      </p>
    </div>
  );
};

export default ReadQRFromImageExample;
