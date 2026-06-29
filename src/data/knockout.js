// ── ROUND OF 32 — LEFT BRACKET ─────────────────────────────────────────────
// bracketLeft[0..7] → 4 pairs top-to-bottom
// Confirmed = match already played

export const bracketLeft = [

  // ── PAIR 1 ───────────────────────────────────────────────────────────────
  {
    id: 'M73',
    team1: 'South Africa', flag1: 'za',
    team2: 'Canada',       flag2: 'ca',
    date: '28 Jun', kickoff: '8:00 PM', kickoffArgentina: '9:00 PM',
    datetime: '2026-06-28T21:00:00',
    venue: 'Los Angeles',
    confirmed: true,
    score1: 0, score2: 1,
    winner: 'Canada',
  },
  {
    id: 'M74',
    team1: 'Germany',  flag1: 'de',
    team2: 'Paraguay', flag2: 'py',
    date: '29 Jun', kickoff: '6:00 PM', kickoffArgentina: '7:00 PM',
    datetime: '2026-06-29T19:00:00',
    venue: 'Boston',
    confirmed: false,
  },

  // ── PAIR 2 ───────────────────────────────────────────────────────────────
  {
    id: 'M75',
    team1: 'Netherlands', flag1: 'nl',
    team2: 'Morocco',     flag2: 'ma',
    date: '30 Jun', kickoff: '2:00 AM', kickoffArgentina: '3:00 AM',
    datetime: '2026-06-30T03:00:00',
    venue: 'Monterrey',
    confirmed: false,
  },
  {
    id: 'M76',
    team1: 'Brazil', flag1: 'br',
    team2: 'Japan',  flag2: 'jp',
    date: '29 Jun', kickoff: '3:00 PM', kickoffArgentina: '4:00 PM',
    datetime: '2026-06-29T16:00:00',
    venue: 'Houston',
    confirmed: true,
    score1: 2, score2: 1,
    winner: 'Brazil',
  },

  // ── PAIR 3 ───────────────────────────────────────────────────────────────
  {
    id: 'M77',
    team1: 'France', flag1: 'fr',
    team2: 'Sweden', flag2: 'se',
    date: '30 Jun', kickoff: '9:00 PM', kickoffArgentina: '10:00 PM',
    datetime: '2026-06-30T22:00:00',
    venue: 'New Jersey',
    confirmed: false,
  },
  {
    id: 'M78',
    team1: 'Ivory Coast', flag1: 'ci',
    team2: 'Norway',      flag2: 'no',
    date: '30 Jun', kickoff: '6:00 PM', kickoffArgentina: '7:00 PM',
    datetime: '2026-06-30T19:00:00',
    venue: 'Dallas',
    confirmed: false,
  },

  // ── PAIR 4 ───────────────────────────────────────────────────────────────
  {
    id: 'M79',
    team1: 'Mexico',  flag1: 'mx',
    team2: 'Ecuador', flag2: 'ec',
    date: '30 Jun', kickoff: '11:00 PM', kickoffArgentina: '12:00 AM',
    datetime: '2026-07-01T00:00:00',
    venue: 'Mexico City',
    confirmed: false,
  },
  {
    id: 'M80',
    team1: 'England',  flag1: 'gb-eng',
    team2: 'DR Congo', flag2: 'cd',
    date: '1 Jul', kickoff: '5:00 PM', kickoffArgentina: '6:00 PM',
    datetime: '2026-07-01T18:00:00',
    venue: 'Atlanta',
    confirmed: false,
  },
]

// ── ROUND OF 32 — RIGHT BRACKET ────────────────────────────────────────────
export const bracketRight = [

  // ── PAIR 1 ───────────────────────────────────────────────────────────────
  {
    id: 'M81',
    team1: 'USA',            flag1: 'us',
    team2: 'Bosnia & Herz.', flag2: 'ba',
    date: '1 Jul', kickoff: '1:00 AM', kickoffArgentina: '2:00 AM',
    datetime: '2026-07-01T02:00:00',
    venue: 'San Francisco',
    confirmed: false,
  },
  {
    id: 'M82',
    team1: 'Belgium', flag1: 'be',
    team2: 'Senegal', flag2: 'sn',
    date: '1 Jul', kickoff: '9:00 PM', kickoffArgentina: '10:00 PM',
    datetime: '2026-07-01T22:00:00',
    venue: 'Seattle',
    confirmed: false,
  },

  // ── PAIR 2 ───────────────────────────────────────────────────────────────
  {
    id: 'M83',
    team1: 'Portugal', flag1: 'pt',
    team2: 'Croatia',  flag2: 'hr',
    date: '2 Jul', kickoff: '8:00 PM', kickoffArgentina: '9:00 PM',
    datetime: '2026-07-02T21:00:00',
    venue: 'Toronto',
    confirmed: false,
  },
  {
    id: 'M84',
    team1: 'Spain',   flag1: 'es',
    team2: 'Austria', flag2: 'at',
    date: '2 Jul', kickoff: '5:00 PM', kickoffArgentina: '6:00 PM',
    datetime: '2026-07-02T18:00:00',
    venue: 'Los Angeles',
    confirmed: false,
  },

  // ── PAIR 3 ───────────────────────────────────────────────────────────────
  {
    id: 'M85',
    team1: 'Switzerland', flag1: 'ch',
    team2: 'Algeria',     flag2: 'dz',
    date: '2 Jul', kickoff: '2:00 AM', kickoffArgentina: '3:00 AM',
    datetime: '2026-07-02T03:00:00',
    venue: 'Vancouver',
    confirmed: false,
  },
  {
    id: 'M86',
    team1: 'Argentina',  flag1: 'ar',
    team2: 'Cape Verde', flag2: 'cv',
    date: '3 Jul', kickoff: '11:00 PM', kickoffArgentina: '12:00 AM',
    datetime: '2026-07-04T00:00:00',
    venue: 'Miami',
    confirmed: false,
  },

  // ── PAIR 4 ───────────────────────────────────────────────────────────────
  {
    id: 'M87',
    team1: 'Colombia', flag1: 'co',
    team2: 'Ghana',    flag2: 'gh',
    date: '3 Jul', kickoff: '7:00 PM', kickoffArgentina: '8:00 PM',
    datetime: '2026-07-03T20:00:00',
    venue: 'Kansas City',
    confirmed: false,
  },
  {
    id: 'M88',
    team1: 'Australia', flag1: 'au',
    team2: 'Egypt',     flag2: 'eg',
    date: '3 Jul', kickoff: '4:00 PM', kickoffArgentina: '5:00 PM',
    datetime: '2026-07-03T17:00:00',
    venue: 'Dallas',
    confirmed: false,
  },
]