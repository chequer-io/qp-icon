import { ChangeEventHandler, FC, useCallback, useMemo, useState } from 'react';

export default function useComponentNameSearch<T extends FC>(components: T[]) {
  const [searchWord, setSearchWord] = useState<string>('');
  const onChangeSearchWord: ChangeEventHandler<HTMLInputElement> = useCallback(
    e => {
      setSearchWord(e.target.value);
    },
    [],
  );

  const filteredComponents = useMemo(() => {
    if (searchWord === '') return components;
    return components.filter(v => {
      return v.name.toLowerCase().includes(searchWord.toLowerCase());
    });
  }, [searchWord]);

  return {
    searchWord,
    onChangeSearchWord,
    filteredComponents,
  };
}
