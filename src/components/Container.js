import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.maxWidth || props.theme.breakpoints.lg};
  margin: 0 auto;
  padding: ${(props) => props.padding || props.theme.spacing(4)};
  background: ${(props) => props.bg || 'transparent'};
  border-radius: ${(props) => props.borderRadius || '0'};
  box-shadow: ${(props) => props.shadow || 'none'};

  /* Optionales Notch-Design */
  ${(props) =>
    props.notch &&
    `
    clip-path: polygon(0 0, 100% 0, 100% 100%, calc(100% - 30px) 100%, 100% calc(100% - 30px), 30px 100%, 0 calc(100% - 30px));
    background: ${props.theme.colors.background.main};
  `}
`;

export default Container;
