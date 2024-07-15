import { useState } from "react";

export const fileToGenerativePart = async (file: File) => {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader: any = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
};

const FileToGenerativePartExample = () => {
  const [data, setData] = useState<any>(undefined);

  const onFileChange = async (e: any) => {
    const imageParts = await Promise.all(
      [...e.target.files].map(fileToGenerativePart)
    );
    setData(imageParts);
  };

  return (
    <div>
      {data ? (
        <img
          src={`data:${data[0]?.inlineData.mimeType};base64,${data[0]?.inlineData.data}`}
          width={100}
          height={100}
          alt="Image"
        />
      ) : (
        <input onChange={onFileChange} type="file" />
      )}
    </div>
  );
};

export default FileToGenerativePartExample;
