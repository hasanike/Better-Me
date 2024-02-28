import App from './App.jsx';
import WorkoutList from './pages/WorkoutList';
import WorkoutDetail from './pages/WorkoutDetail';
import ExerciseList from './pages/ExerciseList';
import ExerciseDetail from './pages/ExerciseDetail';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <WorkoutList />
      }, {
        path: '/workouts/:workoutId',
        element: <WorkoutDetail />
      }, {
        path: '/exercises',
        element: <ExerciseList />
      }, {
        path: '/exercises/:exerciseId',
        element: <ExerciseDetail />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
