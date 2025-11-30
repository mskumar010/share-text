import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './HomePage';
import ViewPage from './ViewPage';
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/view/:uid" element={<ViewPage />} />
				<Route path="/x" element={<ViewPage />} />
			</Routes>
		</BrowserRouter>
	);
}

