'use server'

import { CreateBoard } from '@/actions/create-board/schema'
import { createSafeAction } from '@/lib/create-safe-action'
import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { revalidatePath } from 'next/cache'
import { InputType, ReturnType } from './types'

const handler = async (data: InputType): Promise<ReturnType> => {
	const { userId, orgId } = auth()
	if (!userId || !orgId) {
		return {
			error: 'Unauthorized',
		}
	}

	const { title, image } = data
	const [imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName] =
		image.split('|')
	let board

	if (
		!imageId ||
		!imageFullUrl ||
		!imageLinkHTML ||
		!imageThumbUrl ||
		!imageUserName
	) {
		return {
			error: 'Missing fields. Failed to create board',
		}
	}

	try {
		board = await db.board.create({
			data: {
				title,
				orgId,
				imageId,
				imageFullUrl,
				imageLinkHTML,
				imageThumbUrl,
				imageUserName,
			},
		})
	} catch (error) {
		console.log('error', error)
		return {
			error: 'Failed to create.',
		}
	}

	revalidatePath(`board/${board.id}`)
	return { data: board }
}

export const createBoard = createSafeAction(CreateBoard, handler)
