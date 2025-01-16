import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

function FileUpload({ setExtractedText, setLoading }) {
    const onDrop = useCallback(
        acceptedFiles => {
          const file = acceptedFiles[0];
          const formData = new FormData();
          formData.append('file', file);
      
          setLoading(true);
      
          axios
        .post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
            .then(response => {
              setExtractedText(response.data.text);
              setLoading(false);
            })
            .catch(error => {
              console.error('Error uploading file:', error);
              setLoading(false);
          alert('Error processing file. Please try again.');
            });
        },
    [setExtractedText, setLoading],
      );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className="w-full max-w-md p-10 mt-10 border-4 border-dashed border-white rounded-md text-center bg-white bg-opacity-20 cursor-pointer"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-white">Drop the file here...</p>
      ) : (
        <p className="text-white">
          Drag & drop a PDF or image here, or click to select files
        </p>
      )}
    </div>
  );
}

export default FileUpload;