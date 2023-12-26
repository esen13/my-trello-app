import index from "@/actions/create-board";
import {Button} from "@/components/ui/button";

const OrganizationIdPage = () => {
    return (
        <div>
            OrganizationIdPage
            <form action={index}>
                <input id="title" name="title" required placeholder="Enter a bird title" className="border border-black p-1" />
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default OrganizationIdPage;