var attackUnits = {
	'Thug': {
		'cost': {
			'cash': 750,
			'food': 281,
			'steel': 563,
			'cement': 281,
			'influence': 10
		},
		'bailout':2250
	},
    'Arsonist':      {'requirement': {'research': {'Logistics': 1}, 'build': {'Hideout': 2}},'bailout':3300},
    'Demolitionist': {'requirement': {'research': {'Proficiency': 4}, 'build': {'Garage': 3, 'Hideout': 3}},'bailout':5100},
    'Bruiser':       {'requirement': {'research': {'Corruption': 6}, 'build': {'Workshop': 3, 'Hideout': 4}},'bailout':8100},
	'Hitman':        {'requirement': {'research': {'Corruption': 7, 'Proficiency': 7}, 'build': {'Hideout': 6, 'Workshop': 5, 'Garage':5}}},
    'Enforcer':      {'requirement': {'research': {'Proficiency': 8}, 'build': {'Garage': 6, 'Hideout': 7}},'bailout':17100},
	'TommyGunner':   {'requirement': {'research': {'Corruption': 10}, 'build': {'Workshop': 6,'Hideout': 8}}},
	'Professional':  {'requirement': {'research': {'Proficiency': 12}, 'build': {'Garage': 9,'Hideout': 9}}},
	'Sniper':        {'requirement': {'research': {'Corruption': 14, 'Proficiency': 14}, 'build': {'Hideout': 9, 'Workshop': 9, 'Garage': 9}}, 'bailout': 46800},
	'Butcher':       {'requirement': {'research': {'Corruption': 16, 'Cooking': 17}, 'build': {'Workshop': 9, 'Hideout': 9}}},
	'BlackWidow':    {'requirement': {'research': {'Corruption': 17}, 'build': {'Hideout': 9, 'Workshop': 9}}, 'bailout': 56628},
	'Assassin':      {'requirement': {'research': {'Proficiency': 17}, 'build': {'Hideout': 9, 'Garage': 9}}, 'bailout':56628},
	'Courier':       {'cost': {'cash': 500, 'food': 188, 'steel': 188, 'cement': 375, 'influence': 10}},
	'DeliveryTruck': {'requirement': {'research': {'Mechanics': 6, 'Capacity': 8}, 'build': {'Hideout': 5, 'Garage': 2}}},
	'Smuggler':      {'bailout':62292},
    'Undertaker':    {'bailout':62292},
	'Doctor':        {'bailout':62292},
	'Loanshark':     {'bailout':62292},
	'Hatchetman':    {'bailout':62292},
	'Triggerman':    {'bailout':62292},
	'Bartender':     {'bailout':62292},
	'Crookedcop':    {'bailout':68520},
    'DRC':           {'bailout':68520},
	'PIG':           {'bailout':68520},
	'Highbinder':    {'bailout':68520},
	'Gman':          {'bailout':68520},
	'Bookie':        {'bailout':68520},
	'MisterSnip':    {'bailout':75000},
	'MisterHaul':    {'bailout':75000},
	'MisterFixit':   {'bailout':75000},
	'MisterSplit':   {'bailout':75000},
    'MisterKippy':   {'bailout':75000},
	'MisterPao':     {'bailout':75000}
};