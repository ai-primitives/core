# mdxdb

## ToDo

- [x] File-based `list`
- [x] File-based `get`
- [x] File-based `set`
- [x] File-based `delete`
- [ ] Import \*_/_.mdx files
- [ ] Export globbed files as MDXDocument[]
- [ ] Use mdx.evaluate() to get exports
- [ ] Use mdx.compile() to get code

## Config

```typescript
// mdxdb.config.ts
import type { Config } from 'mdxdb'

const config: Config = {
  provider: {
    type: 'file',
    files: '**/*.mdx',
  },
}
```

## Typescript & Schema Validation

```typescript
// mdxdb.config.ts
import type { Config } from 'mdxdb'
import { z } from 'zod'

const config: Config = {
  provider: 'file'
  schema: {
    posts: z.object({
      title: z.string(),
      content: z.string(),
    }),
  },
}
```

## Providers

- [ ] File System
- [ ] Payload
- [ ] Postgres
- [ ] Sqlite
- [ ] MongoDB
- [ ] Clickhouse
- [ ] Github

## Runtime

- [ ] NodeJS
- [ ] Bun
- [ ] Deno
- [ ] Cloudflare Workers
