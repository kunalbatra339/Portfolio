# 🛡️ Sentinel

> **A fully offline Android application for detecting AI-generated deepfakes from images and videos using on-device computer vision and machine learning.**

Sentinel is a privacy-first Android application designed to help users verify the authenticity of images and videos directly on their smartphones. Unlike cloud-based solutions, Sentinel performs all processing locally on the device, ensuring that sensitive media never leaves the user's phone.

Built for **HackMol 7.0**, the project focuses on delivering fast, reliable, and privacy-preserving deepfake detection while remaining fully functional without an internet connection.

---

## ✨ Features

- 📱 **100% Offline Operation**
  - No internet connection required.
  - No cloud APIs.
  - No external servers.

- 🤖 **On-Device AI Inference**
  - Runs TensorFlow Lite models directly on the smartphone.
  - Optimized using INT8 quantization and NNAPI acceleration.

- 🎥 **Image & Video Verification**
  - Supports authenticity analysis for both images and videos.

- 🔒 **Privacy First**
  - Media never leaves the device.
  - All computation is performed locally.

- 📊 **Confidence-Based Results**
  - Instead of simply labeling media as *Real* or *Fake*, Sentinel provides:
    - Authenticity confidence score
    - Uncertainty estimation

- ⚡ **Real-Time Processing**
  - Uses CameraX for live frame capture.
  - Optimized native processing pipeline.

- 🌍 **Works Anywhere**
  - Designed for low-connectivity and offline environments.

---

# Problem Statement

The rapid growth of AI-generated media has made it increasingly difficult to distinguish authentic content from manipulated content. Most existing deepfake detection solutions rely heavily on cloud-based inference, creating several challenges:

- Internet dependency
- Privacy concerns
- High latency
- Limited accessibility in offline environments

Sentinel addresses these issues by moving the complete inference pipeline onto the Android device itself.

---

# Tech Stack

### Android

- Kotlin
- Jetpack Compose

### Computer Vision

- OpenCV Android SDK

### Camera

- CameraX

### Machine Learning

- TensorFlow Lite
- INT8 Quantized Models
- NNAPI Acceleration

### Native Layer

- Android NDK (C++)
- JNI (Java Native Interface)

---

# Architecture

```
           CameraX
              │
              ▼
      Live Camera Frames
              │
              ▼
      JNI Bridge (Kotlin ↔ C++)
              │
              ▼
       OpenCV Preprocessing
              │
              ▼
 TensorFlow Lite Inference Engine
              │
              ▼
      Signal Fusion Module
              │
              ▼
 Confidence Score + Explanation
              │
              ▼
     Jetpack Compose UI
```

---

# Detection Pipeline

### 1. Video Capture

CameraX continuously captures frames from the device camera.

↓

### 2. Native Frame Transfer

Frames are transferred through JNI into the Android NDK layer.

↓

### 3. Preprocessing

OpenCV performs:

- Face detection
- Face tracking
- Frame normalization
- Signal preprocessing

↓

### 4. On-Device AI Inference

TensorFlow Lite executes the quantized deepfake detection model using NNAPI acceleration.

↓

### 5. Signal Fusion

Multiple independent signals are combined to estimate media authenticity.

↓

### 6. Confidence Output

The application produces:

- Authenticity confidence score
- Uncertainty explanation

instead of rigid binary predictions.

---

# Why Offline?

Unlike traditional deepfake detection systems, Sentinel performs every stage directly on the smartphone.

This provides:

- Better privacy
- Lower latency
- No server costs
- No internet dependency
- Higher accessibility in remote environments

---

# Project Goals

Sentinel aims to provide:

- Fast deepfake verification
- Privacy-preserving AI
- Real-time inference
- Cross-device compatibility
- Reliable confidence estimation

---

# Repository Structure

```
Sentinel/
│
├── app/
│   ├── ui/
│   ├── camera/
│   ├── inference/
│   ├── native/
│   └── utils/
│
├── cpp/
│   ├── OpenCV
│   ├── JNI
│   └── Native Processing
│
├── models/
│   └── TensorFlow Lite Model
│
├── docs/
│
└── README.md
```

---

# Development Workflow

The project follows a backend-first approach.

### Phase 1

- Validate preprocessing pipeline
- Test TensorFlow Lite model
- Verify confidence estimation

### Phase 2

- Build Android native processing engine
- Integrate OpenCV
- Configure Android NDK

### Phase 3

- Create JNI bridge
- Transfer image frames efficiently
- Optimize memory management

### Phase 4

- Integrate CameraX
- Stream live frames
- Connect inference pipeline

### Phase 5

- Build Jetpack Compose interface
- Display confidence scores
- Provide real-time user feedback

---

# Future Improvements

The roadmap includes:

- Improved temporal consistency models
- Better uncertainty calibration
- Federated learning for privacy-preserving model updates
- Device-specific hardware optimization
- Expanded support for additional media formats

---

# Current Status

🚧 Active Development

The application architecture and on-device processing pipeline are under continuous development with a focus on performance, privacy, and real-time deepfake detection.

---

# Author

**Kunal Batra**

GitHub: https://github.com/kunalbatra339

---

## License

This project is intended for educational, research, and innovation purposes.