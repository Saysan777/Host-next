import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Image from 'next/image';


const Projects = () => (
  <Section noPadding id ="projects" >
    <SectionDivider />
      <SectionTitle main>
        Projects
      </SectionTitle>
      <GridContainer>
        { projects.map(({id ,title, image ,description , tags , source, visit})=> 
        (
            <BlogCard key = {id}>
             <Image src= {image} width = "300px" height ="140px" alt="webRTC"/>,
              <TitleContent>
                <HeaderThree>
                  {title}
                </HeaderThree>
                </TitleContent>
                <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent> Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) =>(
                  <Tag key = {i}>{tag} </Tag>
              )
              )}
            </TagList>
            
            </div>
            </BlogCard>
        )
        )}
      </GridContainer>
  </Section>
);

export default Projects;