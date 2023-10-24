import React, { useState } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import ProjectsPopup from './ProjectsPopup'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <BlogCard key={i} onClick={() => openPopup(p)}>
              <Img src={p.image} />

              <HeaderThree title={p.title}>{p.title}</HeaderThree>
              <Hr />

              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Tech Stack</TitleContent>
                <Hr />
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
            </BlogCard>
          );
        })}
      </GridContainer>

      {selectedProject && <ProjectsPopup projeto={selectedProject} onClose={closePopup} />}
    </Section>
  );
};

export default Projects;