import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SectionHolder from './components/SectionHolder';

export const PageContext = React.createContext();

function App() {
    const [page, setPageState] = useState("#getting-started");

    function setPage(id) {
        if(!id || id === '') return setPageState("#getting-started");
            if(/examples-.+?/.test(id)) return setPageState("#examples");
    
            setPageState(id);
    }
    
    useEffect(() => {
        setPage(window.location.hash)
    }, []);

    return (
        <PageContext.Provider value={{ page, setPage }}>
            <Navbar />
            <SectionHolder />
        </PageContext.Provider>
    );
}

export default App;