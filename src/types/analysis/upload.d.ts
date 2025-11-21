export interface UploadData {
    uploadDate: string;
    inspectionItem: string;
    inspectionData: {
        count: number;
        name: string;
    };
    isFolder: boolean;
}

export type ModalType = 'success' | 'error-format' | 'error-folder' | 'not-selected' | null;

export interface UploadModalProps {
    type: ModalType;
    onClose: () => void;
}
