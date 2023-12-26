"use server";

import {db} from "@/lib/db";
import {CreateBoardZod} from "@/actions/create-board/schema";

async function index(formData: FormData) {
    // const title = formData.get('title') as string;
    const { title } = CreateBoardZod.parse({
        title: formData.get('title')
    })

    await db.board.create({
        data: {
            title
        }
    })
}

export default index;