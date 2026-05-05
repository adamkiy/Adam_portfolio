import type { Project } from '@/components/project-card'

export const projects: Project[] = [
  {
    title: 'AuraDrive — Edge AI Driver Fatigue Detection',
    eyebrow: 'Featured · Final-Year Capstone',
    description: 'Real-time fatigue detection pipeline running entirely on NVIDIA Jetson. MediaPipe Face Mesh tracks 468 facial landmarks per frame; Eye Aspect Ratio (EAR) and PERCLOS are computed across a rolling 60-frame window and packaged as structured JSON evidence. A locally-hosted Llama 3 model receives the payload and reasons about driver state contextually — distinguishing genuine eye closure from normal blinks without relying on hardcoded thresholds. The full pipeline runs on-device across multiple Python threads, with no cloud dependency and alert latency under 2 seconds.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Llama 3', 'NVIDIA Jetson'],
    href: 'https://github.com/adamkiy/AuraDrive-AI',
    image: '/projects/auredrive.png',
    imageAlt: 'AuraDrive Edge AI Driver Fatigue Detection'
  },
  {
    title: 'EchoVision — Assistive Vision for the Visually Impaired',
    eyebrow: 'Featured',
    description: 'Wearable assistive device built on an ESP32-CAM. On button press, the microcontroller captures a JPEG frame and sends it via HTTP POST to a Flask backend. The backend forwards the image to GPT-4o Vision for scene captioning, passes the returned text to Google Cloud TTS to generate an MP3, then streams the audio file back to the ESP32 for onboard playback. The three-tier split (edge device → local Flask server → cloud APIs) keeps the wearable hardware minimal and cheap while offloading all heavy inference to the backend.',
    tags: ['ESP32-CAM', 'Arduino C++', 'Python', 'Flask', 'GPT-4o Vision', 'Google Cloud TTS'],
    href: 'https://github.com/adamkiy/EchoVision',
    image: '/projects/echovision.png',
    imageAlt: 'EchoVision Assistive Vision Device'
  },
  {
    title: 'GoNature — Park Reservation Management Platform',
    description: 'Distributed client-server system built on OCSF (Object Client-Server Framework), managing persistent socket connections between thick Java clients and a centralized server. The server owns a MySQL database covering bookings, capacity limits, waitlists, dynamic pricing, and automated reminder scheduling, and pushes real-time state updates to connected clients. Role-based access (visitor, employee, park manager) enforces separate UI flows and permissions. Built with full UML modeling — use-case, class, sequence, and activity diagrams — before any code was written. In a 5-person team I owned authentication, booking, waitlist, payment, and receipt flows, approximately 90% of the client-side screens.',
    tags: ['Java', 'JavaFX', 'OCSF', 'MySQL', 'MVC'],
    href: 'https://github.com/adamkiy/Go-Nature',
    image: '/projects/gonature.png',
    imageAlt: 'GoNature Park Reservation Management Platform'
  },
  {
    title: 'ChainAbuse — Crypto Fraud Detection',
    description: 'Java desktop application that queries the ChainAbuse REST API, parses JSON responses, and generates reports flagging suspicious Bitcoin wallet activity. Structured around four GoF design patterns: Mediator coordinates the HTTP layer, request builder, and JSON parser through a single hub; Observer drives UI notifications from scan results and errors without direct coupling; Singleton manages one shared file writer across the app; Factory handles configurable HTTP client construction. The pattern structure makes it straightforward to add new blockchain data sources without touching the core analysis logic.',
    tags: ['Java', 'JavaFX', 'Maven', 'REST API', 'Design Patterns'],
    href: 'https://github.com/OfirBraude/HW3_G16',
    image: '/projects/five.png',
    imageAlt: 'ChainAbuse Crypto Fraud Detection'
  },
  {
    title: 'Quizz — Interactive Quiz Platform',
    description: 'Full-stack quiz app with two modes: auto-generated quizzes pulled from the Open Trivia Database API, and custom quizzes created and saved by users. The React frontend handles question rendering, answer selection, score tracking, and results — all managed with React state and hooks. A Node.js/Express backend exposes CRUD endpoints backed by MongoDB for storing user-created quizzes and scores. Supports category filtering, difficulty selection, and real-time score feedback entirely on the client side.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    href: 'https://github.com/adamkiy',
    image: '/projects/quizz.png',
    imageAlt: 'Quizz Interactive Quiz Platform'
  }
]
