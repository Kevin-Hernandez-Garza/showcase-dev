import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function scrollToTop() {
    const { pathname } = useLocation();

    useEffect(
        () => {
            window.scrollToTop(0, 0);
        },
        [pathname]
    );

    return null;
}