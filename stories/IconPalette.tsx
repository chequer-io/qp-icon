import React from 'react';
import './icon-palette.css';

interface IconPaletteProps {
  backgroundColor?: string;
  files?: { filename: string }[];
}

/**
 * Primary UI component for user interaction
 */
export const IconPalette = ({
  files,
  backgroundColor,
  ...props
}: IconPaletteProps) => {
  return (
    <div
      className="icon-palette"
      style={{
        backgroundColor,
      }}
    >
      {files?.map(file => (
        <>{file.filename}</>
      ))}
    </div>
  );
};
