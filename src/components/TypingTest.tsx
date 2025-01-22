import React from "react";
import { useState, useEffect, useCallback } from "react";
import { generateRandomText } from "../utils/textGenerator";

const TypingTest: React.FC = () => {
  const [language, setLanguage] = useState<"javascript" | "python" | "java">("javascript");
  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isFinished, setIsFinished] = useState(false);

  const startTest = useCallback(() => {
    setText(generateRandomText(language));
    setUserInput("");
    setStartTime(Date.now());
    setWordCount(0);
    setCharCount(0);
    setAccuracy(100);
    setIsFinished(false);
  }, [language]);

  useEffect(() => {
    startTest();
  }, [startTest]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputVal = e.target.value;
    setUserInput(inputVal);

    // Calculate accuracy
    if (inputVal.length === 0) {
      setAccuracy(100);
    } else {
      let correctChars = 0;
      const minLength = Math.min(inputVal.length, text.length);
      for (let i = 0; i < minLength; i++) {
        if (inputVal[i] === text[i]) correctChars++;
      }
      const newAccuracy = Math.round((correctChars / inputVal.length) * 100);
      setAccuracy(newAccuracy);
    }

    // Check if the test is complete
    if (inputVal === text) {
      setIsFinished(true);
      const endTime = Date.now();
      const timeElapsed = (endTime - (startTime || endTime)) / 1000 / 60; // in minutes
      const words = inputVal.trim().split(/\s+/).length;
      const chars = inputVal.length;
      setWordCount(Math.round(words / timeElapsed));
      setCharCount(Math.round(chars / timeElapsed));
    }
  };

  return (
    <div className=" flex flex-col items-center p-6">
      {/* Title Section */}


      {/* Language Selection */}
      <div className="mb-6">
        <label htmlFor="language" className="m-3 text-lg font-medium mb-2">
          Select Programming Language:
        </label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value as "javascript" | "python" | "java")}
          className="p-3 border border-blue-500 rounded-md text-blue-600 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={!isFinished && userInput.length > 0}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>
      </div>

      {/* Typing Test Card */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <div className="bg-gray-200 p-4 rounded-lg mb-4">
          <p className="text-lg font-medium text-gray-700">{text}</p>
        </div>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          value={userInput}
          onChange={handleInputChange}
          placeholder="Start typing here..."
          disabled={isFinished}
        />
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="font-semibold">WPM: {wordCount}</p>
            <p className="font-semibold">CPM: {charCount}</p>
            <p className="font-semibold">Accuracy: {accuracy}%</p>
          </div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
            onClick={startTest}
          >
            {isFinished ? "Restart" : "New Text"}
          </button>
        </div>
        {isFinished && (
          <div className="text-center mt-4 text-green-600">
            <p className="text-lg font-bold">Congratulations! You've completed the test!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypingTest;
