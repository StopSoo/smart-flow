import { UploadedListStore, LineListStore, SortConfigStore, OptionsStore } from '@/types/analysis/types';
import { MemberStore } from '@/types/member/types';
import { ModalStore } from '@/types/modal/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/* 회원 */
export const useMemberStore = create<MemberStore>()(
    persist(
        (set) => ({
            username: 'username',
            setUsername: (newState) => set({ username: newState }),
            role: 'user',
            isLogin: true,
            setIsLogin: (state) => set({ isLogin: state }),
        }),
        {
            name: 'memberStorage',
        }
    )
)

/* 모달창 */
export const useMemberModalStore = create<ModalStore>((set) => ({
    isModalOpen: false,
    setIsModalOpen: () => set({ isModalOpen: true }),
    setIsModalClose: () => set({ isModalOpen: false })
}))

export const useLoginSuccessStore = create<ModalStore>((set) => ({
    isModalOpen: false,
    setIsModalOpen: () => set({ isModalOpen: true }),
    setIsModalClose: () => set({ isModalOpen: false })
}))

export const useNoUserStore = create<ModalStore>((set) => ({ // 해당하는 유저가 없습니다
    isModalOpen: false,
    setIsModalOpen: () => set({ isModalOpen: true }),
    setIsModalClose: () => set({ isModalOpen: false })
}))

export const useWrongPwStore = create<ModalStore>((set) => ({ // 비밀번호가 일치하지 않습니다
    isModalOpen: false,
    setIsModalOpen: () => set({ isModalOpen: true }),
    setIsModalClose: () => set({ isModalOpen: false })
}))

export const usePendingAccountStore = create<ModalStore>((set) => ({ // PENDING 상태의 계정은 접근할 수 없습니다
    isModalOpen: false,
    setIsModalOpen: () => set({ isModalOpen: true }),
    setIsModalClose: () => set({ isModalOpen: false })
}))

export const useUnactivatedAccountStore = create<ModalStore>((set) => ({ // 비활성화된 계정은 접근할 수 없습니다
    isModalOpen: false,
    setIsModalOpen: () => set({ isModalOpen: true }),
    setIsModalClose: () => set({ isModalOpen: false })
}))

export const useSignupSuccessStore = create<ModalStore>((set) => ({
    isModalOpen: false,
    setIsModalOpen: () => set({ isModalOpen: true }),
    setIsModalClose: () => set({ isModalOpen: false })
}))

export const useOnlyFourPwStore = create<ModalStore>((set) => ({ // 비밀번호는 숫자 4자리만 가능합니다
    isModalOpen: false,
    setIsModalOpen: () => set({ isModalOpen: true }),
    setIsModalClose: () => set({ isModalOpen: false })
}))

export const useExistedUsernameStore = create<ModalStore>((set) => ({ // 이미 존재하는 사용자명입니다
    isModalOpen: false,
    setIsModalOpen: () => set({ isModalOpen: true }),
    setIsModalClose: () => set({ isModalOpen: false })
}))

export const useNoBranchNameStore = create<ModalStore>((set) => ({ // 해당하는 사업소 이름이 없습니다
    isModalOpen: false,
    setIsModalOpen: () => set({ isModalOpen: true }),
    setIsModalClose: () => set({ isModalOpen: false })
}))

export const useLogoutStore = create<ModalStore>((set) => ({
    isModalOpen: false,
    setIsModalOpen: () => set({ isModalOpen: true }),
    setIsModalClose: () => set({ isModalOpen: false })
}))

export const useEditInfoSuccessStore = create<ModalStore>((set) => ({
    isModalOpen: false,
    setIsModalOpen: () => set({ isModalOpen: true }),
    setIsModalClose: () => set({ isModalOpen: false })
}))

export const useSuccessChangeStandardStore = create<ModalStore>((set) => ({
    isModalOpen: false,
    setIsModalOpen: () => set({ isModalOpen: true }),
    setIsModalClose: () => set({ isModalOpen: false })
}))

export const useSuccessDeleteStore = create<ModalStore>((set) => ({
    isModalOpen: false,
    setIsModalOpen: () => set({ isModalOpen: true }),
    setIsModalClose: () => set({ isModalOpen: false })
}))

/* 분석 플랫폼 */
// 메인 탭
// - 생산라인 가동 현황
export const useProductionLineStore = create<LineListStore>((set) => ({
    lineList: [],
    setLineList: (newLineList) => set({ lineList: newLineList }),
}))
// 데이터 업로드 탭
// - 업로드 이력
export const useUploadedDataStore = create<UploadedListStore>((set) => ({
    uploadedData: null,
    setUploadedData: (newList) => set({ uploadedData: newList }),
    uploadedDataLength: 0,
    setUploadedDataLength: (length) => set({ uploadedDataLength: length }),
}))
// 인공지능 분석 페이지
// - 데이터 정렬 방식
export const useSortConfigStore = create<SortConfigStore>((set) => ({
    isDesc: true,
    setDesc: () => set({ isDesc: true }),
    setAsc: () => set({ isDesc: false }),
}))
// - 검사 항목 Picker
export const useOptionsStore = create<OptionsStore>((set) => ({
    productOptions: [{ label: "전체", value: "전체" }],
    lineOptions: [{ label: "전체", value: "전체" }],
    modelOptions: [{ label: "전체", value: "전체" }],
    isLoaded: false,
    setProductOptions: (options) => set({ productOptions: options }),
    setLineOptions: (options) => set({ lineOptions: options }),
    setModelOptions: (options) => set({ modelOptions: options }),
    setIsLoaded: (loaded) => set({ isLoaded: loaded }),
    clearOptions: () => set({
        productOptions: [{ label: "전체", value: "전체" }],
        lineOptions: [{ label: "전체", value: "전체" }],
        modelOptions: [{ label: "전체", value: "전체" }],
        isLoaded: false,
    })
}));

/* 가공 플랫폼 */
// 데이터 가공 탭(가공) + 인공지능 분석 상세 조회(분석)
// - 결과 상세 조회 페이지
interface SelectedImageStore {
    selectedImageId: string;
    setSelectedImageId: (id: string) => void;
    selectedImageUrl: string;
    setSelectedImageUrl: (url: string) => void;
}

export const useSelectedImageStore = create<SelectedImageStore>((set) => ({
    selectedImageId: '',
    setSelectedImageId: (id) => set({ selectedImageId: id }),
    selectedImageUrl: '',
    setSelectedImageUrl: (url) => set({ selectedImageUrl: url }),
}))