"use client";

import { useState, lazy, Suspense, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Input from "@/components/common/Input";
import BasicButton from "@/components/common/BasicButton";
import { useLoginSuccessStore, useMemberStore } from "@/store/store";
import Modal from "@/components/modal/Modal";
import { memberApi } from "@/apis/member";
import { IssueTokenRequest } from "@/types/member/types";

const BiInfo = lazy(() => import('react-icons/bi').then(module => ({
  default: module.BiInfoCircle
})));

export default function LoginPage() {
  const router = useRouter();
  const [isClickButton, setIsClickButton] = useState(false);

  const { setUsername, isLogin, setIsLogin } = useMemberStore();
  const { isModalOpen: isSuccessModalOpen, setIsModalOpen: setIsSuccessModalOpen, setIsModalClose: setIsSuccessModalClose } = useLoginSuccessStore();

  const [formData, setFormData] = useState<IssueTokenRequest>({
    username: "",
    password: ""
  });
  const isLoginButtonActive = formData.username !== ""
    && formData.password !== ""
    && formData.password.length === 4;

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsClickButton(true);

    try {
      const response = await memberApi.login(formData);
      if (response && response.status === "SUCCESS") {
        setIsLogin(true);
        setUsername(response.data.username); // 사용자 id 저장
        setIsSuccessModalOpen();
      } else {
        setIsLogin(false);
        setIsClickButton(false);
      }
    } catch (error) {
      console.error('login error', error);
      setIsLogin(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-white">
      <div className="w-[600px] flex flex-col items-center gap-12">
        <Image
          src="/assets/nexten_logo_b.png"
          alt="nexten logo"
          width={255}
          height={128}
          priority
          fetchPriority="high"
        />

        <h1 className="text-[36px] font-black text-black">
          로그인
        </h1>

        <form
          onSubmit={handleLogin}
          className="w-full flex flex-col gap-6"
        >
          <Input
            label="아이디"
            type="text"
            value={formData.username}
            isCorrect={!isClickButton || isClickButton && isLogin ? true : false}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />

          <Input
            label="비밀번호"
            type="password"
            maxLength={4}
            value={formData.password}
            isCorrect={!isClickButton || isClickButton && isLogin ? true : false}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />

          {
            isClickButton && !isLogin
              ? (
                <div className="flex flex-row items-center text-point-red text-xl gap-3 h-[30px]">
                  <Suspense fallback={<div></div>}>
                    <BiInfo size={30} />
                  </Suspense>
                  <p>아이디 또는 비밀번호를 다시 확인해주세요.</p>
                </div>
              )
              : (
                <div className="flex flex-row items-center text-point-red text-xl gap-3 h-[30px]" />
              )
          }

          <BasicButton
            type="submit"
            variant="primary"
            disabled={!isLoginButtonActive}
            className={isLoginButtonActive
              ? "hover:bg-light-gray/80 cursor-pointer"
              : ""
            }
          >
            로그인
          </BasicButton>
        </form>

        <div className="w-full border-t border-light-gray" />

        <BasicButton
          variant="secondary"
          className="rounded-none"
          onClick={() => router.push("/signup")}
        >
          회원가입
        </BasicButton>
      </div>

      {
        isSuccessModalOpen
          ? <Modal
            text="로그인에 성공했습니다."
            onClick={() => {
              setIsSuccessModalClose();
              router.push('/analysis/main');
            }}
            onClose={setIsSuccessModalClose}
          />
          : null
      }
    </div>
  );
}
