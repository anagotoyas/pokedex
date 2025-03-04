import {
  Pagination as MantinePagination,
  PaginationProps as PaginationPropsMantine,
  Select,
} from '@mantine/core';
import classes from './pagination.module.css';

interface PaginationProps extends PaginationPropsMantine {
  limit?: number;
  setLimit?: (limit: number) => void;
}

export const Pagination = ({
  limit = 100,
  total,
  value,
  setLimit,
  ...rest
}: PaginationProps) => {
  const limits = [
    { label: '10 / page', value: '10' },
    { label: '20 / page', value: '20' },
    { label: '50 / page', value: '50' },
    { label: '100 / page', value: '100' },
  ];

  const handleChangeSelect = (e: string | null) => setLimit?.(Number(e));

  return (
    <div className={classes['pagination-container']}>
      <MantinePagination
        total={Math.ceil(total / limit)}
        value={value}
        classNames={{
          control: classes.control,
          root: classes.root,
        }}
        {...rest}
      />
      {total > 0 && (
        <Select
          withCheckIcon={false}
          classNames={{
            root: classes['root-select'],
            wrapper: classes['root-select__wrapper'],
            input: classes['root-select__wrapper__input'],
            section: classes['root-select__wrapper__section'],
            dropdown: classes.dropdown,
            option: classes.dropdown__option,
          }}
          onChange={handleChangeSelect}
          allowDeselect={false}
          value={limit.toString()}
          comboboxProps={{
            position: 'top',
            middlewares: { flip: false, shift: false },
          }}
          data={limits}
        />
      )}
    </div>
  );
};
