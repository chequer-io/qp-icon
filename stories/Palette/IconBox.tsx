import { FC, HTMLAttributes, memo } from 'react';
import {
  CustomizedSVGComponent,
  CustomizedSVGComponentProps,
  NotUndefined,
} from '../../src/typings';
import {
  IconBoxContent,
  IconBoxLabel,
  IconsContainer,
  StyledIconBox,
} from './styles';

type Size = CustomizedSVGComponentProps['size'];
const iconSizes: NotUndefined<Size>[] = ['S', 'M', 'L', 'XL'];

interface IconBoxProps extends HTMLAttributes<HTMLElement> {
  Icon: CustomizedSVGComponent;
  isExpand: boolean;
  isClicked: boolean;
  color: string;
  backgroundColor: string;
}
const IconBox: FC<IconBoxProps> = ({
  Icon,
  isClicked,
  isExpand,
  color,
  backgroundColor,
  ...rest
}) => {
  const label = Icon.name;

  return (
    <StyledIconBox isClicked={isClicked} {...rest}>
      <IconBoxContent color={color} backgroundColor={backgroundColor}>
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
