import { ChangeEventHandler, FC, useCallback, useMemo, useState } from 'react';
import Fuse from 'fuse.js';

const fuseOptions = {
  keys: ['name'],
};

export default function useComponentNameSearch<T extends FC>(
  components: T[],
) {
  const [useFuse, setUseFuse] = useState<boolean>(false);
  const [searchWord, setSearchWord] = useState<string>('');
  const onChangeSearchWord: ChangeEventHandler<HTMLInputElement> = useCallback(
    e => {
      setSearchWord(e.target.value);
    },
    [],
  );

  const fuse = useMemo(() => new Fuse(components, fuseOptions), []);

  const filteredComponents = useMemo(() => {
    if (searchWord === '') {
      return components;
    }

    if (useFuse) {
      return fuse.search(searchWord).map(v => v.item);
    }

    return components.filter(v =>
      (v.displayName || v.name).toLowerCase().includes(searchWord.toLowerCase()),
    );
  }, [useFuse, searchWord]);

  return {
    searchWord,
    onChangeSearchWord,
    filteredComponents,
    setUseFuse,
  };
}
