// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { api } from '../../services/api'
import { Film, IResponse } from '../../types'
import { makeResponse } from '../../utils/response-formatter'

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  const { data: films } = await api.get<Array<Film>>('films')

  res.status(200).json(makeResponse({ data: films }))
}
