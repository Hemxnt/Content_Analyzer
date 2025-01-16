import { useState } from 'react';
import FileUpload from './components/FileUpload';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [extractedText, setExtractedText] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mt-10 text-white">MediaText Extractor</h1>
      <FileUpload setExtractedText={setExtractedText} setLoading={setLoading} />
      {loading ? (
        <p className="mt-5 text-white">Processing...</p>
      ) : (
        <ResultDisplay extractedText={extractedText} />
      )}
    </div>
  );
}

export default App;