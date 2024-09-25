import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { describe, expect, test } from 'vitest'

import { compileCreateServerFnOutput } from '../../src/compilers'

async function getFilenames() {
  return await readdir(path.resolve(import.meta.dirname, './test-files'))
}

describe('createServerFn compiles correctly', async () => {
  const filenames = await getFilenames()

  test.each(filenames)('should handle "%s"', async (filename) => {
    const file = await readFile(
      path.resolve(import.meta.dirname, `./test-files/${filename}`),
    )
    const code = file.toString()

    const compiledResult = compileCreateServerFnOutput({
      code,
      root: './test-files',
      filename,
    })

    await expect(compiledResult.code).toMatchFileSnapshot(
      `./snapshots/${filename}`,
    )
  })

  test('should error if createServerFn is called without a fn property', () => {
    expect(() => {
      compileCreateServerFnOutput({
        code: `
        import { createServerFn } from '@tanstack/start'
        createServerFn({})`,
        root: './test-files',
        filename: 'no-fn.ts',
      })
    }).toThrowErrorMatchingSnapshot()
  })
})