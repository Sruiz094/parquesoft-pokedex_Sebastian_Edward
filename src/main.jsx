import React from 'react'
import ReactDOM from 'react-dom/client'
import PokemonList from './components/PokemonList'
import PokemonDetail from './components/PokemonDetail'
import { PokemonProvider } from './context/PokemonContext'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import App from './App.jsx'


const router = createBrowserRouter([
  { path: "/", element: <PokemonList /> },
  { path: '/detail/:pokemonId', element: <PokemonDetail /> },
  { path: "/detalle/:name/:id", element: <PokemonDetail /> }, 
  { element: <App /> }, 
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>
      <RouterProvider router={router} />
    </PokemonProvider>
  </React.StrictMode>,



)
