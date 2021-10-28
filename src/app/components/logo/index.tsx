import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CompanyLogo from "../../../assets/images/cabzcarz.png"

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center

    `}
`;

const LogoText = styled.div`
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1
    `}
`;

const Image = styled.div`
    ${tw`h-6 md:h-9`};
    img {
        width:auto;
        height: 100%;
        border-radius: 5px;
    }
`;

export function Logo()
{
    return <LogoContainer>
        <Image>
            <img src={CompanyLogo} alt="cabzcarz"/>
        </Image>
        <LogoText>cabzcarz</LogoText>
    </LogoContainer>
}

