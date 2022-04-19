import { FC, HTMLAttributes, memo } from 'react';
import { CustomizedSVGComponent } from '../../src/typings';
import { IconBoxContent, IconBoxLabel, StyledIconBox } from './styles';

interface IconBoxProps extends HTMLAttributes<HTMLElement> {
  Icon: CustomizedSVGComponent;
  isClicked: boolean;
  iconSize: number;
  color: string;
  backgroundColor: string;
}
const IconBox: FC<IconBoxProps> = ({
  Icon,
  isClicked,
  iconSize,
  color,
  backgroundColor,
  ...rest
}) => {
  const label = Icon.name;

  return (
    <StyledIconBox isClicked={isClicked} {...rest}>
      <IconBoxContent color={color} backgroundColor={backgroundColor}>
        <Icon fontSize={iconSize} />
      </IconBoxContent>

      <IconBoxLabel>{label}</IconBoxLabel>
    </StyledIconBox>
  );
};

export default memo(IconBox);
