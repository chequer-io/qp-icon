import useComponentNameSearch from './useComponentNameSearch';
import IconBox from './IconBox';
import 'react-toastify/dist/ReactToastify.css';
import useIconCopyClick from './useIconCopyClick';
import {
  IconGallery,
  SearchInput,
  StyledPalette,
  ToastContainer,
  toastGlobalStyles,
  Toggle,
  ToggleWrapper,
} from './styles';
import { Global } from '@emotion/react';
import { CustomizedSVGComponent } from '../../src/typings';
import ImportCodeBox from './ImportCodeBox';
import { useCallback, useState } from 'react';

interface PaletteProps {
  icons: CustomizedSVGComponent[];
  pageTitle?: string;
  iconSize: number;
  color: string;
  backgroundColor: string;
}
export const Palette = ({
  icons,
  pageTitle,
  iconSize,
  color,
  backgroundColor,
}: PaletteProps) => {
  const {
    searchWord,
    onChangeSearchWord,
    filteredComponents: filteredIcons,
    setUseFuse,
  } = useComponentNameSearch<CustomizedSVGComponent>(icons);

  const { clickedIconName, copyClickedIconName } = useIconCopyClick({
    selector: '[data-role="icon-box"]',
    iconComponentNameDataSetKey: 'componentName',
  });

  const handleChangeFuse = useCallback(() => {
    setUseFuse(prev => !prev);
  }, []);

  return (
    <>
      <Global styles={toastGlobalStyles} />
      <StyledPalette>
        <header>
          <h1>Querypie Icons</h1>
        </header>
        <section>
          <header>
            <h2>Import</h2>
          </header>
          <ImportCodeBox />
        </section>
        <section>
          <header>
            <h2>{pageTitle ?? 'Icons'}</h2>
            <SearchInput
              value={searchWord}
              onChange={onChangeSearchWord}
              placeholder="Search icons here, click icon to copy code ..."
              autoComplete="false"
            />
            <ToggleWrapper>
              <span>Fuse </span>
              <Toggle>
                <input
                  type="checkbox"
                  id="toggle"
                  onChange={handleChangeFuse}
                />
                <label htmlFor="toggle" />
              </Toggle>
            </ToggleWrapper>
          </header>
          <IconGallery onClick={copyClickedIconName}>
            {filteredIcons.map(Icon => (
              <IconBox
                key={Icon.name}
                data-role="icon-box"
                data-component-name={Icon.name}
                isClicked={clickedIconName === Icon.name}
                Icon={Icon}
                iconSize={iconSize}
                color={color}
                backgroundColor={backgroundColor}
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
