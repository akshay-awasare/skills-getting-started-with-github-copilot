import React from 'react';
import './ActivityCard.css';

function ActivityCard({ activity }) {
  return (
    <div className="activity-card">
      {/* Participants Section */}
      {activity.participants && activity.participants.length > 0 && (
        <div className="participants-section">
          <h4>Participants</h4>
          <ul className="participants-list">
            {activity.participants.map((name, idx) => (
              <li key={idx} className="participant-item">
                <span className="participant-avatar" aria-label={name}>
                  {name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2)}
                </span>
                <span className="participant-name">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ActivityCard;