import styled from 'styled-components';
import StickyBox from 'react-sticky-box';

export const Container = styled(StickyBox)`
  height: 47px;
  width: 100%;

  background: var(--primary);

  padding: 0.25rem 0;
`;

export const SearchBarBox = styled.div`
  height: 40px;

  display: flex;
  align-items: center;

  border-radius: 9999px;

  background: var(--outline);

  :focus-within {
    border: 1px solid var(--twitter);
    background: var(--primary);

    .input-box {
      svg {
        fill: var(--twitter);
      }
    }
  }

  .input-box {
    margin-left: 1rem;

    svg {
      fill: var(--gray);
    }

    input {
      outline: 0;
      border: 0;
      margin-left: 16px;
      font-size: 1rem;

      ::placeholder {
        font-size: 15px;
        color: var(--gray);
        font-weight: 400;
      }
    }
  }
`;
