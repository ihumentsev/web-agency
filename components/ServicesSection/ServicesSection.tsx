import Link from "next/link";
import Container from "../Container/Container";
import {
  IconWraper,
  SectionServices,
  ServicesItem,
  ServicesList,
} from "./ServicesSection.styled";
import GoBack from "../GoBack/GoBack";

export default function ServicesSection() {
  return (
    <>
      <SectionServices>
        <Container>
          <GoBack prevPath={{}} title="Services" />
          <h2>Services</h2>
          <ServicesList>
            <ServicesItem>
              <Link href="/services/web-development">
                <IconWraper>
                  <svg width={80} height={80} fill="#fff">
                    <use href="/icons/symbol-defs.svg#icon-Web-Icon"></use>
                  </svg>

                  <svg
                    width={50}
                    height={50}
                    className="btn"
                    fill="currentColor"
                  >
                    <use href="/icons/symbol-defs.svg#icon-ArrowIconSmol"></use>
                  </svg>
                </IconWraper>
                <div className="text-wraper">
                  <h3>Web Development</h3>
                  <p>
                    Create websites that are both visually appealing and
                    functional for users.
                  </p>
                </div>
              </Link>
            </ServicesItem>
            <ServicesItem>
              <Link href="#">
                <IconWraper>
                  <svg width={80} height={80}>
                    <use href="/icons/sprite.svg#icon-mobile"></use>
                  </svg>
                  <svg
                    width={50}
                    height={50}
                    className="btn"
                    fill="currentColor"
                  >
                    <use href="/icons/symbol-defs.svg#icon-ArrowIconSmol"></use>
                  </svg>
                </IconWraper>
                <div className="text-wraper">
                  <h3>Mobile Development</h3>
                  <p>
                    Create or enhance mobile applications, ensuring optimized
                    user experience.
                  </p>
                </div>
              </Link>
            </ServicesItem>
            <ServicesItem>
              <Link href="#">
                <IconWraper>
                  <svg width={80} height={80}>
                    <use href="/icons/sprite.svg#icon-Security-Icon"></use>
                  </svg>
                  <svg
                    width={50}
                    height={50}
                    className="btn"
                    fill="currentColor"
                  >
                    <use href="/icons/symbol-defs.svg#icon-ArrowIconSmol"></use>
                  </svg>
                </IconWraper>
                <div className="text-wraper">
                  <h3>Cyber Security</h3>
                  <p>
                    Provides advanced protection for your data and systems
                    against threats.
                  </p>
                </div>
              </Link>
            </ServicesItem>
            <ServicesItem>
              <Link href="#">
                <IconWraper>
                  <svg width={80} height={80}>
                    <use href="/icons/sprite.svg#icon-Marketing-Icon"></use>
                  </svg>
                  <svg
                    width={50}
                    height={50}
                    className="btn"
                    fill="currentColor"
                  >
                    <use href="/icons/symbol-defs.svg#icon-ArrowIconSmol"></use>
                  </svg>
                </IconWraper>
                <div className="text-wraper">
                  <h3>Digital Marketing</h3>
                  <p>
                    Create solutions to help businesses achieve their digital
                    marketing goals.
                  </p>
                </div>
              </Link>
            </ServicesItem>
            <ServicesItem>
              <Link href="#">
                <IconWraper>
                  <svg width={80} height={80}>
                    <use href="/icons/sprite.svg#icon-Cloud-Icon"></use>
                  </svg>
                  <svg
                    width={50}
                    height={50}
                    className="btn"
                    fill="currentColor"
                  >
                    <use href="/icons/symbol-defs.svg#icon-ArrowIconSmol"></use>
                  </svg>
                </IconWraper>
                <div className="text-wraper">
                  <h3>Cloud Computing</h3>
                  <p>
                    Provides access to scalable computing resources to optimize
                    their operations.
                  </p>
                </div>
              </Link>
            </ServicesItem>
            <ServicesItem>
              <Link href="#">
                <IconWraper>
                  <svg width={80} height={80}>
                    <use href="/icons/sprite.svg#icon-Coding-Icon"></use>
                  </svg>
                  <svg
                    width={50}
                    height={50}
                    className="btn"
                    fill="currentColor"
                  >
                    <use href="/icons/symbol-defs.svg#icon-ArrowIconSmol"></use>
                  </svg>
                </IconWraper>
                <div className="text-wraper">
                  <h3>Software Development</h3>
                  <p>
                    Provides customized solutions to create and maintain
                    software applications.
                  </p>
                </div>
              </Link>
            </ServicesItem>
            <ServicesItem>
              <Link href="#">
                <IconWraper>
                  <svg width={80} height={80}>
                    <use href="/icons/sprite.svg#icon-Rocket-Icon"></use>
                  </svg>
                  <svg
                    width={50}
                    height={50}
                    className="btn"
                    fill="currentColor"
                  >
                    <use href="/icons/symbol-defs.svg#icon-ArrowIconSmol"></use>
                  </svg>
                </IconWraper>
                <div className="text-wraper">
                  <h3>IT Project Management</h3>
                  <p>
                    Provides businesses with expert guidance and support for IT
                    projects.
                  </p>
                </div>
              </Link>
            </ServicesItem>
            <ServicesItem>
              <Link href="#">
                <IconWraper>
                  <svg width={80} height={80}>
                    <use href="/icons/sprite.svg#icon-Data-Analysis-Icon"></use>
                  </svg>
                  <svg
                    width={50}
                    height={50}
                    className="btn"
                    fill="currentColor"
                  >
                    <use href="/icons/symbol-defs.svg#icon-ArrowIconSmol"></use>
                  </svg>
                </IconWraper>
                <div className="text-wraper">
                  <h3>Data Analysis</h3>
                  <p>
                    Provide data analysis for varied categories to help client
                    businesses.
                  </p>
                </div>
              </Link>
            </ServicesItem>
            <ServicesItem>
              <Link href="#">
                <IconWraper>
                  <svg width={80} height={80}>
                    <use href="/icons/sprite.svg#icon-Network-Icon"></use>
                  </svg>
                  <svg
                    width={50}
                    height={50}
                    className="btn"
                    fill="currentColor"
                  >
                    <use href="/icons/symbol-defs.svg#icon-ArrowIconSmol"></use>
                  </svg>
                </IconWraper>
                <div className="text-wraper">
                  <h3>Network Management</h3>
                  <p>
                    Provide management of network infrastructure design for
                    clients.
                  </p>
                </div>
              </Link>
            </ServicesItem>
          </ServicesList>
        </Container>
      </SectionServices>
    </>
  );
}
