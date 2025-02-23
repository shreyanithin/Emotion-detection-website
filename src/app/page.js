export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Emotion Detection System
      </h1>
      <p className="text-lg text-gray-600 text-center mb-6">
        Analyze emotions from audio and video input in real-time.
      </p>

      {/* Feature Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-2xl text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Features</h2>
        <ul className="text-gray-600">
          <li>🎥 Live Camera Emotion Detection</li>
          <li>🎙️ Audio Emotion Analysis</li>
          <li>🤖 AI-based Chat & Recommendations</li>
        </ul>
      </div>

      {/* Login & Signup Buttons */}
      <div className="flex gap-4">
        <a href="/login" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
          Login
        </a>
        <a href="/signup" className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">
          Sign Up
        </a>
      </div>
    </div>
  );
}
