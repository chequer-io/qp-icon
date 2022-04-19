import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ToastContainer as _ToastContainer } from 'react-toastify';

export const StyledPalette = styled.main`
  > header {
    margin-bottom: 1.66rem;

    h1 {
      font-size: 2rem;
      font-weight: 500;
    }
  }

  section + section {
    margin-top: 1rem;
  }

  > section {
    > header {
      margin-bottom: 1rem;

      h2 {
        font-size: 1.5rem;
        margin-bottom: 0.66rem;
      }
    }
  }
`;

export const Code = styled.p`
  width: 100%;
  position: relative;
  background-color: #011627;
  border-radius: 6px;
  padding: 1rem;
  overflow: auto;
  font-size: 1rem;
  font-family: monospace;

  > span[data-color='cyan'] {
    color: #7fdbca;
  }
  > span[data-color='purple'] {
    color: #c792ea;
  }
  > span[data-color='white'] {
    color: #d6deeb;
  }
  > span[data-color='green'] {
    color: #addb67;
  }

  svg {
    position: absolute;
    top: 0.66em;
    right: 0.66em;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 30rem;
  font-size: 1rem;
  padding: 0.6em 0 0.6em 0.6em;
  color: #555;
  outline: none;
  border: 1px solid #dddddd;
  transition: all 0.3s ease-in-out;

  :focus {
    border: 1px solid rgba(87, 169, 207, 1);
    box-shadow: 0 0 5px rgba(87, 169, 207, 1);
  }
  ::placeholder {
    color: #bbb;
  }
`;

export const IconGallery = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-columns: max-content;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1rem;
  height: 100%;
`;

export const StyledIconBox = styled.div<{ isClicked: boolean }>`
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 6px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  cursor: pointer;
  overflow: hidden;

  :hover,
  :focus {
    background-color: #eee;
  }

  ${({ isClicked }) =>
    isClicked &&
    css`
      border: 2px solid #df4576;
      background-color: #fff5f5 !important;
    `}
`;

export const IconBoxLabel = styled.p`
  width: 100%;
  height: fit-content;
  text-align: center;
  line-height: 1.5;
  padding-top: 5px;
  color: #172b4d;
  font-size: 0.8rem;
  user-select: none;
`;

export const IconBoxContent = styled.div<{
  color?: string;
  backgroundColor?: string;
}>`
  color: ${p => p.color ?? '#000'};
  background-color: ${p => p.backgroundColor ?? '#fff'};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

export const IconText = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 0.33rem;
  color: #172b4d;
  user-select: none;

  & + & {
    margin-top: 0.33rem;
  }

  > svg {
    justify-self: end;
  }
`;

export const ToastContainer = styled(_ToastContainer)`
  width: initial !important;
`;

export const toastGlobalStyles = css`
  .toast {
    position: relative;
    min-height: initial !important;
    padding: 0.66rem 2rem 0.66rem 1.66rem !important;
    font-weight: bold;
  }

  .toast > button {
    position: absolute;
    top: 0.66rem;
    right: 0.66rem;
  }

  .toast__check {
    font-size: 1.5rem;
    color: #1bd985;
    text-shadow: 1px 1px 1px #555;
    vertical-align: middle;
    padding-right: 0.33rem;
  }

  .toast__code {
    color: #df4576;
  }

  .toast__code__bracket {
    color: #2f8d68;
  }
`;
