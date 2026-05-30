import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("dashboard");
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const courses = [
    "React Basics",
    "Java Programming",
    "Data Structures",
    "Web Development",
    "Database Management"
  ];

  const enrolledCourses = [
    "React Basics",
    "Java Programming",
    "Web Development"
  ];

  const completedCourses = [
    "React Basics",
    "Java Programming"
  ];

  if (page === "courses") {
    return (
      <div className="App">
        <h1>All Courses</h1>

        <button
          className="back-btn"
          onClick={() => setPage("dashboard")}
        >
          Back to Dashboard
        </button>

        <div className="project-list">
          {courses.map((course, index) => (
            <div className="project-card" key={index}>
              {course}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (page === "enrolled") {
    return (
      <div className="App">
        <h1>Enrolled Courses</h1>

        <button
          className="back-btn"
          onClick={() => setPage("dashboard")}
        >
          Back to Dashboard
        </button>

        <div className="project-list">
          {enrolledCourses.map((course, index) => (
            <div className="project-card" key={index}>
              {course}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (page === "completed") {
    return (
      <div className="App">
        <h1>Completed Courses</h1>

        <button
          className="back-btn"
          onClick={() => setPage("dashboard")}
        >
          Back to Dashboard
        </button>

        <div className="project-list">
          {completedCourses.map((course, index) => (
            <div className="project-card" key={index}>
              {course}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Learning Management System</h1>

      <div className="stats">
        <div
          className="card"
          onClick={() => setPage("courses")}
        >
          <h2>Total Courses</h2>
          <p>{courses.length}</p>
        </div>

        <div
          className="card"
          onClick={() => setPage("enrolled")}
        >
          <h2>Enrolled Courses</h2>
          <p>{enrolledCourses.length}</p>
        </div>

        <div
          className="card"
          onClick={() => setPage("completed")}
        >
          <h2>Completed Courses</h2>
          <p>{completedCourses.length}</p>
        </div>
      </div>

      <div className="task-section">
        <h2>Course Search</h2>

        <div className="add-task">
          <input
            type="text"
            placeholder="Search Course"
            value={search}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() =>
              setTimeout(() => setShowSuggestions(false), 200)
            }
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {showSuggestions && (
          <div className="suggestion-list">
            {courses
              .filter((course) =>
                course
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((course, index) => (
                <p
                  key={index}
                  onClick={() => {
                    setSearch(course);
                    setShowSuggestions(false);
                  }}
                >
                  {course}
                </p>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;