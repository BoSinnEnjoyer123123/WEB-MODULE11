import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageSelectSet } from './components/PageSelectSet';
import { PageViewSet } from './components/PageViewSet';
import { PageCreateSet } from './components/PageCreateSet';
import { Page404 } from './components/Page404';
import FormCreateSet from './components/FormCreateSet';
import FormCreateCard from './components/FormCreateCard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSelectSet />} />
        <Route path="/set/:id" element={<PageViewSet />} />
        <Route path="/admin" element={<PageCreateSet />}>
          <Route path="createset" element={<FormCreateSet />} />
          <Route path="createcard" element={<FormCreateCard />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
