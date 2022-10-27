import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackStat from "./components/FeedbackStat";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import ErrorPage from "./pages/ErrorPage";
import { FeedbackProvider } from "./components/context/FeedbackContext";

function App() {
 

 
  

  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm  />
                  <FeedbackStat  />
                  <FeedbackList  />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
