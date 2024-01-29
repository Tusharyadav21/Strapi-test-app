import React from "react";

import { Text } from "..";

export const Headline = ({ children }) => {
    return (
        <h1
            className="sm:text-4xl md:text-[38px] text-[40px] text-bluegray-900 font-bold font-montserrat"
        >
            {children}
        </h1>
    )
};
