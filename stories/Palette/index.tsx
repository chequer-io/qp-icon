import type { CSSProperties } from 'react';
import useComponentNameSearch from '@stories/Palette/useComponentNameSearch';
import styles from '@stories/Palette/styles.module.css';
import IconBox from '@stories/Palette/IconBox';

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

  return (
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

      <section className={styles['icon-gallery']}>
        {filteredIcons.map(Icon => (
          <IconBox
            key={Icon.name}
            Icon={Icon}
            backgroundColor={backgroundColor}
            isExpand={isExpand}
          />
        ))}
      </section>
    </main>
  );
};

export default Palette;
