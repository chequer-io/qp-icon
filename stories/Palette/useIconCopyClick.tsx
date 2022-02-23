import { MouseEventHandler, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styles from '@stories/Palette/styles.module.css';
import SvgComponent from '@common/SvgComponent';

export default function useIconCopyClick() {
  const [clickedIconName, setClickedIconName] = useState('');

  const getClosestIconBox = useCallback((el: HTMLElement) => {
    return el.closest<Element>('[data-role="icon-box"]');
  }, []);

  const copyClickedIconName: MouseEventHandler<HTMLElement> = useCallback(
    async e => {
      const target = e.target as HTMLElement;
      const closestIconBox = getClosestIconBox(target);

      if (closestIconBox instanceof HTMLElement) {
        const { componentName } = closestIconBox.dataset;
        if (!componentName) return;

        setClickedIconName(componentName);
        const code = `<${componentName} />`;
        await navigator.clipboard.writeText(code);

        toast(
          <>
            <span className={styles['toast__check']}>✓</span> Copied{' '}
            <code className={styles['toast__code']}>
              <span className={styles['toast__code__bracket']}>{`<`}</span>
              {componentName}
              <span className={styles['toast__code__bracket']}>{` />`}</span>
            </code>
          </>,
          {
            position: toast.POSITION.TOP_CENTER,
            className: styles['toast'],
          },
        );
      }
    },
    [],
  );

  useEffect(() => {
    const resetClickedIcon: EventListenerOrEventListenerObject = e => {
      const target = e.target as HTMLElement;
      const closestIconBox = getClosestIconBox(target);
      if (closestIconBox) return;

      setClickedIconName('');
    };

    window.addEventListener('click', resetClickedIcon, false);
    return () => {
      window.removeEventListener('click', resetClickedIcon, false);
    };
  }, []);

  return {
    clickedIconName,
    copyClickedIconName,
  };
}
