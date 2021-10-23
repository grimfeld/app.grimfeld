import type { NextPage } from 'next'
import { Client } from '@notionhq/client'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const notion = new Client({
    auth: 'secret_KcAy8nciQ3iRNdcYazuDIY909nhj938hXDWjFNyF4hm'
  })

  useEffect(() => {
    notion.databases
      .retrieve({ database_id: '5bd1af4d1b404006864f372d34baa171' })
      .then(res => console.log(res))
  })
  // (async () => {
  //   const databaseId = '668d797c-76fa-4934-9b05-ad288df2d136';
  //   const response = await notion.databases.retrieve({ database_id: databaseId });
  //   console.log(response);
  // })();

  return <></>
}

export default Home
