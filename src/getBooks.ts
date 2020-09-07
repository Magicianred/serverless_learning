import { NowRequest, NowResponse } from '@vercel/node'

async function getBooks(req: NowRequest, res: NowResponse) {
  const list = [
    { book: 'asuhduahsd' },
    { book: 'asuhduahsd2' },
    { book: 'asuhduahsd3' },
    { book: 'asuhduahsd4' },
  ]

  res.status(200).json(list)
}

export default getBooks