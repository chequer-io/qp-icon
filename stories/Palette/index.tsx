import useComponentNameSearch from '@stories/Palette/useComponentNameSearch';
import styles from '@stories/Palette/styles.module.css';
import IconBox from '@stories/Palette/IconBox';
import 'react-toastify/dist/ReactToastify.css';
import useIconCopyClick from '@stories/Palette/useIconCopyClick';
import { ToastContainer } from 'react-toastify';
// import ImportCodeBox from '@stories/Palette/ImportCodeBox';

interface PaletteProps {
  icons: CustomizedSVGComponent[];
  isExpand: boolean;
  pageTitle?: string;
}
export const Palette = ({ icons, isExpand, pageTitle }: PaletteProps) => {
  const {
    searchWord,
    onChangeSearchWord,
    filteredComponents: filteredIcons,
  } = useComponentNameSearch<CustomizedSVGComponent>(icons);

  const { clickedIconName, copyClickedIconName } = useIconCopyClick();

  return (
    <>
      <main className={styles.Palette}>
        {/*<header className={styles['Palette__header']}>*/}
        {/*  <h1>Querypie Icons</h1>*/}
        {/*</header>*/}
        {/*<section className={styles['Palette__section']}>*/}
        {/*  <header className={styles['Palette__section__header']}>*/}
        {/*    <h2>Import</h2>*/}
        {/*  </header>*/}
        {/*  <ImportCodeBox />*/}
        {/*</section>*/}
        <section className={styles['Palette__section']}>
          <header className={styles['Palette__section__header']}>
            <h2>{pageTitle ?? 'Icons'}</h2>
            <input
              value={searchWord}
              onChange={onChangeSearchWord}
              placeholder="Search icons here, click icon to copy code ..."
              autoComplete="false"
              className={styles['Palette__search-input']}
            />
          </header>
          <section
            className={styles['icon-gallery']}
            onClick={copyClickedIconName}
          >
            {filteredIcons.map(Icon => (
              <IconBox
                key={Icon.name}
                data-role="icon-box"
                data-component-name={Icon.name}
                isClicked={clickedIconName === Icon.name}
                Icon={Icon}
                isExpand={isExpand}
              />
            ))}
          </section>
        </section>
      </main>
      <ToastContainer autoClose={3000} className={styles['toast-container']} />
    </>
  );
};

export default Palette;
