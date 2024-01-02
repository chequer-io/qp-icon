
# How to Update

Only developers in the QueryPie Frontend Team can update this QueryPie Icon repository.

This document provides instructions on how to update the icons.

## 1. Download New Resources

In QueryPie, icons are managed on Figma. Before starting development, access [this Figma page](https://www.figma.com/file/9UskG2nA4dI9fFHpmhcwFG/QueryPie-Icon?type=design&node-id=0%3A1&mode=design&t=PfTKr0f3oI4UjCwA-1).

Once ready, export the required icon SVG files from the Figma page.

## 2. Move the Resources Under `icons`

The exported resources serve as the base for generated React Components. The generator will read the `icons` directory, so move the resources there.

## 3. Check New Icons

Run Storybook to review the changes.

```bash
npm run storybook
```

## 4. Edit the Version in `package.json`

After reviewing, prepare to deploy a new version. Edit the version field in `package.json`.

The repository follows [SemVer versioning](https://semver.org/). To update the version, increment the patch value by 1 in the previous version, for example, changing from `0.0.15` to `0.0.16`.

Then, install to apply the new version.

```bash
npm install
```

## 5. Deploy New Version

Now you are ready to deploy the new version of QueryPie Icon.

Run the following npm script.

```bash
npm run deploy
```

If done without problems, deploy the new Storybook page using GitHub Pages and the new `qp-icon` on the npm registry.

## 6. Request a Review

Commit all changes and create a new pull request.












