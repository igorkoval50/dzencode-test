import { useEffect, useState } from "react";

const TopMenu = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const day = time.toLocaleDateString('uk-UA', { weekday: 'long' }); // day
    const date = time.toLocaleDateString('uk-UA', { day: '2-digit', month: 'short' }); // date
    const formattedTime = time.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' }); // hours

    return (
        <header className="top-menu">
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <img src="/inventory.svg" alt="inventory img"/>
                        <strong>Inventory</strong>
                    </div>

                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                        />
                    </div>

                    <div className="date">
                        <p className="day">{day}</p>
                        <div className="time">
                            <span>{date}</span>

                            <p>
                                <img src="/public/clock.svg" alt="clock"/>
                                <span>{formattedTime}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopMenu;
