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
            <div className="top-menu__container container">
                <div className="row">
                    <div className="col-md-4 top-menu__logo">
                        <img src="/inventory.svg" alt="inventory img"/>
                        <strong className="top-menu__logo-text">Inventory</strong>
                    </div>

                    <div className="col-md-4 top-menu__search">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="top-menu__search-input"
                        />
                    </div>

                    <div className="col-md-4 top-menu__date">
                        <p className="top-menu__day">{day}</p>
                        <div className="top-menu__time">
                            <span>{date}</span>

                            <p className="top-menu__time-text">
                                <img src="/clock.svg" alt="clock"/>
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
