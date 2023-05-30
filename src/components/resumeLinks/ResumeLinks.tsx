import React from "react";

interface ResumeLinkProps {
    resumeUrl: string;
    // coverLetterUrl: string;
}

const ResumeLinks: React.FC<ResumeLinkProps> = ({ resumeUrl }) => {
    return (
        <div style={{justifyContent: 'center', alignItems: 'center', width: '100%', display: 'flex', paddingTop: '8px'}}>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" download>Download Resume</a>
        </div>
    )
}

export default ResumeLinks;