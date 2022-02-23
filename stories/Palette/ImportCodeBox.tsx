import styles from '@stories/Palette/styles.module.css';
import SvgComponent from '@common/SvgComponent';
import { useCallback, useRef } from 'react';
import { toast } from 'react-toastify';

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
        className: styles['toast'],
      },
    );
  }, []);

  return (
    <p className={styles['Palette__code']} ref={codeBoxRef}>
      <span className={styles['Palette__code__token--cyan']}>import</span>{' '}
      <span className={styles['Palette__code__token--purple']}>{`{`}</span>{' '}
      <span className={styles['Palette__code__token--white']}>IconName</span>{' '}
      <span className={styles['Palette__code__token--purple']}>{`}`}</span>{' '}
      <span className={styles['Palette__code__token--cyan']}>from</span>{' '}
      <span className={styles['Palette__code__token--green']}>
        'querypie-icons'
      </span>
      <span className={styles['Palette__code__token--purple']}>;</span>
      <CopyIcon
        size="S"
        className={styles['Palette__code__copy-icon']}
        onClick={handleClickCopyIcon}
      />
    </p>
  );
};

export default ImportCodeBox;
