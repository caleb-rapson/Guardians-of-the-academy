import { expect, test, vi, describe} from 'vitest'
import { readFile } from 'node:fs/promises'


import { getThreads } from '../server/utils.js'

vi.mock('node:fs/promises')

vi.mocked(readFile).mockResolvedValue(
  JSON.stringify({
    threads: [
      {
        id: 1,
        title: 'The moon has a dark side, CMV.',
        likes: 0,
        comments: [
          {
            name: 'Machine',
            date: '1975-08-19T23:15:30.000Z',
            message:
              "That's what they don't want you to know, so welcome to the machine.",
          },
          {
            name: 'Jack',
            date: '1975-08-19T23:15:30.000Z',
            message:
              "Doesn't matter either way. Just tryin' to get my hands on your cash.",
          },
          {
            name: 'Clearwater Guy',
            date: '1975-08-19T23:15:30.000Z',
            message: 'Well, there certainly is a dark moon rising.....',
          },
        ],
      },
      {
        id: 2,
        title: 'Do aliens really exist?',
        likes: 0,
        comments: [
          {
            name: 'Mousy-haired Girl',
            date: '1975-08-19T23:15:30.000Z',
            message: 'Is there life on mars...?',
          },
          {
            name: 'Ziggy Stardust',
            date: '1975-08-19T23:15:30.000Z',
            message: "It's a freaky moon age daydream, oh yeah.",
          },
        ],
      },
    ],
  })
)

describe('Reading data', () => {
  test('getThreads should initialize a read operation', async () => {
    await getThreads()
    expect(readFile).toHaveBeenCalledOnce()
  })

  test('getThreads should return an object containing all threads', async () => {
    const threads = await getThreads()

    expect(threads.threads.length).toBe(2)
  })
})

// read the data
// clone and add the comment to arr
// JSON stringify
// rewrite the file (write file)

// describe('Writing data', () => {

// })