import { results } from '../data/results'

export function calculateStandings(groups) {
  const updatedGroups = JSON.parse(JSON.stringify(groups))

  results.forEach((result) => {
    updatedGroups.forEach((group) => {
      const homeTeam = group.teams.find(
        (team) => team.name === result.home
      )

      const awayTeam = group.teams.find(
        (team) => team.name === result.away
      )

      if (!homeTeam || !awayTeam) return

      homeTeam.played++
      awayTeam.played++

      homeTeam.gf += result.homeGoals
      homeTeam.gc += result.awayGoals

      awayTeam.gf += result.awayGoals
      awayTeam.gc += result.homeGoals

      homeTeam.diff = homeTeam.gf - homeTeam.gc
      awayTeam.diff = awayTeam.gf - awayTeam.gc

      if (result.homeGoals > result.awayGoals) {
        homeTeam.won++
        awayTeam.lost++
        homeTeam.points += 3
      }

      else if (result.homeGoals < result.awayGoals) {
        awayTeam.won++
        homeTeam.lost++
        awayTeam.points += 3
      }

      else {
        homeTeam.draw++
        awayTeam.draw++
        homeTeam.points++
        awayTeam.points++
      }
    })
  })

  updatedGroups.forEach((group) => {
    group.teams.sort((a, b) => {
      if (b.points !== a.points)
        return b.points - a.points

      return b.diff - a.diff
    })
  })

  return updatedGroups
}