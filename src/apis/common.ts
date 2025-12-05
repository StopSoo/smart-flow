import axiosInstance from "./axiosInstance";
import {
    AIModelNameListResponse,
    PolygonDataResponse,
    ProductionLineListResponse
} from "@/types/analysis/types";
import {
    DeleteRequest,
    DeleteResponse,
    FailResponse,
    ProductionHistoryResponse,
    ViewDailyNormalDefectRatioResponse
} from "@/types/common/types";

export const commonApi = {
    // 일일 양불 비율 조회 (분석 / 가공)
    checkDailyNormalDefectRatio: async (
        date: string,
    ) => {
        const { data } = await axiosInstance.get<ViewDailyNormalDefectRatioResponse | FailResponse>
            (`/api/productions/production-histories/daily-normal-defect-ratio-by-branch/?date=${date}`);

        if (data.status === "SUCCESS") {
            return data;
        } else {
            console.log('checkDailyNormalDefectRatio api fail', data.data.message);
            return null;
        }
    },
    // 생산 라인 목록 조회
    viewProductionLineList: async (): Promise<ProductionLineListResponse | null> => {
        const { data } = await axiosInstance.get<ProductionLineListResponse | FailResponse>
            ('/api/productions/production-lines/');

        if (data.status === "SUCCESS") {
            return data;
        } else {
            console.log('viewProductionLineList api fail', data.data.message);
            return null;
        }
    },
    // 생산 이력 조회 (가공 / 분석)
    viewProductionHistories: async (
        applied_model: string | null = null,
        start_created_at: string | null = null,
        end_created_at: string | null = null,
        is_abnormal: string | null = null,
        is_descending: boolean = true,
        production_line: string | null = null,
        production_name: string | null = null,
        page: number = 1,
        page_size: number = 10,
    ): Promise<ProductionHistoryResponse | null> => {
        const params: Record<string, any> = {
            is_descending,
            page,
            page_size,
        };
        if (applied_model !== "전체") params.applied_model = applied_model;
        if (start_created_at !== null) params.start_created_at = start_created_at;
        if (end_created_at !== null) params.end_created_at = end_created_at;
        if (is_abnormal !== "전체") {
            params.is_abnormal = is_abnormal !== "true";
        }
        if (production_line !== "전체") params.production_line = production_line;
        if (production_name !== "전체") params.production_name = production_name;

        const { data } = await axiosInstance.get<ProductionHistoryResponse | FailResponse>(
            `/api/productions/production-lines/production-histories/`,
            { params }
        );

        if (data.status === "SUCCESS") {
            return data;
        } else {
            console.log('viewProductionHistories api fail', data.data);
            return null;
        }
    },
    // 생산 이력 삭제
    deleteProductionHistories: async (
        ids: DeleteRequest
    ): Promise<string | null> => {
        const { data } = await axiosInstance.delete<DeleteResponse | FailResponse>(
            '/api/productions/production-histories/delete/',
            {
                data: ids
            }
        );

        if (data.status === "SUCCESS") {
            return data.data; // "" 예정
        } else {
            console.log('deleteProductionHistories api fail', data.data.message);
            return null;
        }
    },
    // 검수 AI 모델 이름 목록 조회 (분석 / 가공 / 학습)
    viewAIModelNameList: async (): Promise<AIModelNameListResponse | null> => {
        const { data } = await axiosInstance.get<AIModelNameListResponse | FailResponse>(
            '/api/model_managements/inspection-ai-models/list-names/',
        );

        if (data.status === "SUCCESS") {
            return data;
        } else {
            console.log('viewAIModelNameList api fail', data.data.message);
            return null;
        }
    },
    // 마스크 폴리곤 조회
    viewPolygonData: async (
        dataset_id: string
    ): Promise<PolygonDataResponse | null> => {
        const { data } = await axiosInstance.get<PolygonDataResponse | FailResponse>(
            `/api/productions/production-histories/dataset/${dataset_id}/mask-poly/`
        );

        if (data.status === "SUCCESS") {
            return data;
        } else {
            console.log('viewPolygonData api fail', data.data.message);
            return null;
        }
    },
};