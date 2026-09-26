import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [student, setStudent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const mark = Number(marks);

    setStudent({
      name: name,
      marks: mark,
      result: mark >= 40 ? "Pass" : "Fail",
    });
  };

  return (
    <div>
      <h1>Student Result</h1>

      <form onSubmit={handleSubmit}>
        <label>Student Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br />
        <br />

        <label>Marks:</label>
        <input
          type="number"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          min="0"
          max="100"
          required
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {student && (
        <div>
          <h2>Student Details</h2>

          <p>
            <strong>Name:</strong> {student.name}
          </p>

          <p>
            <strong>Marks:</strong> {student.marks}
          </p>

          <p>
            <strong>Result:</strong> {student.result}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;