import { Sidebar } from "@/app/(platform)/(dashboard)/_components/Sidebar";

const OrganizationLayout = ({
                             children
                         }: {
    children: React.ReactNode;
}) => {
    return (
        <div className="pt-20 h-full md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
            <div className="flex gap-x-7 h-full">
                <div className="w-64 shrink-0 hidden md:block h-full">
                    <Sidebar />
                </div>
                {children}
            </div>
        </div>
    );
};

export default OrganizationLayout;