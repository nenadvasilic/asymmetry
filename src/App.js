import { Routes, Route } from "react-router-dom";
import Introduction from "./screens/Introduction";
import Games from "./screens/Games";
import Memory from "./screens/Memory";
import Quiz from "./screens/Quiz";
import Swipe from "./screens/Swipe";
import Registration from "./screens/Registration";
import Result from "./screens/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="/games" element={<Games />} />
      <Route path="/games/memory" element={<Memory />} />
      <Route path="/games/quiz" element={<Quiz />} />
      <Route path="/games/swipe" element={<Swipe />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/registration/result" element={<Result />} />
    </Routes>
  );
}

export default App;
