// src/App.jsx
import { useEffect } from 'react';
import TopMenu from './components/TopMenu.jsx';
import NavigationMenu from './components/NavigationMenu.jsx';
import { uploadProducts } from './data/uploadProducts.js';

function App() {
    const orderId = 'cHOFosQdS1VvFujinVLE';

    useEffect(() => {
        uploadProducts(orderId);
    }, [orderId]);

    return (
        <>
            <TopMenu />
            <NavigationMenu />
        </>
    );
}

export default App;
