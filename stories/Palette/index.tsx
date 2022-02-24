import useComponentNameSearch from '@stories/Palette/useComponentNameSearch';
import IconBox from '@stories/Palette/IconBox';
import 'react-toastify/dist/ReactToastify.css';
import useIconCopyClick from '@stories/Palette/useIconCopyClick';
import {
  IconGallery,
  SearchInput,
  StyledPalette,
  ToastContainer,
  toastGlobalStyles,
} from '@stories/Palette/styles';
import { Global } from '@emotion/react';

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

  const { clickedIconName, copyClickedIconName } = useIconCopyClick({
    selector: '[data-role="icon-box"]',
    iconComponentNameDataSetKey: 'componentName',
  });

  return (
    <>
      <Global styles={toastGlobalStyles} />
      <StyledPalette>
        {/*<header>*/}
        {/*  <h1>Querypie Icons</h1>*/}
        {/*</header>*/}
        {/*<section>*/}
        {/*  <header>*/}
        {/*    <h2>Import</h2>*/}
        {/*  </header>*/}
        {/*  <ImportCodeBox />*/}
        {/*</section>*/}
        <section>
          <header>
            <h2>{pageTitle ?? 'Icons'}</h2>
            <SearchInput
              value={searchWord}
              onChange={onChangeSearchWord}
              placeholder="Search icons here, click icon to copy code ..."
              autoComplete="false"
            />
          </header>
          <IconGallery onClick={copyClickedIconName}>
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
          </IconGallery>
        </section>
      </StyledPalette>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Palette;
