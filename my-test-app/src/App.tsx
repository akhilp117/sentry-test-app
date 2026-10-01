import './App.css'
import * as Sentry from "@sentry/react";


function App() {
  const handleLogShift = () => {
    throw new Error("unable to connect to db");
  };

  return (
    <div>
      <h1>Lifeguard Portal</h1>
      <p>Click below to log your hours for today's shift.</p>
      
      <button onClick={() => { 
        try {
          // error happens here
          throw new Error("Unable to fetch shift schedule");
        } catch (error) {
          // sending the error to sentry witht custom tags cuz it helps with filtering and searching in the sentry dashboard
          Sentry.captureException(error, {
            tags: {
              facility: "YMCA",
              shift_type: "morning",
              action: "load_schedule" 
            }
          });
        }
      }}>
        Trigger Tagged Error
      </button>

      <button onClick={ 
        () => { 
          throw new Error("Testing suspect commits feature!"); 
          }
        }
      >
        Trigger Broken Commit
      </button>

    </div>
    
  )
}

export default App