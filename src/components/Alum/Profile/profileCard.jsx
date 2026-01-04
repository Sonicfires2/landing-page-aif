import React, { useId, useState } from "react";
import style from "./ProfileCard.module.css";

const ProfileCard = ({ name, major, email, extraDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = useId();
  const hasDetails = Boolean(extraDetails && extraDetails.trim().length > 0);

  // Try to turn email/URL-ish strings into links when possible
  const renderContact = () => {
    if (!email) return null;
    const trimmed = String(email).trim();

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      return (
        <a href={`mailto:${trimmed}`} onClick={(e) => e.stopPropagation()}>
          {trimmed}
        </a>
      );
    }
    if (/^https?:\/\//i.test(trimmed)) {
      return (
        <a href={trimmed} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
          {trimmed}
        </a>
      );
    }
    return <span>{trimmed}</span>;
  };

  return (
    <div className={style.cardOuter}>
      <button
        type="button"
        className={isExpanded ? style.profileCardExtraDetails : style.profileCard}
        onClick={() => hasDetails && setIsExpanded((v) => !v)}
        tabIndex={0}
        aria-expanded={hasDetails ? isExpanded : undefined}
        aria-controls={hasDetails ? detailsId : undefined}
        disabled={!hasDetails}
      >
        {!isExpanded ? (
          <>
            <div className={style.ProfileSectionName}>{name}</div>
            <div className={style.ProfileSectionMajor}>{major}</div>
            <div className={style.ProfileSectionContact}>{renderContact()}</div>

            {hasDetails && (
              <span className={style.srOnly}>
                Activate to view more details
              </span>
            )}
          </>
        ) : (
          <div id={detailsId} className={style.ProfileSectionExtraDetails}>
            {extraDetails}
          </div>
        )}
      </button>
    </div>
  );
};

export default ProfileCard;