import SemiHeader from "@/components/common/SemiHeader";
import Layout from "@/components/layout/Layout";
import { useParams } from "next/navigation";

export default function ManagementDetailPage() {
    const params = useParams();
    const id = params.id;

    return (
        <Layout headerTitle="생산라인 관리">
            <div className="w-full flex flex-col">
                <SemiHeader headerTitle={id === '1' ? "생산라인1" : "생산라인2"} />
            </div>

        </Layout>
    );
}