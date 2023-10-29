import * as React from 'react';

export function Card({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <a
      className={className}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel='noopener noreferrer'
      target='_blank'>
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}

export const lala: number[] = [11, 22, 33];
// export const lala: number[][] = [
//   [1, 2],
//   [3, 4],
// ];
