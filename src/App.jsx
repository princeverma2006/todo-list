import './App.css';
import React, { useState } from 'react';

function App() {
  const [ title, setTitle ] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title === '' || details === '') return;
    setTask([...task, { title, details }]);

    setTitle('');
    setDetails('');
  };

  const deleteNote = (idx) => {
    const copytTask = [...task];

    copytTask.splice(idx, 1);

    setTask(copytTask);
  };

  return (
    <div>
      <form className="container" onSubmit={submitHandler}>
        <div className="input-field">
          <input
            className="input-box"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="input-box"
            type="text"
            placeholder="Discription.."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <button className="btn">Submit</button>
      </form>
      <div className="line"></div>

      <div className="card-container">
        {task.length === 0 ? (
          <h2>No task available</h2>
        ) : (
          task.map((elem, idx) => {
            return (
              <div className="card" key={idx}>
                <h3>{elem.title}</h3>
                <p>{elem.details}</p>

                <button className="card-btn" onClick={() => deleteNote(idx)}>
                  Delete Note
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
