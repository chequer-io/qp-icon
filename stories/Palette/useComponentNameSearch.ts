import { ChangeEventHandler, FC, useCallback, useMemo, useState } from 'react';
import Fuse from 'fuse.js';

const fuseOptions = {
  keys: ['name'],
};

export default function useComponentNameSearch<T extends FC>(components: T[]) {
  const [searchWord, setSearchWord] = useState<string>('');
  const onChangeSearchWord: ChangeEventHandler<HTMLInputElement> = useCallback(
    e => {
      setSearchWord(e.target.value);
    },
    [],
  );

  const fuse = useMemo(() => new Fuse(components, fuseOptions), []);

  const filteredComponents = useMemo(() => {
    if (searchWord === '') return components;
    return fuse.search(searchWord).map(v => v.item);
  }, [searchWord]);

  return {
    searchWord,
    onChangeSearchWord,
    filteredComponents,
  };
}
