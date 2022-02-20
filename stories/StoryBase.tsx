import type { ComponentStory, ComponentMeta } from '@storybook/react';
import styles from './styles.module.css';
import { CSSProperties } from 'react';
import useComponentNameSearch from '@stories/useComponentNameSearch';
import IconBox from '@stories/IconBox';

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

export const paletteFactory = (): ComponentStory<typeof Palette> => args =>
  <Palette {...args} />;

const defaultMeta: ComponentMeta<typeof Palette> = {
  title: `querypie-icon`,
  component: Palette,
  argTypes: {
    icons: {
      table: {
        disable: true,
      },
    },
    isExpand: {
      name: '확장',
      description: `true로 설정 시 모든 사이즈와 이름 표시, false일 경우 "1em" 사이즈 아이콘만 표시`,
      type: 'boolean',
      control: 'boolean',
      defaultValue: false,
    },
    backgroundColor: {
      name: '배경 색상',
      description: '아이콘 배경 색상 변경',
      type: 'string',
      control: 'color',
      defaultValue: '#ffffff',
    },
  },
};
export const getStoryBase = (
  appendMeta: ComponentMeta<typeof Palette> = {},
) => ({
  ...defaultMeta,
  appendMeta,
});
