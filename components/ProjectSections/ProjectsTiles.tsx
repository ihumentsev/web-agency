import ArrowButton from "../Buttons/ArrowButton";
import Container from "../Container/Container";
import {DescriptionWraper, DescriptionWraperHover, ProjectsItem, ProjectsList, ProjectsSection, SectionText, TitleWraper} from './ProjectsTiles.styled'
import project1 from '../../images/project2.png'
import project2 from '../../images/project4.png'
import Image from "next/image";
export default function ProjectsTiles({ title }) {
  return (
    <>
      <ProjectsSection>
        <Container>
          <TitleWraper>
            <div>
            <h2>{title} </h2>
            <SectionText>
            As an IT company, we pride ourselves on delivering customized
            solutions that meet our clients&#39; unique needs. Our projects
            highlight our expertise in web & mobile development, cloud
            computing, cybersecurity, and digital marketing.
          </SectionText>
            </div>
            
            <ArrowButton
              text="MORE PROJECTS"
              handler={() => {
                console.log("click");
              }}
            />
          </TitleWraper>
         
          <ProjectsList>
            <ProjectsItem>
              
                <Image src={project1} alt="jngfjn" width={800} height={800}/>
                <DescriptionWraper>
                
                <h3>Na vchora</h3>
                <p>2 0 2 3</p>
              </DescriptionWraper>
              <DescriptionWraperHover className="backdrop">
                
                <p className="sub-title">Web Development</p>
                <h3>Na vchora</h3>
                <p className="backdrop-text">
                A network of print shops in Na VCHORA. A solution was required to present the company&#39;s products and services on the Internet 
                </p>
                <button>READ MORE</button>
              </DescriptionWraperHover>
            </ProjectsItem>
            <ProjectsItem>
              
                <Image src={project2} alt="jngfjn" width={800} height={800}/>
                <DescriptionWraper>
                
                <h3>Uwang Corp.</h3>
                <p>2024</p>
              </DescriptionWraper>
              <DescriptionWraperHover className="backdrop">
                <p className="sub-title">Web Development</p>
                <h3>Uwang Corp.</h3>
                <p className="backdrop-text">
                Uwang Corp, a large hospital network, was
                  concerned about the security of their patient data.
                </p>
                <button>READ MORE</button>
              </DescriptionWraperHover>
            </ProjectsItem>
          </ProjectsList>
        </Container>
      </ProjectsSection>
    </>
  );
}
