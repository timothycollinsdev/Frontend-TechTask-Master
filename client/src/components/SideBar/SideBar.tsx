import React from 'react';
import { Category } from 'types';

interface SideBarProps {
  categories: Category[];
}

export const SideBar: React.FC<SideBarProps> = React.memo(function SideBar({
  categories,
}: SideBarProps) {
  return (
    <>
      <div className={'sidebar'}>
        <h3 className="sidebar-title">Kategorien</h3>
        {categories?.length && (
          <ul>
            {categories?.[0]?.childrenCategories?.map(({ name, urlPath }, index: number) => (
              <li key={`${index} + '-' + ${name}`}>
                <a href={`/${urlPath}`}>{name}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
});
