import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';

import Header from './components/Header';
import Footer from './components/Footer';

import Top from './components/homes/top';
import Profile from './components/homes/profile';
import Skill from './components/homes/skill';
import Production from './components/homes/production';
import Contact from './components/homes/contact';
import Blog from './components/homes/blog';
import NoMatch from './components/nomatch';

const App: React.FC = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/production" element={<Production />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>

            <Footer />
        </>
    );
};

export default App;
