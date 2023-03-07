import styled from "@emotion/styled";

export const MapWrapper = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-color: #ffffff;
  height: 726px;
  padding: 0 0 24px 0;
`;

export const Point1 = styled.button`
  position: absolute;
  background: none;
  border: none;
  top: 154px;
  left: 670px;
  cursor: pointer;
`;

export const Point2 = styled.button`
  position: absolute;
  background: none;
  border: none;
  top: 208px;
  left: 294px;
  cursor: pointer;
`;

export const Point3 = styled.button`
  position: absolute;
  background: none;
  border: none;
  top: 216px;
  left: 484px;
  cursor: pointer;
`;

export const Point4 = styled.button`
  position: absolute;
  background: none;
  border: none;
  top: 291px;
  left: 226px;
  cursor: pointer;
`;

export const Point5 = styled.button`
  position: absolute;
  background: none;
  border: none;
  top: 405px;
  left: 554px;
  cursor: pointer;
`;

export const Point6 = styled.button`
  position: absolute;
  background: none;
  border: none;
  top: 629px;
  left: 294px;
  cursor: pointer;
`;

export const Point7 = styled.button`
  position: absolute;
  background: none;
  border: none;
  top: 676px;
  left: 241px;
  cursor: pointer;
`;

export const Path = styled.path`
  &.active {
    fill: #d6a43b;
  }
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 283px;
  left: 623px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #d6a43b;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 46px;
`;

export const Icon = styled.img`
  margin: 0 0 26px 0;
`;

export const Address = styled.address`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #343638;
  margin: 0 0 16px 0;
  align-self: center;
`;

export const SmallWrapper = styled.div`
  display: flex;
  gap: 18px;
  align-self: center;
`;

export const Phone = styled.a`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #343638;
  margin: 0 0 16px 0;
  text-decoration: none;
`;

export const Site = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 30px;
  color: #343638;
`;
