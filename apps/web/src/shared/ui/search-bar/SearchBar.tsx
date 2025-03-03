import { ActionIcon, Input } from '@mantine/core';
import { IconPlaystationX, IconSearch } from '@tabler/icons-react';
import { useCallback, useEffect, useState } from 'react';

interface TextSearchFieldProps {
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  value: string | undefined;
}

export const SearchBar = ({
  onChange,
  placeholder,
  value,
}: TextSearchFieldProps) => {
  const [text, setText] = useState<string | null>('');
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e?.target?.value);
      onChange(e?.target?.value);
    },
    [setText, onChange],
  );

  useEffect(() => {
    setText(value ?? '');
  }, [value, setText]);

  return (
    <Input
      miw={300}
      maw={500}
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
        onMouseDown: () => onChange(''),
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
    />
  );
};
