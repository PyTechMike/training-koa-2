module.exports = {
	use: [
	  ['@atomspace/eslint', {
		  eslint: {
			  envs: ['node'],
		  }
	  }],
	  'neutrino-preset-koa',
	  '@neutrinojs/jest'
	]
};