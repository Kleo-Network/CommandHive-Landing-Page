import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './about';
import { FAQs } from './components/FAQs';
import { Features } from './components/home/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/home/hero/HeroSection';
import { HowCommandHiveWorks } from './components/home/HowCommandHiveWorks';
import { Partners } from './components/home/Partners';
import { UserReviews } from './components/home/UserReviews';

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <Partners />
            <HowCommandHiveWorks />
            <Features />
            <UserReviews />
            <FAQs />
            <Footer />
        </>
    );
};

const App: React.FC = () => {
    return (
        <main className="w-screen min-h-screen relative">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
    );
};

export default App;
