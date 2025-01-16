function ResultDisplay({ extractedText }) {
  return (
    <div className="w-full max-w-3xl mt-10 bg-white bg-opacity-80 p-5 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Extracted Text:</h2>
      <pre className="whitespace-pre-wrap text-gray-800">{extractedText}</pre>
    </div>
  );
}

export default ResultDisplay;