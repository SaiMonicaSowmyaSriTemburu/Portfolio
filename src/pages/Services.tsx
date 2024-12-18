// src/components/TimelineChart.tsx
import React from 'react';
import { Chrono } from 'react-chrono';

interface ExperienceData {
  title: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: string;
}

const data: ExperienceData[] = [
  {
    title: "2019-2020",
    cardTitle: "Software Intern",
    cardSubtitle: "Valuelabs",
    cardDetailedText: "Worked on various python related projects to build chatbots using NLP"
  },
  {
    title: "2020-2022",
    cardTitle: "Full Stack Developer",
    cardSubtitle: "Valuelabs",
    cardDetailedText: "Worked on MERN stack projects to build custom dashboards"
  },
  {
    title: "2022-present",
    cardTitle: "Full Stack Developer",
    cardSubtitle: "Carelon Global Solutions",
    cardDetailedText: "Working on microservices that deals with cloud and the third party tools to enable communication between systems to interchange the data that bring in value to the company in terms of net worth"
  }
];

const reversedData = [...data].reverse();

const TimelineChart: React.FC = () => {
  return (
    <div style={{ width: "600px", height: "800px", margin: "0 auto" }}>
      <Chrono
        items={reversedData}
        mode="VERTICAL_ALTERNATING"
        scrollable={{ scroll: true }}
      />
    </div>
  );
};

export default TimelineChart;
