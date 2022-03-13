import React from 'react';
import { SearchBar } from '../SearchBar';

interface HeaderProps {
  title: string;
  searchValue: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Header: React.FC<HeaderProps> = React.memo(function Header({
  title,
  searchValue,
  onChangeHandler,
}: HeaderProps) {
  return (
    <div className={'header'}>
      <strong className="header-text">{title}</strong>
      <SearchBar name="search" value={searchValue} onChange={onChangeHandler} />
    </div>
  );
});
