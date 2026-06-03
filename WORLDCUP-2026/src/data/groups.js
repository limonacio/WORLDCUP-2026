const createTeam = (name, code) => ({
  name,
  code,
  points: 0,
  played: 0,
  won: 0,
  draw: 0,
  lost: 0,
  gf: 0,
  gc: 0,
  diff: 0,
})

export const groups = [
  {
    group: 'A',
    teams: [
      createTeam('Mexico', 'mx'),
      createTeam('South Africa', 'za'),
      createTeam('South Korea', 'kr'),
      createTeam('Czech Republic', 'cz'),
    ],
  },

  {
    group: 'B',
    teams: [
      createTeam('Canada', 'ca'),
      createTeam('Bosnia', 'ba'),
      createTeam('Qatar', 'qa'),
      createTeam('Switzerland', 'ch'),
    ],
  },

  {
    group: 'C',
    teams: [
      createTeam('Brazil', 'br'),
      createTeam('Morocco', 'ma'),
      createTeam('Haiti', 'ht'),
      createTeam('Scotland', 'gb-sct'),
    ],
  },

  {
    group: 'D',
    teams: [
      createTeam('United States', 'us'),
      createTeam('Paraguay', 'py'),
      createTeam('Australia', 'au'),
      createTeam('Turkey', 'tr'),
    ],
  },

  {
    group: 'E',
    teams: [
      createTeam('Germany', 'de'),
      createTeam('Curacao', 'cw'),
      createTeam('Ivory Coast', 'ci'),
      createTeam('Ecuador', 'ec'),
    ],
  },

  {
    group: 'F',
    teams: [
      createTeam('Netherlands', 'nl'),
      createTeam('Japan', 'jp'),
      createTeam('Sweden', 'se'),
      createTeam('Tunisia', 'tn'),
    ],
  },

  {
    group: 'G',
    teams: [
      createTeam('Belgium', 'be'),
      createTeam('Egypt', 'eg'),
      createTeam('Iran', 'ir'),
      createTeam('New Zealand', 'nz'),
    ],
  },

  {
    group: 'H',
    teams: [
      createTeam('Spain', 'es'),
      createTeam('Cape Verde', 'cv'),
      createTeam('Saudi Arabia', 'sa'),
      createTeam('Uruguay', 'uy'),
    ],
  },

  {
    group: 'I',
    teams: [
      createTeam('France', 'fr'),
      createTeam('Senegal', 'sn'),
      createTeam('Iraq', 'iq'),
      createTeam('Norway', 'no'),
    ],
  },

  {
    group: 'J',
    teams: [
      createTeam('Argentina', 'ar'),
      createTeam('Algeria', 'dz'),
      createTeam('Austria', 'at'),
      createTeam('Jordan', 'jo'),
    ],
  },

  {
    group: 'K',
    teams: [
      createTeam('Portugal', 'pt'),
      createTeam('DR Congo', 'cd'),
      createTeam('Uzbekistan', 'uz'),
      createTeam('Colombia', 'co'),
    ],
  },

  {
    group: 'L',
    teams: [
      createTeam('England', 'gb-eng'),
      createTeam('Croatia', 'hr'),
      createTeam('Ghana', 'gh'),
      createTeam('Panama', 'pa'),
    ],
  },
]