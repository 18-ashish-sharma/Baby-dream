import styled from 'styled-components';

export const Para = styled.div`
  font-size: ${(props) => props.theme.fonts.font_size[props.fontSize] || '14px'};
  position: relative;
  margin: 0;
  padding: ${(props) => props.p || 0}px;
  font-weight: ${(props) => props.weight || 400};
  font-weight: ${(props) => props.theme.fonts.font_weight[props.fontWeight]};
  padding-top: ${(props) => props.pt}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-right: ${(props) => props.pr}px;
  padding-left: ${(props) => props.pl}px;
  line-height: ${(props) => props.lineHeight || '16'}px;
  color: ${(props) => props.color};
`;

export const BoxContainer = styled.div`
  width: ${(props) => props.w}px;
  min-height: ${(props) => props.minHeight}rem;
  height: ${(props) => props.h}px;
  padding: 7px 20px 5px 24px;
  margin: 12px;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
`;
