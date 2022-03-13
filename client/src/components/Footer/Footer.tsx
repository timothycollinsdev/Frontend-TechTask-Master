import React from 'react';

interface FooterProps {
  text: string;
}

export const Footer: React.FC<FooterProps> = React.memo(function Footer({ text }: FooterProps) {
  return <div className={'footer'}>{text}</div>;
});
