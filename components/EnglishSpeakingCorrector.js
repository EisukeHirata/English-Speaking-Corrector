import { useState } from "react";
import { recordAudio } from "../helpers/recordAudio";

function EnglishSpeakingCorrector() {
  const [isRecording, setIsRecording] = useState(false);
  const [results, setResults] = useState(null);

  const handleVoiceButtonClick = async () => {
    if (!isRecording) {
      setIsRecording(true);
      recorder = await recordAudio();
      recorder.start();
    } else {
      setIsRecording(false);
      const recordedAudio = await recorder.stop();

      const formData = new FormData();
      formData.append("audio", recordedAudio.audioBlob);

      const response = await fetch("/api/process-speech", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResults(data);
    }
  };

  return (
    <div className="container">
      <button onClick={handleVoiceButtonClick}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      {results && (
        <div>
          <h2>Spoken English</h2>
          <p>{results.spokenText}</p>
          <h2>Corrected English</h2>
          <p>{results.analysis.correctedText}</p>
          <h2>Educational Content</h2>
          <p>{results.analysis.educationalContent}</p>
        </div>
      )}
    </div>
  );
}

export default EnglishSpeakingCorrector;
