import React from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';
import './App.css'; // Import your CSS file

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Body />
                {/* Add more sections/components as needed */}
            </main>
            <Footer />
        </div>
    );
}

export default App;
