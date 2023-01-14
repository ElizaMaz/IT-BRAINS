import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: rgb(174, 238, 237);
  background: radial-gradient(
    circle,
    rgba(174, 238, 237, 1) 0%,
    rgba(191, 148, 233, 1) 100%
  );

  /* робимо фон на всю ширину */
  width: 100%;
`;
