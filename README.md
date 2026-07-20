# Micro-ATS – Smart Interview Scheduler

A Full-Stack Interview Scheduling application built with the MERN stack that prevents interviewer scheduling conflicts.

## Business Rules

- An interviewer cannot have overlapping interview schedules.
- The same interview cannot be scheduled more than once.
- Scheduling conflicts return **HTTP 409 (Conflict)**.
- Interview times are stored in **UTC**.
- The frontend displays interview times in the user's local timezone.
- Only available interviewers can be selected when scheduling an interview.
- Candidates and interviewers must exist before an interview can be scheduled.

![Dashboard](frontend/src/assets/dashboard.png)

## Tech Stack

Frontend
- React
- Tailwind CSS
- Axios

Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/shahanazz/micro-ats-system.git

```

### 2. Navigate into the project

```bash
cd backend
```


### 3. Configure Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGODB_URI=<your_mongodb_connection_string>
```

### 4. Install dependencies

```bash
npm install
npm start
```
The application will be available at:

```
http://localhost:5000
```

## Frontend setup

```bash
cd ..
cd frontend
```

### 5. Install dependencies

```bash
npm install
npm run dev
```

The application will be available at:

```
http://localhost:5173
```
