import 'semantic-ui-css/semantic.min.css'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import WorkoutList from './pages/WorkoutList';
import WorkoutDetail from './pages/WorkoutDetail';
import ExerciseList from './pages/ExerciseList';
import ExerciseDetails from './pages/ExerciseDetails';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Homepage.jsx'
// import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <SignUp />
        // }, {
        //   path: '/profiles/:username',
        //   element: <Profile />
      }, {
        path: '/workouts/:workoutId',
        element: <WorkoutDetail />
      }, {
        path: '/exercises',
        element: <ExerciseList />
      }, {
        path: '/exercises/:exerciseId',
        element: <ExerciseDetails />
      }, {
        path: '/workoutlist',
        element: <WorkoutList />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
