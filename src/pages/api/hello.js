// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { api } from '../../services/api'
import { makeResponse } from '../../utils/response-formatter'

export default async function handler(_, res) {
  const { data: films } = await api.get('films')

  res.status(200).json(makeResponse({ data: films }))
}
