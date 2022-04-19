import SvgComponent from '../../src/common/SvgComponent';
import { useCallback, useRef } from 'react';
import { toast } from 'react-toastify';
import { Code } from './styles';
import { CustomizedSVGComponent } from '../../src/typings';

const CopyIcon: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent viewBox="0 0 32 32" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 18H4V4H18V2H4C2.90002 2 2 2.90002 2 4V18ZM10 28H28V10H10V28ZM10 8H28C29.1 8 30 8.90002 30 10V28C30 29.11 29.1 30 28 30H10C8.89001 30 8 29.11 8 28V10C8 8.90002 8.89001 8 10 8Z"
      fill="white"
    />
  </SvgComponent>
);

const ImportCodeBox = () => {
  const codeBoxRef = useRef<HTMLParagraphElement>(null);

  const handleClickCopyIcon = useCallback(async () => {
    const codeBoxEl = codeBoxRef.current;
    if (!codeBoxEl?.textContent) return;

    await navigator.clipboard.writeText(codeBoxEl.textContent);

    toast(
      <p>
        <span>✓</span> Copied to clipboard
      </p>,
      {
        position: toast.POSITION.TOP_CENTER,
        className: 'toast',
      },
    );
  }, []);

  return (
    <Code ref={codeBoxRef}>
      <span data-color="cyan">import</span>{' '}
      <span data-color="purple">{`{`}</span>{' '}
      <span data-color="white">IconName</span>{' '}
      <span data-color="purple">{`}`}</span> <span data-color="cyan">from</span>{' '}
      <span data-color="green">'qp-icon'</span>
      <span data-color="purple">;</span>
      <CopyIcon fontSize={16} onClick={handleClickCopyIcon} />
    </Code>
  );
};

export default ImportCodeBox;
