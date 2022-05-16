import styled from 'styled-components';

const colWidth = {
  12: (100 / 12) * 12,
  11: (100 / 12) * 11,
  10: (100 / 12) * 10,
  9: (100 / 12) * 9,
  8: (100 / 12) * 8,
  7: (100 / 12) * 7,
  6: (100 / 12) * 6,
  5: (100 / 12) * 5,
  4: (100 / 12) * 4,
  3: (100 / 12) * 3,
  2: (100 / 12) * 2,
  1: (100 / 12) * 1,
};

export const Row = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-wrap: wrap;
  position: relative;
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.bg || props.theme.colors.body};
`;

export const Col = styled.div`
  width: ${(props) => (props.width ? props.width : `${colWidth[props.col]}%` || '100%')};
  position: relative;
  box-sizing: border-box;
  border: ${(props) => (props.border)}px solid black;
  margin-left: ${(props) => props.ml || 0};
`;
