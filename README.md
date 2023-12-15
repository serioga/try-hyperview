# minimal Hyperview setup

## Development

### Local configuration

Copy `.env.local.template` to `.env.local` and setup it.

### Start development

```sh
yarn dev
```

This command starts processes:

- Hyperview app backend server with HXML templates
- Expo development server

### Reset cache

If `.env.local` changed then run command with `--clear` option.

```sh
yarn dev --clear
```
