import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Photos from "./pages/Photos";
import Contacts from "./pages/Contacts";
import Layout from "./layouts/Layouts";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="react-task19">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="post" element={<Post />} />
            <Route path="photos" element={<Photos />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
