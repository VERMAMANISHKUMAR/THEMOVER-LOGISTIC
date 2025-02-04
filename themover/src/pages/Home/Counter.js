import '../../assets/styles/StatsSection.css'; // Assuming styles are in a separate CSS file
import React, { useState, useEffect } from 'react';

const StatCard = ({ icon, count, label, target }) => {
    const [currentCount, setCurrentCount] = useState(0);

    useEffect(() => {
        const increment = target / 100;
        const updateCount = () => {
            setCurrentCount(prev => {
                if (prev < target) {
                    return Math.min(prev + increment, target);
                }
                return prev;
            });
        };
        const interval = setInterval(updateCount, 10);
        return () => clearInterval(interval);
    }, [target]);

    const formattedCount = target >= 1000 ? (currentCount / 1000).toFixed(1) + 'K' + '+' : Math.ceil(currentCount) + '+' ;

    return (
        <div className="stat-card">
            <div className="icon-count">
                <div className="icon">{icon}</div>
                <h2 className="count">{formattedCount}</h2>
            </div>
            <p className="label">{label}</p>
        </div>
    );
};

const StatsDashboard = () => {
    const stats = [
        {
            icon: (
                <svg viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
            ),
            count: '2.9K',
            label: 'Downloads App',
            target: 2900,
        },
        {
            icon: (
                <svg viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
            ),
            count: '4.5K',
            label: 'Users',
            target: 4500,
        },
        {
            icon: (
                <svg
                    xmlns=""
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                    fill="currentColor"
                >
                    <path d="M3 13v4c0 1.1.9 2 2 2h1a3 3 0 0 0 6 0h4a3 3 0 0 0 6 0h1c1.1 0 2-.9 2-2v-4a2 2 0 0 0-2-2h-3V7a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2zm2-6h10v4H5V7zm12 6h3l2 2v2h-5v-4zM7 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm10 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                </svg>
            ),
            count: '875',
            label: 'My Partners',
            target: 875,
        },
        {
            icon: (
                <svg viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
            ),
            count: '45',
            label: 'Places',
            target: 45,
        },
    ];

    return (
        <div className="stats-dashboard">
            <h2 className='header-counter'>OUR GROWING NETWORK</h2>
            <div className="stats-container">
                {stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        icon={stat.icon}
                        count={stat.count}
                        label={stat.label}
                        target={stat.target}
                    />
                ))}
            </div>
        </div>
    );
};

export default StatsDashboard;
