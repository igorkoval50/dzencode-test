import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTime } from "../reducer/timeSlice";

const TopMenu = () => {
    const dispatch = useDispatch();
    const time = useSelector((state) => new Date(state.time.time)); // Convert timestamp to Date

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(updateTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [dispatch]);

    const day = time.toLocaleDateString("uk-UA", { weekday: "long" });
    const date = time.toLocaleDateString("uk-UA", { day: "2-digit", month: "short" });
    const formattedTime = time.toLocaleTimeString("uk-UA", { hour: "2-digit", minute: "2-digit" });

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
