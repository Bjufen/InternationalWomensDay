export const config = {
	/** Start of the progress bar countdown — midnight March 8, 2026 CET */
	startDate: '2026-03-08T00:00:00',
	/** End of the progress bar — change this before redeployment */
	endDate: '2026-03-08T22:00:00',
	/** IANA timezone for progress calculation */
	timezone: 'Europe/Berlin',
	/** Progress bar messages */
	messages: {
		loading: 'Überraschung lädt...',
		complete: 'Mach die Tür auf'
	}
};
