import { useEffect, useState } from 'react'
import { CardGames } from '../components/GridCards/types'
import { api } from '../lib/api'

const getGames = async () => {
  try {
    const { data, status } = await api.get('games')
    if (status === 200 && data.length > 0) {
      return data
    }
    return
  } catch (err) {
    console.error(`Error loading requested listing ${err}`)
    return err
  }
}

export const useGames = () => {
  const [games, setGames] = useState<CardGames[]>([])

  useEffect(() => {
    getGames().then((response) => setGames(response))
  }, [])

  return games
}
