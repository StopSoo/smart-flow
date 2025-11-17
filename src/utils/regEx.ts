export const isValidUsername = (username: string) => {
    return (
        username.match(/^[A-Za-z]{4,30}$/) !== null
    );
}

export const isValidPw = (pw: string) => {
    return (
        pw.match(/^[0-9]{4}$/) !== null
    );
}

export const isValidPwConfirm = (pw: string, pwConfirm: string) => {
    return pw === pwConfirm;
}

export const isValidHeadqurter = (hq: string) => {
    return (
        hq.match(/^[A-Za-z0-9가-힣 _-]+$/) !== null
    );
}

export const isValidBranchName = (bn: string) => {
    return (
        bn.match(/^[A-Za-z0-9가-힣 _-]+$/) !== null
    );
}