import { useState } from 'react';
import FileUpload from './components/FileUpload';
import ResultDisplay from './components/ResultDisplay';
import Logo from './assets/Logo.svg';

function App() {
  const [extractedText, setExtractedText] = useState('');
  const [loading, setLoading] = useState(false);


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black flex flex-col items-center p-4 relative">
      {/* Top right corner links */}
      <div className="absolute top-2 right-4">
        <a
          href="https://drive.google.com/file/d/15F6Koj8dUN6hVmklVMu5siIAAstaNjD2/view"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mr-4"
        >
          RESUME
        </a>
        <a
          href="https://github.com/Hemxnt/Content_Analyzer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          GITHUB
        </a>
      </div>

      <h1 className="mt-10 text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center">CONTENT ANALYZER 🌐</h1>

      {/* About Section */}
      <div className="mt-8 px-4 text-center text-white max-w-4xl">
        <p className="mt-4 md:text-2xl sm:text-lg font-semibold flex items-center justify-center flex-wrap">
          Content Analyzer is an application developed for&nbsp; 
          <img
            src={Logo}
            alt="Unthinkable Solutions Logo"
            className="h-6 sm:h-8 inline-block mx-2"
          />
          It allows users to upload PDF and image files, and extracts text from them using advanced PDF parsing and OCR technology.
        </p>
      </div>


      <FileUpload 
        setExtractedText={setExtractedText}
        setLoading={setLoading} 
      />

      {loading && <p className="mt-5 text-white">Processing...</p>}
      
      {!loading && extractedText && (
        <ResultDisplay extractedText={extractedText} />
      )}
        
    </div>
  );
}

export default App;