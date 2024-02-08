// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retriveData, retriveDataByID } from '@/lib/firebase/service'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.query.product![1]){
    const data = await retriveDataByID('products', req.query.product![1])
    res.status(200).json({ data: data })
  } else {
    const data = await retriveData('products')
    res.status(200).json({ data: data })
  }
}
