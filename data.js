exports.data = [
	{id: 1, type: 'Software', date: '3/14/12 7:30pm', title: 'JVM Upgrade', risk: 1,
	description: "Update of JVM on three Linux production servers", 
	icon: 'soft', hours: 15, approved: false,
	requestor: 'Terry Lynch',
	approvers: [
		{name: 'Bill', vote: 'yes'},
		{name: 'Ted', vote: 'none'},
		{name: 'Linda', vote: 'yes'},
		{name: 'Richard', vote: 'info'}
	]},
	{id: 2, type: 'Software', date: '3/15/12 10pm', title: 'Public Site Deployment', risk: 2,
	description: "Scheduled deployment of new features for public website", 
	icon: 'soft', hours: 96, approved: false,
	requestor: 'Angela Smith',
	approvers: [
		{name: 'Bill', vote: 'yes'},
		{name: 'Ted', vote: 'yes'},
		{name: 'Linda', vote: 'yes'},
		{name: 'Richard', vote: 'none'}
	]},
	{id: 3, type: 'Hardware', date: '3/15/12 5am', title: 'Cisco Firmware Update', risk: 5,
	description: "Update Cisco routers to latest firmware", 
	icon: 'server', hours: 23, approved: false,
	requestor: 'Sam Snead',
	approvers: [
		{name: 'Bill', vote: 'yes'},
		{name: 'Ted', vote: 'yes'},
		{name: 'Linda', vote: 'yes'},
		{name: 'Richard', vote: 'none'}
	]},
	{id: 4, type: 'Software', date: '3/18/12 12pm', title: 'New BI Report', risk: 1, 
	description: "Add a new report to the BI server", 
	icon: 'soft', hours: 45, approved: false,
	requestor: 'Tom Boone',
	approvers: [
		{name: 'Bill', vote: 'yes'},
		{name: 'Ted', vote: 'no'},
		{name: 'Linda', vote: 'yes'},
		{name: 'Richard', vote: 'info'}
	]},
	{id: 5, type: 'Hardware', date: '3/21/12 9:3pm', title: 'Add RAM to Server', risk: 1,
	description: "Add 128GB RAM to production SQL Server", 
	icon: 'server', hours: 9, approved: false,
	requestor: 'Carlos Vargas',
	approvers: [
		{name: 'Bill', vote: 'yes'},
		{name: 'Ted', vote: 'yes'},
		{name: 'Linda', vote: 'yes'},
		{name: 'Richard', vote: 'none'}
	]}

];

exports.upcoming = {sections: [
	{date: 'Sunday, February 19th', items: [
		{id: 1, title: 'Flash Hotfix', description: 'Hotfix for critical security issue', icon: 'soft', time: '9:30pm'},
		{id: 2, title: 'New Print Server', description: 'Install new print server on 2nd floor', icon: 'server', time: '10:00pm'}
	]},
	{date: 'Monday, February 20th', items: [
		{id: 4, title: 'Windows Critcal Hotfix', description: 'Apply patch for Active-X vulnerability', icon: 'soft', time: '5:30am'},
		{id: 5, title: 'RAID Controller', description: 'Update RAID controller on SQL box', icon: 'server', time: '7:00pm'},
		{id: 6, title: 'Office Update', description: 'Patch all desktops to Office 10.0.2', icon: 'soft', time: '10:00pm'}
	]},
	{date: 'Tuesday, February 21st', items: [
		{id: 7, title: 'Patch Tuesday!', description: 'Lots of fun Microsoft patches', icon: 'soft', time: '11:00pm'},
		{id: 8, title: 'Flash Hotfix', description: 'Hotfix for critical security issue, again', icon: 'soft', time: '5:00pm'},
		{id: 9, title: 'Cable Upgrade', description: 'Upgrade to CAT5 Monster Cable', icon: 'server', time: '10:00pm'}
	]},
	{date: 'Wednesday, February 22nd', items: [
		{id: 10, title: 'Flash Hotfix', description: 'Hotfix for critical security issue, yes, again', icon: 'server', time: '7:00am'},
		{id: 11, title: 'RAM Upgrade', description: 'Upgrade RAM on CEOs laptop for Farmville', icon: 'server', time: '9:00am'},
		{id: 12, title: 'Firwall Change', description: 'Block Farmville for everyone but CEO', icon: 'server', time: '9:05pm'}
	]},
	{date: 'Thursday, February 23rd', items: [
		{id: 13, title: 'TextMate 2', description: 'Deploy TextMate 2, hahahaha', icon: 'server', time: '12:00am'},
		{id: 14, title: 'SSD Upgrade', description: 'Upgrade CEO to SSD for Farmville', icon: 'server', time: '9:00am'}
	]}

]};

exports.completed = {sections: [

	{date: 'Friday, February 17th', items: [
		{id: 1, title: 'Flash Hotfix', description: 'Hotfix for critical security issue', icon: 'ok', time: '9:30pm'},
		{id: 2, title: 'New Print Server', description: 'Install new print server on 2nd floor', icon: 'ok', time: '10:00pm'}
	]},
	{date: 'Thursday, February 16th', items: [
		{id: 4, title: 'Windows Critcal Hotfix', description: 'Apply patch for Active-X vulnerability', icon: 'fail', time: '5:30am'},
		{id: 5, title: 'RAID Controller', description: 'Update RAID controller on SQL box', icon: 'ok', time: '7:00pm'}
	]},
	{date: 'Wednesday, February 21st', items: [
		{id: 7, title: 'Patch Tuesday!', description: 'Lots of fun Microsoft patches', icon: 'ok', time: '11:00pm'},
		{id: 8, title: 'Flash Hotfix', description: 'Hotfix for critical security issue, again', icon: 'ok', time: '5:00pm'},
		{id: 9, title: 'Cable Upgrade', description: 'Upgrade to CAT5 Monster Cable', icon: 'ok', time: '10:00pm'}
	]}

]};



