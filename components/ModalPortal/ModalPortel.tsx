import { createPortal } from "react-dom";
import styled from "styled-components";

const Portal = ({ children, modalStatus, backDropClose }) => {

  return modalStatus
    ? createPortal(
        <PortalOverlay onClick={backDropClose}>{children}</PortalOverlay>,
        document.querySelector("#portal")
      )
    : null;
};

const PortalOverlay = styled.div`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: 5;
  overflow: hidden;
  
`;

export default Portal;