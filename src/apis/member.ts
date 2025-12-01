import axiosInstance from "./axiosInstance";

import { ActivateAccountData, ActivateAccountResponse, DeactivateInfoResponse, IssueTokenRequest, IssueTokenResponse, MemberData, RegisterRequest, RegisterResponse, UpdateInfoData, UpdateInfoRequest, UpdateInfoResponse, ViewMemberInfoResponse } from "@/types/member/types";

export const memberApi = {
    // 정보 조회
    login: async (): Promise<MemberData | string | null> => {
        const { data } = await axiosInstance.get<ViewMemberInfoResponse>('/api/accounts/me');

        if (data.status === "SUCCESS" && "id" in data.data) {
            return data.data;
        } else if ("message" in data.data) {
            return data.data.message;
        } else {
            return null;
        }
    },
    issueToken: async (memberInfo: IssueTokenRequest): Promise<string | null> => {
        const { data } = await axiosInstance.post<IssueTokenResponse>('/api/accounts/issue-token',
            memberInfo
        );

        if (data.status === "SUCCESS" && "token" in data.data) {
            const { token } = data.data;
            return token;
        } else if ("message" in data.data) {
            return data.data.message;
        } else {
            return null;
        }
    },
    signup: async (memberInfo: RegisterRequest): Promise<string | null> => {
        const { data } = await axiosInstance.post<RegisterResponse>('/api/accounts/register',
            memberInfo
        );

        if (data.status === "SUCCESS") {
            return data.data; // "" 예정
        } else {
            return null;
        }
    },
    activateAccount: async (id: number): Promise<ActivateAccountData | string | null> => {
        const { data } = await axiosInstance.patch<ActivateAccountResponse>(`/api/accounts/${id}/activate_account`);

        if (data.status === "SUCCESS" && "id" in data.data) {
            return data.data;
        } else if ("message" in data.data) {
            return data.data.message;
        } else {
            return null;
        }
    },
    updateInfo: async (updateInfo: UpdateInfoRequest): Promise<UpdateInfoData | string | null> => {
        const { data } = await axiosInstance.patch<UpdateInfoResponse>('/api/accounts/me/update',
            updateInfo
        );

        if (data.status === "SUCCESS" && "id" in data.data) {
            return data.data;
        } else if ("message" in data.data) {
            return data.data.message;
        } else {
            return null;
        }
    },
    deleteAccount: async (): Promise<string | null> => {
        const { data } = await axiosInstance.delete<DeactivateInfoResponse>('/api/accounts/me/deactivate');

        if (data.status === "SUCCESS") {
            return data.data; // "" 예정
        } else {
            return null;
        }
    },
};