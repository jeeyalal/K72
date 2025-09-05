import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeBottomText() {

    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const options = {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            };
            const formatter = new Intl.DateTimeFormat("en-IN", options);
            setTime(formatter.format(new Date()));
        };

        updateTime(); // initial call
        const interval = setInterval(updateTime, 1000); // update every second
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-[font2] flex items-center justify-center gap-2 relative w-full">
            {/* Time in left corner */}
            <div className="absolute left-4 bottom-2 text-sm opacity-80">
                {time} IST
            </div>

            {/* Center links */}
            <Link className="text-[6vw] leading-[5.5vw] border-3 uppercase border-white rounded-full px-8 py-1 pt-1">
                Project
            </Link>
            <Link className="text-[6vw] leading-[5.5vw] border-3 uppercase border-white rounded-full px-8 py-1 pt-1">
                Agence
            </Link>
        </div>
    );
}

export default HomeBottomText;
