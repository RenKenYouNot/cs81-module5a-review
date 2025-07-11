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
  return log.reduce((sum, session) => sum + session.minutes, 0); // This uses reduce (a higher-order function) to accumulate the total minutes from all sessions in the log
}

// This function returns the names of unique hobbies found in the log
function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby); // This uses map (a higher-order function) to extract the hobby name from each entry in the log
  return [...new Set(names)]; // This removes duplicates by creating a Set and returns an array of unique hobby names
}

// This function returns sessions that lasted longer than the given minimum time
function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes); // This uses filter (a higher-order function) to return sessions with minutes greater than the minimum minutes
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

// Suggestion: Create a reusable function to filter sessions by any property and value,
// so we avoid repeating similar filter logic in different functions like countMood and longSessions.

// NEW TEST: Count of sessions with 'focused' mood
console.log("Focused sessions:", countMood(hobbyLog, "focused"));
