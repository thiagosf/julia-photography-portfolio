import React from 'react'

export interface FilterEntity {
  label: string;
  value: string;
}

export interface Props extends FilterEntity {
  actived?: boolean;
  onClick: (value: string) => void;
}

export const Filter: React.FC<Props> = function ({ label, value, actived, onClick }) {
  const handleClick = () => {
    onClick(value)
  }
  const classes = [
    'py-1',
    'md:py-2',
    'cursor-pointer',
    'hover:underline',
    'text-xs',
    'sm:text-sm',
  ]
  if (actived) {
    classes.push('underline opacity-30')
  }
  return (
    <div
      className={classes.join(' ')}
      onClick={handleClick}
    >
      #{label}
    </div>
  )
}
