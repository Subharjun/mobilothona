# Driver Safety Monitor

An AI-powered end-to-end solution for detecting driver drowsiness and stress levels using computer vision, machine learning, and real-time monitoring.

## Features

- **Real-time Drowsiness Detection**: Uses webcam feed to analyze eye aspect ratio and facial landmarks
- **Stress Level Monitoring**: Integrates with biometric data and AI analysis
- **Smart Interventions**: AI-generated safety recommendations using Groq API
- **Location Services**: Find nearby rest stops using OpenRouteService API
- **Data Analytics**: MongoDB Atlas for session storage and historical analysis
- **Interactive Dashboard**: Visualize safety patterns and trends

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **AI/ML**: Hugging Face Transformers, TensorFlow.js
- **Backend**: Next.js API Routes, MongoDB Atlas
- **APIs**: Groq API, OpenRouteService API
- **Real-time**: WebRTC for camera access

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.local` with your API keys
4. Run development server: `npm run dev`
5. Open http://localhost:3000

## API Keys Required

- GROQ_API_KEY: For AI-powered interventions
- HUGGINGFACE_API_KEY: For computer vision models
- MONGO_URI: MongoDB Atlas connection
- ORS_API_KEY: OpenRouteService for location services

## Usage

1. Start monitoring from the main page
2. Allow camera permissions
3. View real-time drowsiness and stress levels
4. Get AI-powered safety recommendations
5. Check dashboard for historical data

## Safety Features

- Non-distracting visual alerts
- Voice-based interventions
- Emergency stop recommendations
- Nearby rest stop finder
- Session history tracking
