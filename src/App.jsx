import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Login from './pages/Login';
import UserDetails from './pages/UserDetails';
import UserGrids from './pages/UserGrids';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route index element={<Login></Login>} />
      <Route path="/profile" element={<UserGrids></UserGrids>}></Route>
      <Route path="/userDetails" element={<UserDetails></UserDetails>}></Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
