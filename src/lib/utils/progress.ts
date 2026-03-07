import { config } from '$lib/config';

/**
 * Parse a date string as if it were in Europe/Berlin timezone.
 * We use Intl.DateTimeFormat to figure out the UTC offset for Berlin
 * at the given date, then construct the correct UTC timestamp.
 */
function parseDateInBerlin(dateStr: string): number {
	// Create a date assuming UTC first
	const naiveUtc = new Date(dateStr + 'Z').getTime();

	// Find the offset in Berlin at that approximate time
	const formatter = new Intl.DateTimeFormat('en-US', {
		timeZone: config.timezone,
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false
	});

	const parts = formatter.formatToParts(new Date(naiveUtc));
	const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '0';

	const berlinStr = `${get('year')}-${get('month')}-${get('day')}T${get('hour')}:${get('minute')}:${get('second')}Z`;
	const berlinAsUtc = new Date(berlinStr).getTime();
	const offset = berlinAsUtc - naiveUtc;

	// The actual UTC time = naive UTC - offset
	return naiveUtc - offset;
}

const startUtc = parseDateInBerlin(config.startDate);
const endUtc = parseDateInBerlin(config.endDate);

/**
 * Calculate progress percentage (0–100) based on current time.
 */
export function getProgress(): number {
	const now = Date.now();
	if (now <= startUtc) return 0;
	if (now >= endUtc) return 100;
	return Math.round(((now - startUtc) / (endUtc - startUtc)) * 100);
}
