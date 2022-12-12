import React from "react";

import { ButtonWrapper } from "./styles";

export interface ButtonProps {
    mode?: "primary";
}

export function Button() {
    return (
        <ButtonWrapper>
            <p>Design Button</p>
        </ButtonWrapper>
    );
}
