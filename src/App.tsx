import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/App.scss';

import Top from './components/top';
import Profile from './components/profile';
import Skill from './components/skill';
import Production from './components/production';
import Contact from './components/contact';
import Blog from './components/blog';
import NoMatch from './components/nomatch';

const App: React.FC = () => {
    return (
        <>
            <div className="header">
                <h1>ポートフォリオサイト</h1>
                <nav>
                    <ul className="content-list">
                        <li>
                            <Link to="/">TOP</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/skill">Skill</Link>
                        </li>
                        <li>
                            <Link to="/production">Production</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <main>
                <Routes>
                    <Route path="/" element={<Top />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/skill" element={<Skill />} />
                    <Route path="/production" element={<Production />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </main>
            <h2>フッター</h2>
        </>
    );
};

export default App;
