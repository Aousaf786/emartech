import { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import DragDropIcon from "../../assets/images/fi-rr-cloud-upload.svg";

const ProjectFormDropZone: FC = ({ setFieldValue, values }: any) => {
  const onDrop = useCallback((acceptedFiles: any, setFieldValue: any) => {
    // Set accepted files to projectFiles field
    setFieldValue("projectFiles", acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => onDrop(acceptedFiles, setFieldValue),
  });
  return (
    <>
      <div {...getRootProps()} className="dragDropBox">
        <input {...getInputProps()} />
        <img src={DragDropIcon} alt="drag drop icon" />
        <p>Drag and Drop any file</p>
      </div>
      {values.projectFiles.map((file: any, index: any) => (
        <div key={index}>{file.name}</div>
      ))}
    </>
  );
};

export default ProjectFormDropZone;
