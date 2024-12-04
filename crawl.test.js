const { normalizeURL} = require('./crawl.js')
const { test, expect} = require('@jest/globals')

test('normalizeURL STRIP Protocol', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})


test('normalizeURL stripe trainling slash ', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL Capitals', () => {
    const input = 'https://BLOG.boot.dev/path'
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})


test('normalizeURL stripe http', () => {
    const input = 'http://BLOG.boot.dev/path'
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})