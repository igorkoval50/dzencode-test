import useOrders from '../hook/useOrders.js';
import { useRef } from "react";

const Search = () => {
    return (
        <div className="col-md-4 top-menu__search">
            <form action="#">
                <input
                    type="text"
                    placeholder="Search..."
                    className="top-menu__search-input"
                />
            </form>
        </div>
    )
}

export default Search;