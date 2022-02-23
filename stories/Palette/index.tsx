import { useCallback, CSSProperties, MouseEventHandler } from 'react';
import useComponentNameSearch from '@stories/Palette/useComponentNameSearch';
import styles from '@stories/Palette/styles.module.css';
import IconBox from '@stories/Palette/IconBox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface PaletteProps {
  icons: CustomizedSVGComponent[];
  backgroundColor: CSSProperties['backgroundColor'];
  isExpand: boolean;
}
export const Palette = ({ icons, backgroundColor, isExpand }: PaletteProps) => {
  const {
    searchWord,
    onChangeSearchWord,
    filteredComponents: filteredIcons,
  } = useComponentNameSearch<CustomizedSVGComponent>(icons);

  const copyClickedIcon: MouseEventHandler<HTMLElement> = useCallback(
    async e => {
      const target = e.target as HTMLElement;
      const closestIconBox = target.closest('[data-role="icon-box"]');

      if (closestIconBox instanceof HTMLElement) {
        const { componentName } = closestIconBox.dataset;
        if (!componentName) return;

        const code = `<${componentName} />`;
        await navigator.clipboard.writeText(code);

        toast(
          <p>
            Copied{' '}
            <code>
              <span>{`<`}</span>
              {componentName} <span>{`/>`}</span>
            </code>
          </p>,
          {
            position: toast.POSITION.TOP_CENTER,
            className: styles['toast'],
          },
        );
      }
    },
    [],
  );

  return (
    <>
      <main className={styles.Palette}>
        <header className={styles['Palette__header']}>
          <input
            value={searchWord}
            onChange={onChangeSearchWord}
            placeholder="아이콘 검색..."
            autoComplete="false"
            className={styles['Palette__header__search-input']}
          />
        </header>

        <section className={styles['icon-gallery']} onClick={copyClickedIcon}>
          {filteredIcons.map(Icon => (
            <IconBox
              key={Icon.name}
              data-role="icon-box"
              data-component-name={Icon.name}
              Icon={Icon}
              backgroundColor={backgroundColor}
              isExpand={isExpand}
            />
          ))}
        </section>
      </main>
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default Palette;
