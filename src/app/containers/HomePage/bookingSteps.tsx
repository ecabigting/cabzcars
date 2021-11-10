import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faCarSide, faLocationArrow, faMapMarked, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-3
        pb-3
        lg:pt-6
        lg:pb-7
    `}
`;

const Title = styled.h2`
    ${tw`
        text-4xl
        lg:text-5xl
        text-black
        font-black
        text-center
    `}
`;

const StepsContainer = styled.div`
    ${tw`
        flex
        justify-evenly
        flex-wrap
        mt-7
        lg:mt-16
    `}
`;

const StepContainer = styled.div`
    ${tw`
        flex
        flex-col
        m-3.5
        md:w-96
        items-center
        transition-colors
        hover:text-red-500
    `}
`;

const Step = styled.div`
    box-shadow: 0 1.3px 12px -4px rgba(0, 0, 0, 0.5);
    ${tw`
        flex
        rounded-lg
        items-center
        justify-center
        p-6
    `}
`;

const StepDescription = styled.p`
    ${tw`
        w-10/12
        text-xs
        md:text-sm
        text-center
        text-gray-600
    `}
`;

const StepTitle = styled.span`
    ${tw`
        text-black
        text-lg
        font-semibold
        mt-4
    `}
`;

const StepIcon = styled.span`
    ${tw`
        text-red-500
        text-3xl
    `}
`;

export function BookingSteps(){
    return <Container>
        <Title>Book a car in a few simple steps</Title>
        <StepsContainer>
            <StepContainer>
                <Step>
                    <StepIcon>
                        <FontAwesomeIcon icon={faMapMarkedAlt}/>
                    </StepIcon>
                </Step>
                <StepTitle>
                    Choose your Location
                </StepTitle>
                <StepDescription>
                    Find the nearest cabzcarz to book you
                </StepDescription>
            </StepContainer>
            <StepContainer>
                <Step>
                    <StepIcon>
                        <FontAwesomeIcon icon={faCalendar}/>
                    </StepIcon>
                </Step>
                <StepTitle>
                    Pick a date
                </StepTitle>
                <StepDescription>
                    Select the date you want to pick up your car
                </StepDescription>
            </StepContainer>
            <StepContainer>
                <Step>
                    <StepIcon>
                        <FontAwesomeIcon icon={faCarSide}/>
                    </StepIcon>
                </Step>
                <StepTitle>
                    Choose your Car
                </StepTitle>
                <StepDescription>
                    Select the car you want from the huge range of cars ready for you
                </StepDescription>
            </StepContainer>
        </StepsContainer>
    </Container>
}