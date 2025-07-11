// Airen Alires 07.11.2025

// This array stores daily hobby activity logs
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// This function calculates the total time spent doing the activities stored in the log
function totalTime(log) {
  return log.reduce((sum, session) => sum + session.minutes, 0); // This returns the total time (in minutes) spent on all sessions in the log
}

// This function returns the names of unique hobbies found in the log
function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby); // This stores the hobby names from each entry in the log
  return [...new Set(names)]; // This returns an array of unique hobby names from the log
}

// This function returns sessions that lasted longer than the given minimum time
function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes); // This returns all activity sessions that lasted longer than the specified minimum time
}

// This function counts how many times a specific mood type appears in the log
function countMood(log, moodType) {
  return log.filter(entry => entry.mood === moodType).length; // This returns the number of entries in the log that match the specified mood type
}

// Logging summaries of the hobbyLog:
console.log("Total time spent:", totalTime(hobbyLog), "minutes"); // Total time
console.log("Unique hobbies:", uniqueHobbies(hobbyLog)); // List of unique hobbies
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30)); // Sessions that lasted longer than 30 minutes
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed")); // Number of session with "relaxed" mood
