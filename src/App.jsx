import './App.css';
import { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './components/Home'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Nav } from './components/Nav'
import { Social } from './components/Social'

export const App = () => {
    return (
        <BrowserRouter>
            <Route
                exact path="/"
                component={Home}
            />
            <Route
                path="/about"
                component={About}
            />
            <Route
                path="/projects"
                component={Projects}
            />
            <Route
                path="/contact"
                component={Contact}
            />
            <Nav />
            <Social />
        </BrowserRouter>
    )
}
