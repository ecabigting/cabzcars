import React from "react"
import styled from "styled-components"
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import  BBImage  from "../../../assets/images/bumblebee.png"

const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-white
    `};
`;

const CarContainer = styled.div`
    width: auto;
    padding-top:200px;

    img {
        max-width:640px;
        max-height:480px;
    }

    @media (min-width: ${SCREENS.md}){
        height: 28em;
    }
    @media (min-width: ${SCREENS.lg}){
        height: 30em;
    }
    @media (min-width: ${SCREENS["2xl"]}){
        height: 35em;
        margin-left: 0%;
    }
`;

const InfoContainer = styled.div`
    ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `}
`;

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `}
`;

const Infotext = styled.div`
    ${tw`
        md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        mt-4
        font-normal
    `}
`;

export function AboutUs() {
    return <AboutUsContainer>
        <CarContainer>
            <img src={BBImage} alt="cabzcarz bumble bee" />
        </CarContainer>
        <InfoContainer>
            <Title>Best Deals</Title>
            <Infotext>Sed quia consequuntur .Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </Infotext>
        </InfoContainer>
    </AboutUsContainer>
}