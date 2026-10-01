import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// importing the dsn and intializing sentry in the main lifecycle of the app so that it can catch any errors in the 
// app and send them to sentry
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://87f0f720c7fd25be4da87b32fcb20438@o4512170173005824.ingest.us.sentry.io/4512170180476929",
  release: "test-release-02"
});

// Leave this original Vite code completely alone:
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)