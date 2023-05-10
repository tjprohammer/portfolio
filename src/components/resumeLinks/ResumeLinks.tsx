import React from "react";

interface ResumeLinkProps {
    resumeUrl: string;
    // coverLetterUrl: string;
}

const ResumeLinks: React.FC<ResumeLinkProps> = ({ resumeUrl }) => {
    return (
        <div>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" download>Download Resume</a>
        </div>
    )
}

export default ResumeLinks;