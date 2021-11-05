import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Button } from '../button';
import { Marginer } from '../marginer';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { SCREENS } from '../responsive';

const CardContainer = styled.div`
min-height: 4.3em;
box-shadow: 0 1.3px 12px -3px rgba(0,0,0,0.5);
  ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-6
        md:pr-6
    `};
`;

const ItemContainer = styled.div`
  ${tw`
        flex
        relative
    `}
`;

const Icon = styled.span`
  ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `}
`;

const SmallIcon = styled.span`
    ${tw`
        text-gray-700
        fill-current
        text-xs
        md:text-base
        ml-1
    `}
`;

const LineSeperator = styled.div`
  width: 2px;
  height: 45%;
  ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `}
`;

const Name = styled.span`
  ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `}
`;

const DateCalendar = styled(Calendar)`
    position:absolute;
    max-width: none;
    top:3em;
    left:0;

    ${({ offset } : any) => offset && css`
        left:-6em;
    `};
    
    @media (min-width: ${SCREENS.md}){
        top:3.5em;
        left:-1em;
    }
`as any;

export function BookCard() {
    const [startDate, setStartDate] = useState(new Date());
    const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
    const [endDate, setEndDate] = useState();
    const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false);

    const toggleStartDateCalendar = () => {
        setIsStartCalendarOpen(!isStartCalendarOpen)
        setIsEndCalendarOpen(false)
    }

    const toggleEndDateCalendar = () => {
        setIsEndCalendarOpen(!isEndCalendarOpen)
        setIsStartCalendarOpen(false)
    }

  return (
    <CardContainer>
      <ItemContainer>
        <Icon onClick={toggleStartDateCalendar}>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Pick up Date</Name>
        {isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate}/>}
        <SmallIcon>
            <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown}/>
        </SmallIcon>
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon onClick={toggleEndDateCalendar}>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleEndDateCalendar}>Return Date</Name>
        {isEndCalendarOpen && <DateCalendar offset={true} value={endDate} onChange={setEndDate}/>}
        <SmallIcon>
            <FontAwesomeIcon icon={isEndCalendarOpen ? faCaretUp : faCaretDown}/>
        </SmallIcon>
      </ItemContainer>
      <Marginer direction='horizontal' margin='2em' />
      <Button text='Book your ride!' />
    </CardContainer>
  );
}
