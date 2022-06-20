module.exports = {
  locales: ['ja', 'en'],
  defaultLocale: 'ja',
  pages: {
    '*': [
      'common',
      'common_event_summary',
      'common_illustrated_by',
      'events_in_event',
      'election_campaign_what_is_election_campaign',
      'sosenkyo_book',
      'votes_what_is_gensosenkyo',
      'votes_hall_of_fame',
      'votes_how_to_vote',
      'bonus_votes_what_is_bonus_votes',
    ],
  },
  // https://github.com/vinissimus/next-translate#3-configuration
  logger: function () {},
  // https://github.com/i18next/i18next/issues/361
  nsSeparator: false,
}
