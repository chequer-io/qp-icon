import { FC, HTMLAttributes, memo } from 'react';
import {
  IconBoxContent,
  IconBoxLabel,
  IconsContainer,
  StyledIconBox,
} from '@/stories/Palette/styles';

type Size = CustomizedSVGComponentProps['size'];
const iconSizes: NotUndefined<Size>[] = ['S', 'M', 'L', 'XL'];

interface IconBoxProps extends HTMLAttributes<HTMLElement> {
  Icon: CustomizedSVGComponent;
  isExpand: boolean;
  isClicked: boolean;
}
const IconBox: FC<IconBoxProps> = ({ Icon, isClicked, isExpand, ...rest }) => {
  const label = Icon.name;

  return (
    <StyledIconBox isClicked={isClicked} {...rest}>
      <IconBoxContent>
        {!isExpand ? (
          <Icon size="XL" />
        ) : (
          <>
            <IconsContainer>
              {iconSizes.map(size => (
                <section title={size} key={`${label}--icon-${size}`}>
                  <Icon size={size} />
                </section>
              ))}
            </IconsContainer>
            {/*<article>*/}
            {/*  {iconSizes.map(size => (*/}
            {/*    <IconText*/}
            {/*      title={size}*/}
            {/*      key={`${label}--icon-text-${size}`}*/}
            {/*      style={{ fontSize: sizeMap[size] }}*/}
            {/*    >*/}
            {/*      <Icon size={size} /> {size} Text*/}
            {/*    </IconText>*/}
            {/*  ))}*/}
            {/*</article>*/}
          </>
        )}
      </IconBoxContent>

      <IconBoxLabel>{label}</IconBoxLabel>
    </StyledIconBox>
  );
};

export default memo(IconBox);
