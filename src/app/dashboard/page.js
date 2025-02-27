"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  const [isClient, setIsClient] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [emotion, setEmotion] = useState(null);
  const [recommendation, setRecommendation] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents SSR hydration errors

  const handleAnalyzeEmotion = async () => {
    setIsAnalyzing(true);
    setRecommendation("");

    setTimeout(async () => {
      const detectedEmotion = "Stressed";
      setEmotion(detectedEmotion);
      const chatResponse = await fakeChatGPTResponse(detectedEmotion);
      setRecommendation(chatResponse);
      setIsAnalyzing(false);
    }, 3000);
  };

  const fakeChatGPTResponse = async (emotion) => {
    return `Based on your detected emotion (${emotion}), try listening to calm music or meditating.`;
  };

  return (
    <div 
      style={{ backgroundImage: "url('/bg3.avif')" }}
      className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-6 relative"
    >
      {/* Navigation Buttons */}
      <div className="absolute top-4 right-4 flex gap-3">
        <Link href="/profile">
          <Button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg">
            Profile
          </Button>
        </Link>
        <Link href="/login">
          <Button className="bg-red-500/80 hover:bg-red-600/80 text-white backdrop-blur-lg">
            Logout
          </Button>
        </Link>
      </div>

      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">Emotion Detection Dashboard</h1>
        
        <div className="w-full h-60 bg-white/20 flex items-center justify-center mb-6 rounded-lg">
          <span className="text-white/80">[ Video Feed Here ]</span>
        </div>

        <Button 
          onClick={handleAnalyzeEmotion} 
          disabled={isAnalyzing}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
        >
          {isAnalyzing ? "Analyzing..." : "Analyze Emotion"}
        </Button>

        {isAnalyzing && <p className="mt-2 text-white/80 text-center">Thinking...</p>}
        
        {emotion && (
          <p className="mt-4 text-lg text-white text-center">
            Detected Emotion: <strong>{emotion}</strong>
          </p>
        )}
        
        {recommendation && (
          <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <p className="text-white/80">ChatGPT Recommendation:</p>
            <p className="text-blue-400 font-semibold">{recommendation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
