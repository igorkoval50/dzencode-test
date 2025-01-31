import { useCallback } from "react";

const useDateFormatter = () => {
    // Function to format date as "DD Month YYYY" (e.g., "06 Сен 2017")
    const formatDate = useCallback((dateString) => {
        if (!dateString) return '';

        const date = new Date(dateString);
        return new Intl.DateTimeFormat('uk-UA', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }).format(date).replace('.', '');
    }, []);

    // Function to format date as "DD / MM / YYYY"
    const formatDateDay = useCallback((dateString) => {
        if (!dateString) return '';

        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();

        return `${day} / ${month} / ${year}`;
    }, []);

    return { formatDate, formatDateDay };
};

export default useDateFormatter;
