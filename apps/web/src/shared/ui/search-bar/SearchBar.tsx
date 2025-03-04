import { ActionIcon, Input } from '@mantine/core';
import { IconPlaystationX, IconSearch } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import classes from './search-bar.module.css';
import { useDebounce } from 'use-debounce';

interface TextSearchFieldProps {
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  value: string | undefined;
}

export const SearchBar = ({
  onChange,
  placeholder,
  value,
  ...rest
}: TextSearchFieldProps) => {
  const [text, setText] = useState<string>(value || '');
  const [debouncedText] = useDebounce(text, 500);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (debouncedText !== value) {
      onChange(debouncedText);
    }
  }, [debouncedText, onChange, value]);

  return (
    <Input
      w="100%"
      radius="md"
      onChange={handleOnChange}
      value={text ?? ''}
      leftSection={
        <ActionIcon size="sm" color="gray" variant="transparent">
          <IconSearch />
        </ActionIcon>
      }
      rightSectionPointerEvents="all"
      rightSectionProps={{
        onMouseDown: () => setText(''),
      }}
      rightSection={
        value && (
          <ActionIcon size="sm" color="gray" variant="transparent">
            <IconPlaystationX />
          </ActionIcon>
        )
      }
      placeholder={placeholder}
      autoFocus
      classNames={{
        input: classes.input,
        section: classes.section,
      }}
      {...rest}
    />
  );
};
