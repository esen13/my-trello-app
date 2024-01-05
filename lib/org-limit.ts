import { auth } from '@clerk/nextjs'
import { db } from './db'

export const incrementAvailableCount = async () => {
	const { orgId } = auth()

	if (!orgId) {
		throw new Error('Unauthorized')
	}

	const orgLimit = await db.orgLimit.findUnique({
		where: { orgId },
	})

	if (orgLimit) {
		await db.orgLimit.update({
			data: { count: orgLimit.count + 1 },
			where: { orgId },
		})
	} else {
		await db.orgLimit.create({
			data: { orgId, count: 1 },
		})
	}
}
