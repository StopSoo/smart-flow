import { MemberStore } from '@/types/member/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/* 회원 */
export const useMemberStore = create<MemberStore>()(
    persist(
        (set) => ({
            username: 'covi', /* TODO: API 연결 시 수정 */
            setUsername: (newState) => set({ username: newState }),
        }),
        {
            name: 'memberNameStorage',
        }
    )
)