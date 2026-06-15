// src/services/api.js

import { matches } from '../data/matches'
import { groups } from '../data/groups'

export async function getMatches() {
  return matches
}

export async function getGroups() {
  return groups
}

export async function getNextMatch() {
  const allMatches = await getMatches()

  const now = new Date()

  const nextMatch =
    allMatches.find(
      (match) =>
        match.datetime &&
        new Date(match.datetime) > now
    ) || allMatches[0]

  return nextMatch
}