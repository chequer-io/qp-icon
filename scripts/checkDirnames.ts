import tsconfig from '@/tsconfig.json';

export default function checkDirnames(...dirnames: string[]) {
  const tsconfigPaths = Object.keys(tsconfig.compilerOptions.paths).map(v =>
    v.replace(/(^@|\/\*$)/g, ''),
  );

  dirnames.forEach(v => {
    if (!tsconfigPaths.includes(v)) {
      throw new Error(
        `Directory name '${v}' is invalid: directory name must be included in the format '@{{dirname}}/*' within tsconfig paths.`,
      );
    }
  });
}
