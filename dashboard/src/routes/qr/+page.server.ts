import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	redirect(302, 'https://docs.google.com/document/d/1sev125sNRR2OFiXY53d2m48Zon-TubonlwrD1Sryakk/edit?usp=sharing');
};
