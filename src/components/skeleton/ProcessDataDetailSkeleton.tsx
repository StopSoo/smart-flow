export default function ProcessDataDetailSkeleton() {
    const heights = [120, 180, 150, 200, 100, 160, 140, 190, 130, 170, 110, 150, 180, 140, 160, 200, 130, 150, 170, 120, 80, 100, 60, 200, 180, 160, 190, 140, 50, 60, 100, 110];

    return (
        <div className="w-full flex flex-col animate-pulse">
            <div className="flex flex-col p-6">
                <div className="flex flex-row items-center bg-white border-t-2 border-gray-200">
                    <div className="flex items-center justify-center bg-gray-100 min-w-[140px] h-[70px]">
                        <div className="h-5 w-20 bg-gray-300 rounded" />
                    </div>
                    <div className="flex flex-row items-center justify-center w-full min-w-[360px] gap-3 py-4">
                        <div className="h-4 w-32 bg-gray-300 rounded" />
                    </div>
                    <div className="flex items-center justify-center bg-gray-100 min-w-[140px] h-[70px]">
                        <div className="h-5 w-20 bg-gray-300 rounded" />
                    </div>
                    <div className="flex flex-row items-center justify-center w-full min-w-[360px] gap-3 py-4">
                        <div className="h-4 w-24 bg-gray-300 rounded" />
                    </div>
                </div>

                <div className="flex flex-row items-center bg-white border-y-2 border-gray-200">
                    <div className="flex items-center justify-center bg-gray-100 min-w-[140px] h-[70px]">
                        <div className="h-5 w-20 bg-gray-300 rounded" />
                    </div>
                    <div className="flex flex-row items-center justify-center w-full min-w-[360px] gap-3 py-4">
                        <div className="h-4 w-28 bg-gray-300 rounded" />
                    </div>
                    <div className="flex items-center justify-center bg-gray-100 min-w-[140px] h-[70px]">
                        <div className="h-5 w-20 bg-gray-300 rounded" />
                    </div>
                    <div className="flex flex-row items-center justify-center w-full min-w-[360px] gap-3 py-4">
                        <div className="h-4 w-24 bg-gray-300 rounded" />
                    </div>
                </div>

                <div className="flex flex-row items-center bg-white border-b-2 border-gray-200">
                    <div className="flex items-center justify-center bg-gray-100 min-w-[140px] h-[70px]">
                        <div className="h-5 w-24 bg-gray-300 rounded" />
                    </div>
                    <div className="flex flex-row items-center justify-center w-full min-w-[360px] gap-3 py-4">
                        <div className="h-4 w-28 bg-gray-300 rounded" />
                    </div>
                    <div className="flex items-center justify-center bg-gray-100 min-w-[140px] h-[70px]">
                        <div className="h-5 w-24 bg-gray-300 rounded" />
                    </div>
                    <div className="flex flex-row items-center justify-center w-full min-w-[360px] gap-3 py-4">
                        <div className="h-4 w-16 bg-gray-300 rounded" />
                    </div>
                </div>
            </div>

            <div className="px-6">
                <div className="w-full min-w-[1000px] border-[4px] border-gray-200 bg-white p-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <div className="h-6 w-32 bg-gray-300 rounded" />
                            <div className="h-6 w-20 bg-gray-300 rounded" />
                        </div>

                        <div className="relative w-full h-[300px] flex flex-col">
                            <div className="flex-1 flex items-end gap-[2px] pl-8 pr-4 pb-12 relative">
                                {
                                    heights.map((height, i) => (
                                        <div key={i} className="flex-1 flex flex-col items-center">
                                            <div className="w-full bg-gray-300 rounded-t" style={{ height: `${height}px` }} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div className="h-4 w-40 bg-gray-300 rounded" />
                            <div className="h-4 w-48 bg-gray-300 rounded" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 p-6">
                <div className="flex flex-col min-w-[500px] gap-6">
                    <div className="flex flex-row items-center bg-white border-y-2 border-gray-200">
                        <div className="flex items-center justify-center bg-gray-100 min-w-[140px] h-[70px]">
                            <div className="h-5 w-12 bg-gray-300 rounded" />
                        </div>
                        <div className="flex flex-row items-center justify-start w-full gap-3 px-4">
                            <div className="h-10 w-32 bg-gray-300 rounded" />
                            <div className="h-10 w-32 bg-gray-300 rounded" />
                        </div>
                    </div>

                    <div className="flex flex-row justify-end">
                        <div className="h-5 w-24 bg-gray-300 rounded" />
                    </div>

                    <div className="bg-white border-y-2 border-gray-200 overflow-hidden">
                        <table className="w-full h-[550px]">
                            <thead className="border-b border-gray-200 bg-gray-100 py-3">
                                <tr>
                                    <th className="py-3 w-[80px]">
                                        <div className="h-5 w-8 bg-gray-300 rounded mx-auto" />
                                    </th>
                                    <th className="py-3 w-[400px]">
                                        <div className="h-5 w-32 bg-gray-300 rounded mx-auto" />
                                    </th>
                                    <th className="py-3 w-[140px]">
                                        <div className="h-5 w-16 bg-gray-300 rounded mx-auto" />
                                    </th>
                                    <th className="py-3">
                                        <div className="h-5 w-20 bg-gray-300 rounded mx-auto" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Array.from({ length: 10 }).map((_, idx) => (
                                        <tr key={idx} className="h-[55px] border-b border-gray-200">
                                            <td className="px-4 py-3 w-[80px]">
                                                <div className="h-4 w-6 bg-gray-300 rounded mx-auto" />
                                            </td>
                                            <td className="px-4 py-3 w-[400px]">
                                                <div className="h-4 w-full bg-gray-300 rounded" />
                                            </td>
                                            <td className="px-4 py-3 w-[140px]">
                                                <div className="h-4 w-12 bg-gray-300 rounded mx-auto" />
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="h-4 w-4 bg-gray-300 rounded mx-auto" />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-center">
                        <div className="h-10 w-64 bg-gray-300 rounded" />
                    </div>
                </div>

                <div className="min-w-[500px] flex flex-col gap-6">
                    <div>
                        <div className="flex flex-row items-center bg-white border-t-2 border-gray-200">
                            <div className="flex items-center justify-center bg-gray-100 min-w-[140px] h-[70px]">
                                <div className="h-5 w-20 bg-gray-300 rounded" />
                            </div>
                            <div className="flex flex-row items-center justify-center w-full gap-3 px-4">
                                <div className="h-4 w-16 bg-gray-300 rounded" />
                            </div>
                        </div>

                        <div className="flex flex-row items-center bg-white border-y-2 border-gray-200">
                            <div className="flex items-center justify-center bg-gray-100 min-w-[140px] h-[70px]">
                                <div className="h-5 w-12 bg-gray-300 rounded" />
                            </div>
                            <div className="flex flex-row items-center justify-center w-full gap-3 px-4">
                                <div className="h-10 w-[140px] bg-gray-300 rounded" />
                            </div>
                        </div>

                        <div className="flex flex-row items-center bg-white border-b-2 border-gray-200">
                            <div className="flex items-center justify-center bg-gray-100 min-w-[140px] h-[70px]">
                                <div className="h-5 w-16 bg-gray-300 rounded" />
                            </div>
                            <div className="flex flex-row items-center justify-center w-full gap-3 px-4">
                                <div className="w-8 h-8 bg-gray-300 rounded" />
                            </div>
                        </div>
                    </div>

                    <div className="h-[510px] border-[4px] border-gray-200 bg-gray-100 flex items-center justify-center p-6">
                        <div className="flex flex-col items-center gap-12">
                            <div className="h-6 w-28 bg-gray-300 rounded" />
                            <div className="w-[440px] h-[330px] bg-gray-300 rounded" />
                        </div>
                    </div>

                    <div className="h-12 bg-gray-300 rounded" />
                </div>
            </div>
        </div>
    );
}